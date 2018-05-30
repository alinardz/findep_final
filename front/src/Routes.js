import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import Perfil from './components/Perfil/Perfil';
import {Ingresa} from './components/Auth/Ingresa';
import Blog from './components/Blog/Blog';
import Diagnostico from './components/Perfil/Diagnostico/Diagnostico';
import {ListaArticulos} from './components/Blog/Articulos/ListaArticulos';

export const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/perfil' component={Perfil}/>
            <Route path='/ingresa' component={Ingresa}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/diagnostico' component={Diagnostico}/>
            <Route path='/blog/articulos' component={ListaArticulos}/>
        </Switch>
    )
};