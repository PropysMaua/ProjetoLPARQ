import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Header from './components/header'
import Search from './components/Search'
import UsersList from './components/UsersList'
import SignUp from './components/SignUp'


ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={Header}></Route>
        <Route path='/user/home' exact component={UsersList}></Route>
        <Route path='/user/search' exact component={Search}></Route>
        <Route path='/user/signUp' exact component={SignUp}></Route>
    </BrowserRouter>,
    document.querySelector('#root')
)