import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {Home} from '../../Fragments/Home'
import {Doctors} from '../../Fragments/Doctors'
import {Stores} from '../../Fragments/Stores'

export const DashboardContent = () => {

  return (
    <>
        <Suspense fallback={<span>Loading ...</span>}>
        <Switch>

            <Route exact path='/doctors' name='Doctors' render={(props) => (<Doctors/>)}/>
            <Route path='/stores' name='Store' render={(props) => (<Stores/>)}/>

            <Route path='/' name='Home' render={(props) => (<Home/>)}/>

            <Redirect from="/" to="/" />

        </Switch>
        </Suspense>
    </>
  )
}
