import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Account from './pages/Account';
import About from './pages/About';
import FAQ from './pages/FAQ';
import NotFound from './pages/Http404';
import FightExplorer from './pages/FightExplorer';
import FightMarket from './pages/FightMarket';
import AuthGuard from './shared/AuthGuard';
import GuestGuard from './shared/GuestGuard';
import Auction from './pages/Auction';

import './../../public/scss/_base.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip({
      placement: 'top',
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      title: 'Coming Soon'
    });
  }

  render() {
    const ComposedAccount = AuthGuard(Account);
    const ComposedAuth = GuestGuard(Auth);
    return (
      <div>
        {/* <Route exact path="/auction" component={Auction} /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/auth"
            render={props => <ComposedAuth {...props} />}
          />
          {/* <Route
            exact
            path="/account"
            render={props => <ComposedAccount {...props} />}
          /> */}
          <Route exact path="/about" component={About} />
          {/*
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/fight-explorer" component={FightExplorer} />
            <Route exact path="/fight-market" component={FightMarket} />
          */}
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
