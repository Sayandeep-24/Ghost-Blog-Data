

import {Route, Switch} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Pages from './Pages/Pages'
import Posts from './Pages/Posts'


function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact><Dashboard /></Route>
        <Route path='/pages'><Pages /></Route>
        <Route path='/posts'><Posts /></Route>
      </Switch>
    </div>
  );
}

export default App;
