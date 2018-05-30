import React, {Component} from 'react';
import { Form, Button, Modal, Image, Input, Label } from 'semantic-ui-react';
import {addRegistro} from "../../../services/Registros";
import {withRouter} from 'react-router-dom';

//this.props
class RegistroForm extends Component{

    state = {
        user: {},
        registro: {}
    };

    handleChange = (e) => {
        const {registro} = this.state;
        const field = e.target.name;
        registro[field] = e.target.value;
        this.setState({registro});
        console.log("registro desde registroform", registro)
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.registro)
        addRegistro(this.state.registro)
        .then(registro=>{
            this.props.history.push('/perfil/registros');
            //window.location.reload();
        })
    };

    render(){
        return(
            <Modal  size="small" dimmer='blurring' trigger={this.props.trigger}>
                 <Modal.Content image>
                <Image wrapped size='medium' src='https://res.cloudinary.com/alinardz/image/upload/v1527697663/juguito.gif' />
                <Modal.Description style={{"width":"45%"}}>

                     <Form onSubmit={this.handleSubmit}>
                     <Form.Field>
                        <label>Categoría</label>
                        <input type="text" name="category" id="" placeholder='comida' onChange={this.handleChange}/>
                    </Form.Field>


                    <Form.Field>
                        <label>Descripción</label>
                        <input type="text" name="description" id="" placeholder='pizza de liru cisa' onChange={this.handleChange}/>
                    </Form.Field>


                    <Form.Field>
                        <label>Fecha</label>
                        <input type="date" name="dateStart" onChange={this.handleChange}/>
                    </Form.Field>

                    <Form.Field>
                      <Input labelPosition='right'type="number" name="quantity" onChange={this.handleChange}  placeholder='Cantidad'>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Input>
                    </Form.Field>
                    
                    <Form.Group widths='equal'>
                        <Button className='inicia' inverted color='blue' htmlType="submit">Agregar</Button>
                    </Form.Group>
                </Form>

                </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default withRouter(RegistroForm);