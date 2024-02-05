import React from 'react'
import './Shop.css'
import { BiRefresh } from "react-icons/bi";
import { FaDroplet } from "react-icons/fa6";
import { PiPlantLight } from "react-icons/pi";
const Shop = () => {
    return (
        <div className='shop'> <h1 className='abc'>Shop</h1>
            <div className='shop_top'>
                <div className='shop_top1'>
                    <div className='shop_img1'>
                        <img className='img' src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781791/Homepage-v3/Navigation/update/purification-big.jpg" alt="" />
                    </div>
                    <div className='shop_txt'>
                        <h1>Purification</h1>
                        <a href=''>Shop now</a>
                    </div>
                </div>
                <div className='shop_top1'>
                    <div className='shop_img2'>
                        <img className='img' src='https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781790/Homepage-v3/Navigation/update/home-big.jpg' alt="" />
                    </div>
                    <div className='shop_txt'>
                        <h1>Home</h1>
                        <a href=''>Shop now</a>
                    </div>
                </div>
                <div className='shop_top1'>
                    <div className='shop_img3'>
                        <img className='img' src='https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781790/Homepage-v3/Navigation/update/drinkware-big-us.jpg' />
                    </div>
                    <div className='shop_txt'>
                        <h1>Drinkware</h1>
                        <a href=''>Shop now</a>
                    </div>
                </div>
            </div>
            <div className='shop_bottom'>
                <div className='shop_bottom2'>
                    <span><BiRefresh size={60} /></span>
                    <h1>Say yes to refills</h1><br></br><br></br>
                    <p>Save money and make single-use water bottles a thing of the past.</p>
                </div>
                <div className='shop_bottom2'>
                    <span><FaDroplet size={50} /></span>
                    <h1>A smart way to sip</h1><br></br><br></br>
                    <p>PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience on the go.
                    </p>
                </div>
                <div className='shop_bottom2'>
                    <span><PiPlantLight size={60} /></span>
                    <h1>Hydrate with purpose</h1><br></br><br></br>
                    <p>A portion of proceeds supports environmental and clean water projects worldwide.</p>
                </div>
            </div>
        </div>
    )
}

export default Shop
