import React from 'react';
import './coin.css';

export default function Coin({ name, image, symbol, price, marketCap, priceChange, priceChangePercent, high, low }) {
  return (
    <div className='coin-container'>
            <div className="coin">
                <img src={image} alt="" className='coin-image'/>

                <h1 className="coin-name">{name}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <div className="data-grp">
                <p className="price-label">Price</p>    
                <p className="coin-price">${price.toLocaleString() }</p>
                </div>
                <div className="data-grp">
                <p className="price-label">24h High</p>
                <p className="coin-high">${high.toLocaleString()}</p>
                </div>
                <div className="data-grp">
                <p className="price-label">24h Low</p>
                <p className="coin-low">${low.toLocaleString()}</p>
                </div>
                <div className="data-grp">
                <p className="price-label">24h +/-</p>
                    {priceChange < 0 ? (
                        <p className="price-change-red">{priceChange.toFixed(2)}</p>
                    ) : (<p className="price-change-green">{priceChange.toFixed(2)}</p>)}
                    </div>
                    <div className="data-grp">
                        <p className="price-label">24h %</p>
                    {priceChangePercent < 0 ? (
                        <p className="price-change-red">{priceChangePercent.toFixed(2)}%</p>
                    ) : (<p className="price-change-green">{priceChangePercent.toFixed(2)}%</p>)}
                    
                    </div>
                <div className="data-grp">
                <p className="price-label">Market Cap:</p>
                <p className="coin-volume">${marketCap.toLocaleString()}</p>
                </div>
                
            </div>
        

    </div>
  )
}
