import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71i723QTb+L._SX3000_.jpg" alt="" />
                {/* Row 1 */}
                <div className="home__row">
                    <Product id="1" title="Apple MacBook Air (Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM)-Gold" image="https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg" price={87999} rating={5} />

                    <Product id="2" title="OPPO Reno5 Pro 5G (Starry Black, 8GB RAM, 128GB Storage)" image="https://m.media-amazon.com/images/I/41OBf52bnOL._AC_SY200_.jpg" price={14999} rating={4} />

                    <Product id="3" title="Honor 2 BT Watch 2 with Battery- Charcoal Black" image="https://m.media-amazon.com/images/I/61W4meSdVQL._AC_SY200_.jpg" price={9999} rating={4} />

                    <Product id="4" title="Qube By Fort Collins Men's Sweatshirt" image="https://m.media-amazon.com/images/I/71m3CV+Uo2L._UX569_.jpg" price={799} rating={4} />
                </div>

                {/* Row 2 */}
                <div className="home__row">
                    <Product id="1" title="Apple MacBook Air (Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM)-Gold" image="https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg" price={87999} rating={5} />

                    <Product id="2" title="OPPO Reno5 Pro 5G (Starry Black, 8GB RAM, 128GB Storage)" image="https://m.media-amazon.com/images/I/41OBf52bnOL._AC_SY200_.jpg" price={14999} rating={4} />

                    <Product id="3" title="Honor 2 BT Watch 2 with Battery- Charcoal Black" image="https://m.media-amazon.com/images/I/61W4meSdVQL._AC_SY200_.jpg" price={9999} rating={4} />

                    <Product id="4" title="Qube By Fort Collins Men's Sweatshirt" image="https://m.media-amazon.com/images/I/71m3CV+Uo2L._UX569_.jpg" price={799} rating={4} />

                </div>

                {/* Row 3 */}
                <div className="home__row">

                </div>
            </div>
        </div>
    )
}

export default Home
