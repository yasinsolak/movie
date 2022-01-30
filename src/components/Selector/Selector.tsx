import React from 'react'
import './index.scss'
import classNames from 'classnames'

export interface Select {
  title: string;
  id: number;
}

interface SelectorProps {
  data: Select[]
  activeTabID: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const Selector = ({data, activeTabID, setActiveTab}: SelectorProps) => {

  return(
    <div className='selector'>
      {data.map((e: Select, key) => {
        const isActive = activeTabID === e.id
        return (
          <div
            key={key}
            style={{transition: '0.5s all'}}
            className={classNames('anchor', {
              selected: isActive
            })}
            onClick={() => setActiveTab(e.id)}
          >
            <h3>{e.title}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Selector