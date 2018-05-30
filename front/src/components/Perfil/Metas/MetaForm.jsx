import React, {Component} from 'react';
import { Form, Button,Input, Label, Modal, Image } from 'semantic-ui-react';
import {addMeta} from "../../../services/Metas";
import {withRouter} from 'react-router-dom';

//this.props
class MetaForm extends Component{

    state = {
        user: {},
        meta: {}
    };

    handleChange = (e) => {
        const {meta} = this.state;
        const field = e.target.name;
        meta[field] = e.target.value;
        this.setState({meta});
    };

    loadFile = (e) => {
        const {meta} = this.state;
        meta["picture"] = e.target.files[0];
        this.setState({meta})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.meta)
        addMeta(this.state.meta)
        .then(meta=>{
            this.props.history.push('/perfil/metas');
            window.location.reload();
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
                        <label>Nombre de tu meta</label>
                        <input type="text" name="name" id="" placeholder='Nombre' onChange={this.handleChange}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Sube una foto para inspirarte</label>
                        <input type="file" onChange={this.loadFile}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Fecha Inicial</label>
                        <input type="date" name="dateStart" onChange={this.handleChange}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Fecha Final</label>
                        <input type="date" name="dateEnd" onChange={this.handleChange}/>
                    </Form.Field>

                    <Form.Field>
                      <Input labelPosition='right'type="number" name="initialQuantity" onChange={this.handleChange}  placeholder='Tengo'>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Input>
                    </Form.Field>

                    <Form.Field>
                        <Input labelPosition='right'type="number" name="totalQuantity" onChange={this.handleChange}  placeholder='Necesito'>
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

export default withRouter(MetaForm);