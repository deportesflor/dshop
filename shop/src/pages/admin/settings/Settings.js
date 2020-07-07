import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ServerSettings from './Server'
import Users from './Users'
import Console from './Console'
import Appearance from './Appearance'
import Payments from './Payments'
import Apps from './Apps'
import Deployments from './deployments/Deployments'
import Shipping from './Shipping'

const AdminSettings = () => (
  <Switch>
    <Route path="/admin/settings/users">
      <Users />
    </Route>
    <Route path="/admin/settings/server">
      <ServerSettings />
    </Route>
    <Route path="/admin/settings/console">
      <Console />
    </Route>
    <Route path="/admin/settings/payments">
      <Payments />
    </Route>
    <Route path="/admin/settings/apps">
      <Apps />
    </Route>
    <Route path="/admin/settings/deployments">
      <Deployments />
    </Route>
    <Route path="/admin/settings/shipping">
      <Shipping />
    </Route>
    <Route>
      <Appearance />
    </Route>
  </Switch>
)

export default AdminSettings
