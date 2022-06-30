import React  from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('../pages'));

function MyComponent() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact render={()=><Home />} />
        <Route path="/home" render={()=><Home />} />
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default MyComponent