import React from 'react'

// styles 
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    return (
        <div 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className={`menu-item ${size}`}
        >
            <div className='content'>
                <h1 className='title'>{ title }</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem