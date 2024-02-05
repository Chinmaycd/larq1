import React from 'react'
import './Brilliant.css'
import { MdOutlineStarPurple500 } from "react-icons/md";
const Brilliant = () => {
    return (
        <div className='brilliant'>
            <div className='brilliant1'>
                <div className='brilliant1_txt'>
                    <h1>Brilliant</h1><br></br>
                    <span><MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 /></span>
                    <p>based on 1045 reviews</p>
                </div>
                <div className='brilliant1_btn'>
                    <button>All reviews  <span>&#8594;</span></button>
                </div>
            </div>
            <div className='brilliant2'>
                <div className='brilliant3'>
                    <p>What’s the Next Status Water Bottle? Three of our experts named the LARQ bottle as one to watch.</p>
                    <img src='https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/strategist.png'></img>
                </div>
                <div className='brilliant3'>
                    <p>The result is that every glass of water tastes crisp and fresh.</p>
                    <img src='https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/oprah_Magazine.png'></img>
                </div>
                <div className='brilliant3'>
                    <p>LARQ's PureVis™ water pitcher erased my fears about drinking water from the tap.</p>
                    <img src='https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/digital_trends.png'></img>
                </div>
                <div className='brilliant3'>
                    <p>You Should Ditch Your Old Water Dispenser For The High-Tech LARQ Pitcher PureVis™.</p>
                    <img src='https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1689147058/v3-images/media-block/BP-logo-black.png'></img>
                </div>
            </div>
        </div>
    )
}

export default Brilliant
