import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { BrowserRouter as Routergh } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          // console.log(this.state); // current user
        });
      }
      
    setCurrentUser(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
          <Route path={process.env.PUBLIC_URL + '/shop'} component={ShopPage} />
          <Route exact path={process.env.PUBLIC_URL + '/checkout'} component={CheckoutPage} />
          <Route exact path={process.env.PUBLIC_URL + '/signin'} render={() => this.props.currentUser ? 
            (<Redirect to={process.env.PUBLIC_URL + '/'} />) : (<SignInAndSignUp/>) } />
        </Switch>
      </div>
    );
  }

}

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchedToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchedToProps)(App);
