import React from 'react';
import {Link} from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';

export const Diagnostico = ()=>{
    return(
        <Segment basic>
       
            <div className="diagnostico"s>
                <h3 style={{"fontSize":"2.714286rem"}}>Diagnóstico</h3>
                <p style={{"fontSize":"1.51429rem"}}>¿Qué tan saludables son tus finanzas actualmente? ¡Descúbrelo!</p>
                <Button inverted color='blue'onClick={this.handleSubmit} ><Link style={{"textDecoration": "none", "color": "inherit"}} to='/diagnostico'>Diagnóstico Express</Link></Button>
            </div>

        </Segment>
    )   
};

