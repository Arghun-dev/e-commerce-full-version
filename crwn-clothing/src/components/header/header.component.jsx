import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/4.3 crown.svg'
import { auth } from '../../firebase/firebase.utils'

// style
import './header.styles.scss'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/contact' className='option'>Contact</Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header