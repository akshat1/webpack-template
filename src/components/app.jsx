import React from 'react'
import {
  NavLink as Link,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';
import { getStore } from '../redux/store';
import Styles from './app.module.less';
import { getHistory } from '../lib/get-history';
import FourOhFour from './404';

export default () =>
  <Provider store={getStore()}>
    <ConnectedRouter history={getHistory()}>
      <div className={Styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/something-else">Something Else</Link>
      </div>
      <div className="app__content">
        <Switch>
          <Route exact path="/">
            <p>Home sweet home!</p>
          </Route>
          <Route path="/something-else">
            <p>It&apos;s something else!</p>
          </Route>
          <Route path="*">
            <FourOhFour />
          </Route>
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>;
