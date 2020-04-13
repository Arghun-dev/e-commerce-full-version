import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIN, ...others}) => (
    <button className={`${isGoogleSignIN ? 'google-sign-in' : ''} custom-button`} {...others}>
        {children}
    </button>
)

export default CustomButton