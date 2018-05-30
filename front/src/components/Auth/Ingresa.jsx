import React from 'react';
import Registrate from './Registrate';
import { Button, Image, Modal } from 'semantic-ui-react';

export const Ingresa = ()=>{
    return(
            <Modal size="small" dimmer='blurring' trigger={<Button size="huge" inverted color='violet'>Regístrate</Button> }>
                <Modal.Header>Ingresa</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='https://res.cloudinary.com/alinardz/image/upload/v1527697663/juguito.gif' />
                <Modal.Description style={{"width":"45%"}}>
                    <Registrate/>
                </Modal.Description>
                </Modal.Content>
            </Modal>
    )   
};