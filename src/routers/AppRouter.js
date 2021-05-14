import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from '../components/Form'
import React from 'react'
import Perfil from '../components/Perfil';
import NotFound from '../components/NotFound';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/perfil" component={Perfil}/>
                <Route exact path="/"component={Form}/>
                <Route path="*"component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default AppRouter
