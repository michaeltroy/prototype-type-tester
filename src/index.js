import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router, Route, Link, History } from 'react-router'

// import NotFound from './ui/404'

import TypeTester from './ui/type-tester'

ReactDOM.render(
  <TypeTester />,
  document.getElementById('content')
);
