import React from 'react';
import './card.component.styles.scss';



const Card = ({id,name,price,imageUrl})=>(
    <div className='collection-item'>
        <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})` }}
        >

        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>

        </div>
        



    </div>
)
export default Card;
