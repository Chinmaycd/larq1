import React from 'react'
import data from './Data'
import './Trending.css'
import Trending from './Trending'

const NowTrending = () => {
    return (
        <div className='trending'>
            <div className="trending_up">
                <h1> Now trending</h1>
            </div>
            <div className="tr-card">

                {data.map((item, i) => (
                    <>
                        <div className="trending_card" key={i}>
                            <Trending Props={item} index={i} />
                        </div>
                    </>
                ))}
            </div>

        </div>
    )
}

export default NowTrending
