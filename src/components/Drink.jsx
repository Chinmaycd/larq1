import React from 'react'
import './Drink.css'
import { useState } from 'react'
const Drink = () => {
    const [change, setChange] = useState(true)
    // const [change2, setChange2] = useState(true)
    const drink_data = [
        {
            img: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-1.jpg',
            txt1: 'Award winning design',
            txt2: 'When it comes to form and function, we’ve got it down.',
            btn: 'Shop now'
        },
        {
            img: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-2.jpg',
            txt1: 'The future of hydration',
            txt2: 'PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience.',
            btn: 'how it works'
        },
        {
            img: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-3.jpg',
            txt1: 'Better for you and the planet',
            txt2: 'A portion of every purchase helps restore our oceans and brings clean water to communities in need.',
            btn: 'measure my impact'
        }


    ]

    return (
        <div className='drink'>
            <button className={change ? ('back') : ('back2')} onClick={(() => { setChange(true) })}><span>&#8594;</span> back</button>
            <div className={change ? ('drink_left') : ('drink_left2')}>
                <p>Our mission</p>
                <h1>Drink Brilliantly</h1>
                <p>We make it easy to opt for the healthier and more sustainable hydration choice, anytime and anywhere.
                </p>
                <button onClick={(() => { setChange(false) })}>Learn more <span>&#8594;</span></button>
            </div>
            <div className={change ? ('drink_right') : ('drink_right2')} >
                {drink_data.map((data, i) => (
                    <div className='card'>
                        <div className='img_div'>
                            <img className='img' src={data.img} />
                        </div>
                        <div className='txt_div'>
                            <h1 className='txt'>{data.txt1}</h1>
                            <p className='txt'>{data.txt2}</p>
                            <button>{data.btn} <span>&#8594;</span></button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Drink
