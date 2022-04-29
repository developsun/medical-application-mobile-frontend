import React, { Suspense } from 'react'
import { useHistory } from "react-router-dom";
import { Redirect, Route, Switch } from 'react-router-dom'
import {Doctor} from '../../Fragments/Doctor'
import {Store} from '../../Fragments/Store'
import {Chat} from "../../Fragments/Chat";

export const DetailedContent = () => {
  let history = useHistory();
  return (
    <>
        <Suspense fallback={<span>Loading ...</span>}>
        <div className="detailed-content-show-back-area">
          <div className="container px-4 py-3">
            <div className="col-2" onClick={history.goBack}>
                <button className="btn material-icons shadow-sm p-2 fs-6 rounded bg-white">chevron_left</button>
            </div>
          </div>
        </div>
          <div className="">
            <Switch>
                <Route path='/details/doctors/:id' name='Doctor' render={(props) => (<Doctor/>)}/>
                <Route path='/details/chat/:id' name='Doctor' render={(props) => (<Chat/>)}/>
                <Route path='/details/store/:id' name='Doctor' render={(props) => (<Store/>)}/>
                <Redirect from="/" to="/"/>
            </Switch>
          </div>
        </Suspense>
    </>
  )
}
