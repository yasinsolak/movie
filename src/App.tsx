import './App.scss';
import { MovieSlider } from './components/MovieSlider';

const popular = [
  {
    id:1,
    title: 'Yayın Akışı'
  },
  {
    id:2,
    title: 'Televizyonda'
  },
  {
    id:3,
    title: 'Kiralık'
  },
  {
    id:4,
    title: 'Sinemalarda'
  }
]

const filmTv = [
  {
    id:1,
    title: 'Filmler'
  },
  {
    id:2,
    title: 'TV'
  }
]

function App() {
  return (
    <div>
      <MovieSlider selectorData={popular}/>
      <MovieSlider selectorData={filmTv}/>
    </div>
  );
}

export default App;
