import React  from 'react'
import {  Switch, Route,Redirect } from 'react-router-dom';
import InternTestPage from './InternTestPage'
import { INTERN_BASE,INTERN_BASE_DETAIL } from '../const/urlBase';
import InternDetail from './InternDetail';

const InternRoute=()=>(
    <>
        <Switch>
            <Route path={INTERN_BASE} exact render={()=>(<InternTestPage />)}/>
            <Route path={INTERN_BASE_DETAIL}  render={()=>(<InternDetail />)}/>
            <Redirect to={INTERN_BASE}></Redirect>
        </Switch>
    </>
)

export default InternRoute
