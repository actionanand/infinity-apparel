import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { ReactComponent as Logo } from '../../assets/infinity-bw.svg';
import { ReactComponent as Logo } from '../../assets/infinity-apparal.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to={process.env.PUBLIC_URL + '/'} className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to={process.env.PUBLIC_URL + '/shop'}>
        SHOP
      </Link>
      <Link className='option' to={process.env.PUBLIC_URL + '/'}>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
        :
        <Link className='option' to={process.env.PUBLIC_URL + '/signin'}>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden? null : <CartDropdown/>
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden
});

export default connect(mapStateToProps)(Header);