import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'



import Header from './components/header'
import Search from './components/Search'
import UsersList from './components/UsersList'


const App = () => {

    return(
        <div>
            <Header/>
            <div className="mt-2 justify-content-center">
                <Search/>
            </div>
            <div>
                <UsersList/>
            </div>
        </div>
    )
}

ReactDOM.render(
    // <App />,
    <BrowserRouter>
        <Route path='/' component={Header}></Route>
        <Route path='/user/getAll' exact component={UsersList}></Route>
        <Route path='/user' exact component={Search}></Route>
    </BrowserRouter>,
    document.querySelector('#root')
)