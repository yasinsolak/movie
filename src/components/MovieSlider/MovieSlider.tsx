import { useEffect, useRef, useState } from "react";
import { MovieModule } from "../../model/movie";
import { Card } from "../Card";
import { Selector } from "../Selector";
import {Movies as MovieAPI} from '../../services';
import { Select } from "../Selector/Selector";
import './index.scss'

interface MovieSliderProps {
  selectorData: Select[]
}

const MovieSlider = ({selectorData}: MovieSliderProps) => {
  const [movies, setMovies] = useState([])
  const [active, setActive] = useState(1)
  const scrollableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    MovieAPI.get(active.toString()).then(e => setMovies(e.data.results))
  }, [active])

  useEffect(() => {
    let options = {
      root: scrollableRef.current,
      rootMargin: '0px 100px 0px 100px',
      threshold: 1.0
    }

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if(entry.intersectionRatio > 0) {
            // @ts-ignore
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      }, options);


    scrollableRef.current?.querySelectorAll('img').forEach(img => observer.observe(img));

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollableRef.current?.querySelectorAll('img').forEach(img => observer.unobserve(img));
    }
  }, [movies])

  return(
    <div>
      <div className='column-header'>
        <h2>Popüler Olanlar</h2>
        <Selector
          data={selectorData}
          activeTabID={active}
          setActiveTab={setActive}
        />
      </div>
      <div ref={scrollableRef} className='card-container'>
      {movies.map((e: MovieModule.Movie) => {
        return(
          <Card
            key={e.id}
            img={e?.poster_path}
            title={e?.original_title}
            release_date={e.release_date}
            rating={e.vote_average * 10}
          />
        )
        })
      }
      </div>
    </div>
  )
}

export default MovieSlider;