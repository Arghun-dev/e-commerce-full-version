import React from 'react';

// style
import './collection-item.styles.scss'

const CollectionItem = ({id, name, imageUrl, price}) => (
    <div>
        <img src={imageUrl} className='image' />
        <div className='content'>
            <span>{name}</span>
            <span>{price}</span>
        </div>
    </div>
)

export default CollectionItem