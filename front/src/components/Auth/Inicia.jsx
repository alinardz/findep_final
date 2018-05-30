import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import {login} from "../../services/Auth";
import {withRouter} from 'react-router-dom'

class Inicia extends Component{
    state= {
        user: {}
    };

    handleSubmit = (e) => {
        e.preventDefault();

        login(this.state.user)
        .then(user=>{
            localStorage.setItem("user", JSON.stringify(user));
            this.setState({user:{}});
            this.props.history.push("/perfil/resumen");
            window.location.reload();
            console.log("estás loggeado")
            return;
        })
    };

    handleChange = (e) => {
        const field = e.target.name;
        const {user} = this.state;
        user[field] = e.target.value;
        this.setState({user});
    };

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Field>
                <label>Correo</label>
                <input type="email" name="email" id="" placeholder='laura@callaghan.com' onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>Contraseña</label>
                <input type="password" name="password" id="" placeholder='xxxxx' onChange={this.handleChange}/>
            </Form.Field>
            <Form.Group widths='equal'>
                <Button className='inicia' htmlType="submit" inverted color='blue'onClick={this.handleSubmit} >Inicia Sesión</Button>
            </Form.Group>
        </Form>
        );
    }

}

export default withRouter(Inicia);
