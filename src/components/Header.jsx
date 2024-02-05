import React, { useState } from 'react'
import "./Header.css"
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
function Header() {
    const [hamburger, setHamburger] = useState(true)
    const [cross, setCross] = useState(false)
    return (
        <div className='header'>
            <div className="header_left">
                {hamburger ? (<span className='hamburger'><RxHamburgerMenu size={20} onClick={() => setHamburger(false)} /></span>) :
                    (<span className='hamburger'><RxCross2 size={25} onClick={() => setHamburger(true)} /></span>)}
                <div className={!hamburger ? ('hamburger-menu') : ('hamburger-menu-none')}>
                    <div className='hamburger-menu-top'>
                        <div className='hamburger-menu-top-card'>

                            <img src='https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_860/v1692947738/assets/spa/v3/shop/content_section-purification.jpg' />
                            <div className='drop1_txt'>
                                <h3>Purification</h3>
                                <br></br>
                                <p>Filter or purify water on the go</p>
                            </div>

                        </div>
                        <div className='hamburger-menu-top-card'>
                            <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_860/v1692947771/assets/spa/v3/shop/content_section-home.jpg" alt="" />
                            <div className='drop1_txt'>
                                <h3>Home</h3>
                                <br></br>
                                <p>Equip your home with zero nano filteration</p>
                            </div>
                        </div>
                        <div className='hamburger-menu-top-card'>
                            <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_860/v1692947779/assets/spa/v3/shop/content_section-drinkware-us.jpg" alt="" />
                            <div className='drop1_txt'>
                                <h3>Drinkware</h3>
                                <br></br>
                                <p>Hydrate efffortesly on the go</p>
                            </div>
                        </div>
                    </div>
                    <div className='hamburger-menu-bottom'>
                        <button >Explore all <span>&#8594;</span> </button>
                        <br></br><br></br>
                        <button>Gift sets <span>&#8594;</span></button>
                        <p>Filters and accessories</p>
                        <p>Corporate gifting</p>
                        <p>Texhnology</p>
                        <p>FAQ</p>
                        <p>Login</p>
                    </div>
                </div>

                <ul>
                    <button className='header_btn'>
                        <li className='underline'> SHOP ALL
                            <div className='drop'>
                                <div className='drop1'>
                                    <div className="drop1a">
                                        <button >Explore all <span>&#8594;</span> </button>
                                        <br></br><br></br>
                                        <button>Holiday sets <span>&#8594;</span></button>
                                        <p>Filters and accessories</p>
                                        <p>Corporate gifting</p>
                                        <h6>LEARN MORE</h6>
                                        <p>PureVis<span>tm</span> technology</p>
                                        <p>Nano zero technology</p>
                                    </div>
                                </div>
                                <div className='drop1'>
                                    <img src='https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_860/v1692947738/assets/spa/v3/shop/content_section-purification.jpg' />
                                    <div className='drop1_txt'>
                                        <h3>Purification</h3>
                                        <br></br>
                                        <p>Filter or purify water on the go</p>
                                    </div>

                                </div>
                                <div className='drop1'>
                                    <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_860/v1692947771/assets/spa/v3/shop/content_section-home.jpg" alt="" />
                                    <div className='drop1_txt'>
                                        <h3>Home</h3>
                                        <br></br>
                                        <p>Equip your home with zero nano filteration</p>
                                    </div>
                                </div>
                                <div className='drop1'>
                                    <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_860/v1692947779/assets/spa/v3/shop/content_section-drinkware-us.jpg" alt="" />
                                    <div className='drop1_txt'>
                                        <h3>Drinkware</h3>
                                        <br></br>
                                        <p>Hydrate efffortesly on the go</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </button>
                    <button className='header_btn'>
                        <li className='underline2'>PURIFICATION
                            <div className='drop'>
                                <div className='drop1'>
                                    <div className="drop1a">
                                        <button>Explore Purification <span>&#8594;</span> </button>
                                        <br></br><br></br>
                                        <button>Holiday sets <span>&#8594;</span></button>
                                        <p>Filters and accessories</p>
                                        <p>Corporate gifting</p>
                                        <h6>LEARN MORE</h6>
                                        <p>PureVis<span>tm</span> technology</p>
                                        <p>Nano zero technology</p>
                                    </div>
                                </div>
                                <div className='drop1 drop2' >
                                    <img src='https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDMB050A.png' />
                                    <div className='drop1_txt'>
                                        <h3>LARQ Bottle PureVistm</h3>
                                        <br></br>
                                        <p>from $99</p>
                                    </div>

                                </div>
                                <div className='drop1 drop2'>
                                    <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSBO071A.png" alt="" />
                                    <div className='drop1_txt'>
                                        <h3>LARQ Bottle Movement </h3>
                                        <br></br>
                                        <p>from $89</p>
                                    </div>
                                </div>
                                <div className='drop1 drop2'>
                                    <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BFDOB050A.png" alt="" />
                                    <div className='drop1_txt'>
                                        <h3>LARQ Bottle Filtered</h3>
                                        <br></br>
                                        <p>from $45</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </button>
                    <button className='header_btn'>
                        <li className='underline3'>HOME
                            <div className='drop'>
                                <div className='drop1'>
                                    <div className="drop1a">
                                        <button>Explore Home <span>&#8594;</span> </button>
                                        <br></br><br></br>
                                        <button>Holiday sets  <span>&#8594;</span></button>
                                        <p>Filters and accessories</p>
                                        <p>Corporate gifting</p>
                                        <h6>LEARN MORE</h6>
                                        <p>PureVis<span>tm</span> technology</p>
                                        <p>Nano zero technology</p>
                                    </div>
                                </div>
                                <div className='drop1 drop2' >
                                    <img src='https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAMB190A.png' />
                                    <div className='drop1_txt'>
                                        <h3>LARQ Pitcher PureVistm</h3>

                                        <p>Monaco blue</p>
                                        <p>from $148</p>
                                    </div>

                                </div>
                                <div className='drop1 drop2'>
                                    <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAPW190A.png" alt="" />
                                    <div className='drop1_txt'>
                                        <h3>LARQ Pitcher PureVistm</h3>

                                        <p>Monaco blue</p>
                                        <p>from $148</p>
                                    </div>
                                </div>
                                <div className='drop1 '>

                                    <div className='drop1_txt'>
                                        <h3>Drinkware</h3>
                                        <br></br>
                                        <p>Hydrate efffortesly on the go</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </button>
                    <button className='header_btn '>
                        <li className='underline4'>DRINKWATER
                            <div className='drop'>
                                <div className='drop1'>
                                    <div className="drop1a">
                                        <button>Explore Drinkware <span>&#8594;</span> </button>
                                        <br></br><br></br>
                                        <button>Holiday sets  <span>&#8594;</span></button>
                                        <p>Filters and accessories</p>
                                        <p>Corporate gifting</p>
                                        <h6>LEARN MORE</h6>
                                        <p>PureVis<span>tm</span> technology</p>
                                        <p>Nano zero technology</p>
                                    </div>
                                </div>
                                <div className='drop1 drop2' >
                                    <img src='https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWOB068A.png' />
                                    <div className='drop1_txt'>
                                        <h3>LARQ Bottle Swig Top</h3>
                                        <br></br>
                                        <p>from $39     </p>
                                    </div>

                                </div>
                                <div className='drop1 drop2'>
                                    <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNSOB050A.png" alt="" />
                                    <div className='drop1_txt'>
                                        <h3>LARQ Bottle Flip</h3>
                                        <br></br>
                                        <p>from $40</p>
                                    </div>
                                </div>
                                <div className='drop1 drop2 '>
                                    <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNDMB050A.png" alt="" />
                                    <div className='drop1_txt'>
                                        <h3>LARQ Bottle Twist Top</h3>
                                        <br></br>
                                        <p>from $50</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </button>
                </ul>
            </div>
            <div className="header_middle">
                <img src="https://mma.prnewswire.com/media/1009110/LARQ_Logo.jpg?p=facebook" alt="" />
            </div>
            <div className="header_right">
                <ul>
                    <li>TECHNOLOGY</li>
                    <li>FAQ</li>

                </ul>
                <span><Link to='/login'><CgProfile className='icon' size={25} /></Link></span>
                <span onClick={() => setCross(true)}><FiShoppingCart className='icon' size={25} /></span>
            </div>

            {/* side cart */}
            <div className={cross ? ('side-cart-container') : ('side-cart-container-none')}>
                <div className='side-cart'>
                    <div className='side-cart1'>
                        <h1>Your cart</h1>
                        <span className='side-cart1-icon' onClick={() => setCross(false)}><RxCross2 size={25} /></span>
                    </div>
                    <div className='side-cart2'></div>
                </div>
            </div>
        </div>
    )
}

export default Header
