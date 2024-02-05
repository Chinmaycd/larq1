import React, { useEffect, useState } from 'react';
import './Trending_buy.css';
import data from './Data';
import { useParams } from 'react-router-dom';

const Trending_buy = () => {
    const [btn, setBtn] = useState(true);
    const { index } = useParams();
    const [selectedSize, setSelectedSize] = useState('23 oz'); // Set default size to '23 oz'

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        setBtn(size === '23 oz');
    };

    return (
        <div className='trending_buy'>
            <div className='trending_buy1'>
                <img src={data[index].img} alt="Product" />
            </div>
            <div className='trending_buy2'>
                <h1>{data[index].title}</h1>
                <h2>
                    {selectedSize === '23 oz' ? "$" + data[index].price2[data[index].size.indexOf(selectedSize)] : "$" + data[index].size_price[data[index].size.indexOf(selectedSize)]}
                </h2>
                <h4>Size</h4>
                <span>
                    {data[index].size.map((size, idx) => (
                        <div key={idx} onClick={() => handleSizeChange(size)} className={selectedSize === size ? 'button' : 'button2'}>
                            <input
                                type="radio"
                                id={`a${idx}`}
                                name="check-substitution-2"
                                checked={selectedSize === size}
                                onChange={() => { }}
                            />
                            <label className="btn btn-default" htmlFor={`a${idx}`}>
                                {size}
                            </label>
                        </div>
                    ))}
                </span>
                <h2>{data[index].desc}</h2>
                <button className='add-btn'>
                    Add to cart - {selectedSize === '23 oz' ? "$" + data[index].price2[data[index].size.indexOf(selectedSize)] : "$" + data[index].size_price[data[index].size.indexOf(selectedSize)]}
                </button>
            </div>
        </div>
    );
};

export default Trending_buy;
