import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';
import Tilt from 'react-tilt';

export const Metas = ()=>{
    return(
        <Segment basic>
        <h3 style={{"fontSize":"2.714286rem"}}>Establece tus metas y crea un plan de acción</h3>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                <Grid.Column width={7}>
                    <Tilt className="Tilt" options={{ max : 30, scale: 1.05 , speed: 500 }}><Image style={{width:"350px",marginLeft: "17%"}} src="https://res.cloudinary.com/alinardz/image/upload/v1527381315/metas.png" alt=""/></Tilt> 
                </Grid.Column>
                <Grid.Column width={9}>
                    <div style={{"padding":"90px 10% 0 0", "fontSize":"1.51429rem"}}>
                    <p>¿Cuál es tu sueño? ¿Ese viaje a Japón? ¿Pagar tus deudas? ¿Retirarte a los 30? Te ayudamos a crear el presupuesto ideal para lograrlo</p>
                    </div>
                </Grid.Column>
                </Grid.Row>
            </Grid> 
        </Segment>
    )   
};


