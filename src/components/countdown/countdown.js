import React, { useState, useEffect } from 'react'
import './styles.css'

const COUNTDOWN_TARGET = new Date('2024-12-31T23:59:59')

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date()
  const Days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24))
  const Hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24)
  const Minutes = Math.floor(totalTimeLeft / (1000 * 60) % 60)
  const Seconds = Math.floor((totalTimeLeft / 1000) % 60)
  return { Days, Hours, Minutes, Seconds }
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="countdown">
      <h2> Before New Year </h2>
      <div className="content">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0]
          const value = el[1]
          return (
            <div className="box" key={label}>
              <div className="value">
                <span className='text'>{value}</span>
              </div>
              <span className="label">{label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Countdown
