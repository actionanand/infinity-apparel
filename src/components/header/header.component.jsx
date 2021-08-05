import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/infinity-apparal.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectHidden } from '../../redux/cart/cart.selectors';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import CartContext from '../../contexts/cart/cart.context';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const [hidden, setHidden] = useState(true);
  const onToggleHidden = () => setHidden(!hidden);

  return(
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
        <CartContext.Provider value={{
          hidden,
          toggleHidden: onToggleHidden
        }}>
          <CartIcon/>
        </CartContext.Provider>
      </div>
      {
        hidden? null : <CartDropdown/>
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  hidden: selectHidden
});

export default connect(mapStateToProps)(Header);