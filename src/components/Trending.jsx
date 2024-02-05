import React, { useEffect, useState } from 'react'
import './Trending.css'
import data from './Data';
import { Link } from "react-router-dom";

const Trending = ({ Props, index }) => {
    const [img, setImg] = useState(false);
    const [img_index, setImg_index] = useState(0)

    //show index of inner selected images with border
    // useEffect(() => console.log(img_index))

    //change main image onclick on inner image
    const imageChange = (x, y, index) => {
        data.forEach((item, i) => {
            // console.log(index, i);
            if (index === i) {
                item.img = x;
                item.desc = Props.desc2[y];
                item.price = Props.price2[y];
                setImg(!img)
            }
        })
    }
    return (
        <div className="trending_down">
            <Link to={`/buy/${index}`} >
                <div className='card_img'>
                    <img src={Props.img} />
                </div>
            </Link>

            <h2>{Props.title}</h2><br></br>
            <p>{Props.desc}</p>
            <div className='choice'>
                {Props.choice.map((x, y) => (
                    <div className='choice1' key={y}>
                        <img className={img_index == y ? ('choice1_img') : ('choice1_img_noborder')} src={x} alt=""
                            onClick={() => {
                                imageChange(x, y, index);
                                setImg_index(y);
                            }}
                        />
                    </div>
                ))}
            </div><br></br>
            <p>From ${Props.price}</p>
        </div>
    )
}

export default Trending;