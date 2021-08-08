import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/infinity-apparal.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';
import { default as CartIcon } from '../cart-icon/cart-icon.container';
import { default as CartDropdown } from '../cart-dropdown/cart-dropdown.container';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden? null : <CartDropdown/>
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);