import React from 'react'
import shirt from './image/shirt.jpg'

function Card() {
    return (
        <div className='card'>
            <img className='card-img' src={shirt} alt='shirt' />
            <div className='card-body'>
                <h2 className='title'>Shirt</h2>
                <select>
                    <option value={'m'}>m</option>
                    <option value={'l'}>l</option>
                    <option value={'xl'}>xl</option>
                    <option value={'xxl'}>xxl</option>
                </select>
                <div className='card-button'>
                    <button className='button'>Buy Now</button>
                    <button className='button'>Add Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Card