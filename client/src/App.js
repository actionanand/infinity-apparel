import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';

import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';


const HomePage = lazy(() => import('./pages/homepage/homepage.component'));

const App = ({ onCheckingUserSession, currentUser }) => {
  useEffect(() => {
    onCheckingUserSession()
  }, [onCheckingUserSession]);

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Suspense fallback={ <div>Loading...</div> }>
          <Route exact path='/' component={HomePage} />
        </Suspense>
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp/>) } />
      </Switch>
    </div>
  );

}

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  onCheckingUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
