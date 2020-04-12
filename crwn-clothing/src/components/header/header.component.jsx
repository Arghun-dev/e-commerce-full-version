import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/4.3 crown.svg'

// style
import './header.styles.scss'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/contact' className='option'>Contact</Link>
        </div>
    </div>
)

export default Header