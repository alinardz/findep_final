import React, {Component} from 'react';
import {Portada} from './secciones/Portada';
import {Diagnostico} from './secciones/Diagnostico';
import {Metas} from './secciones/Metas';
import {Monitorea} from './secciones/Monitorea';
import {Tips} from './secciones/Tips';
import {Comienza} from './secciones/Comienza';

class Homepage extends Component{
    render(){
        return(
            <div>
                <Portada/>
                <Diagnostico/>
                <Metas/>
                <Monitorea/>
                <Tips/>
                <Comienza/>
            </div>
        )
    }
}

export default Homepage;