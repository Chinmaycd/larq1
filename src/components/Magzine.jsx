import React from 'react'
import './Magzine.css'

const Magzine = () => {
    // const { image, text, read } = data;
    const data = [
        {
            image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876841/Homepage-v3/larq_pitcher_on_table.png',
            txt: 'I’m a nutritionist, and I only use filtered water. Here’s why.',
            read: 'Read more'

        },
        {
            image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876902/Homepage-v3/environment_plastic.png',
            txt: 'This is how much plastic you are eating per week',
            read: 'Read more'

        },
        {
            image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876924/Homepage-v3/New_york_view.png',
            txt: 'How clean is New York Tap Water?',
            read: 'Read more'

        },
        {
            image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876988/Homepage-v3/dished_with_food.png',
            txt: 'How to remove PFAS, PFOA, PFOS from tap water',
            read: 'Read more'

        },
        {
            image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685304669/Homepage-v3/london_bridge.jpg',
            txt: 'How clean is London tap water?',
            read: 'Read more'

        },
        {
            image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685304702/Homepage-v3/larq_bottle_on_the_water.jpg',
            txt: 'How to clean your reusable water bottle (if you don’t have a self-cleaning one)',
            read: 'Read more'

        },
        {
            image: 'https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685304729/Homepage-v3/interior_design.jpg',
            txt: 'What is Japandi Interior Design?',
            read: 'Read more'

        },

    ]
    return (<>
        <div className='magzine_top'>
            <div className='magzine_top1'>
                <h1>basq magazine</h1>
                <p>Take a peek at our online magazine where we cover everything from water to travel and wellness.</p>
            </div>
            <div className='magzine_top2'>
                <button>Explore basq  <span> &#8594;</span></button>
            </div>
        </div>
        <div className='outer-wrapper'>
            <div className="inner-wrapper">

                {data.map((item, index) => (
                    <>
                        <div className="pseudo-item">
                            <img key={(item.index)} src={item.image} />
                            <p>{item.txt}</p>
                            <br></br>
                            <a href=''>{item.read}</a>
                        </div>
                    </>
                )
                )}


            </div>
        </div>

    </>
    )
}

export default Magzine
