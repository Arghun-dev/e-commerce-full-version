import React, { Component } from 'react'

// style
import './collection-preview.styles.scss'

// components
import CollectionItem from '../collection-item/collection-item.component'

class CollectionPreview extends Component {
    render() {
        const { id, title, items } = this.props
        return (
            <div className='collection-preview'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <div className='preview'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
                </div>
            </div>
        )
    }
}

export default CollectionPreview
