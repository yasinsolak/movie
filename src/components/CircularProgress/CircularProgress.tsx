import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './index.scss'

interface CircularProgressProps {
  value: number;
}

const CircularProgress = ({value}: CircularProgressProps) => {
  return(
    <div className='div'>
      <CircularProgressbar
        className='circular-progress'
        value={value}
        maxValue={100}
        text={`${value}%`}
        styles={buildStyles({
          textSize: '24px',
          pathTransitionDuration: 0.5,
          textColor: '#ffffff',
          trailColor: '#d6d6d6',
          pathColor: value > 70 ? 'green' : 'orange',
        })}
      />
    </div>
  )
}

export default CircularProgress