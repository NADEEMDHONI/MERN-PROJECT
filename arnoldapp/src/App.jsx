import react, { useEffect,useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Login from './Login';
import Singup from './Singup';
import AddCard from './AddCard'
import Singleproduct from './Singleproduct';
import { Switch, Route, Redirect, Router } from 'react-router-dom';

import { CardContext} from './CardContext';

import {getCard,storeCard} from './Helpers'
const App = () => {

    const [cart,setCart]=useState({});
    useEffect(()=>{
        getCard() .then(cart =>{
            setCart(JSON.parse(cart));
        });
     
      
    },[]);

    useEffect(()=>{
        storeCard(JSON.stringify(cart));
      
    },[cart]);

    return (
        <>
        
            <Switch>
            <CardContext.Provider value={{cart ,setCart}}>
            <Route exact path='/' component={Login} />
            <Route exact path='/singup' component={Singup} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/menu' component={Menu} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Singup} />
                <Route exact path='/addcard' component={AddCard} />
                <Route exact path='/menu/:_id' component={Singleproduct}/>
                <Redirect to='/' />
                </CardContext.Provider>
            </Switch>
        </>
    )
};
export default App;
