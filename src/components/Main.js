import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ContentFilter from './ContentFilter';
import Contact from './Contact';

// The Header creates links that can be used to navigate
// between routes.
const Main = () => (
  <div class="container">
    <Switch>
      <Route exact path='/' component={ContentFilter}/>
      <Route path='/contact' component={Contact}/>
      {/* <Route path='/schedule' component={Schedule}/> */}
    </Switch>
  </div>
)

export default Main
