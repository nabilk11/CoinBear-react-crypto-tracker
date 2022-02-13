import React from 'react';

export default function Coin({ name, image, symbol, price, marketCap, priceChange, priceChangePercent }) {
  return (
    <div className='coin-container'>
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="" className='coin-image'/>
                <h1 className="coin-name">{name}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${ price }</p>
                <p className="coin-volume">Market Cap: ${marketCap.toLocaleString()}</p>
                <div className="plus-minus">
                    {priceChange < 0 ? (
                        <p className="price-change red">{priceChange.toFixed(2)}</p>
                    ) : (<p className="price-change green">{priceChange.toFixed(2)}</p>)}
                    {priceChangePercent < 0 ? (
                        <p className="percent-change red">{priceChangePercent.toFixed(2)}%</p>
                    ) : (<p className="percent-change green">{priceChangePercent.toFixed(2)}%</p>)}
                </div>
            </div>
        </div>

    </div>
  )
}
