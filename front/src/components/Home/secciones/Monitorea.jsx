import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';
import Tilt from 'react-tilt';

export const Monitorea = ()=>{
    return(
        <Segment basic>
            <h3 style={{"fontSize":"2.714286rem"}}>Monitorea tu avance</h3>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                <Grid.Column width={7}>
                <div style={{"padding":"80px 0 0 7%", "fontSize":"1.51429rem"}}>
                    <p>Registra tus ingresos y gastos, nosotros te decimos qué tan cerca estás de tus sueños.</p>
                </div>
                </Grid.Column>
                <Grid.Column width={9}>
                    <Tilt className="Tilt" options={{ max : 30, scale: 1.05 , speed: 500 }}><Image style={{width:"450px",marginLeft: "17%"}} src="https://res.cloudinary.com/alinardz/image/upload/v1527387530/avances-01.png" alt=""/></Tilt>   
                </Grid.Column>
                </Grid.Row>
            </Grid> 
        </Segment>
    )   
};

