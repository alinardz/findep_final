import React from 'react';
import {Ingresa} from '../../Auth/Ingresa';
import { Segment, Image, Grid } from 'semantic-ui-react';
import Tilt from 'react-tilt';

export const Portada = ()=>{
    return(
        <Segment basic>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                <Grid.Column width={7} style={{"paddingTop":"22vh"}}>
                 <h2 style={{"fontSize":"2.714286rem", "textAlign":"left", "marginLeft":"10%"}}>Descubre cómo optimizar tus finanzas para alcanzar tus sueños.</h2>
                 <br/>
                 <Ingresa/>
                </Grid.Column>
                <Grid.Column width={9}>
                <Tilt className="Tilt" options={{ max : 30, scale: 1.05 , speed: 500 }}><Image src='https://res.cloudinary.com/alinardz/image/upload/v1527379675/portada.png' id="imgportada"/></Tilt>
                </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        </Segment>
    )   
};