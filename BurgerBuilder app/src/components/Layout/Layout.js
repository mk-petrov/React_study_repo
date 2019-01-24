import React from 'react'
import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'

import classes from './Layout.css' // import a classes object with css props

const layout = (props) => (
  <Aux>
    <Toolbar />

    {/* use the main as a wrapper for the core component we want to show */}
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout
