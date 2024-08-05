import React from 'react'
import './styles.css'

const Countdown = () => {
  return (
    <div className='countdown'>
      <h2>Countdown</h2>
      <div className="content">
        <div className="box">
			<div className='value'><span>30</span></div>
			<span className='label'>days</span>
		</div>
        <div className="box">
			<div className='value'><span>10</span></div>
			<span className='label'>hours</span>
		</div>
        <div className="box">
			<div className='value'><span>30</span></div>
			<span className='label'>minutes</span>
		</div>
        <div className="box">
			<div className='value'><span>30</span></div>
			<span className='label'>seconds</span>
		</div>
      </div>
    </div>
  )
}

export default Countdown
