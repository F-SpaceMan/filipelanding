import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Contact from './components/contact/contact'
import Home from './components/Home'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}