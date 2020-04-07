import React from 'react'

// Data
import SHOP_DATA from './shop_data'

// components
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                {collections.map(({id, ...others}) => 
                    <CollectionPreview key={id} {...others} />
                )}
            </div>
        )
    }
}

export default ShopPage