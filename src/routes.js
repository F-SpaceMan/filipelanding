import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Cliente from './components/cliente/cliente'
import Home from './Home'
import Produto from './components/produto'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/cliente' component={Cliente} />
                <Route path='/produto' component={Produto}/>
            </Switch>
        </BrowserRouter>
    )
}