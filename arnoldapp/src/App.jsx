import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Login from './Login';
import Singup from './Singup';

import { Switch, Route, Redirect } from 'react-router-dom';
const App = () => {

    return (
        <>
            <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/singup' component={Singup} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/menu' component={Menu} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Singup} />
                <Redirect to='/' />
            </Switch>
        </>
    )
};
export default App;
