import classNames from "classnames"
import { ImgHTMLAttributes, useState } from "react"
import Spinner from "../Spinner/Spinner"
import './index.scss'

const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false)

  return(
    <div className={classNames('image', {
      loaded: loaded
    })}>
      <img {...props} alt="new" src="" data-src={props.src} onLoad={() => setLoaded(true)}/>
      {!loaded && (
        <div className="spinner">
          <Spinner />
        </div>
      )}
    </div>
  )
}

export default Image