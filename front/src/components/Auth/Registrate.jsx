import React, {Component} from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import firebase from 'firebase';
import {signUp} from "../../services/Auth";
import {withRouter, Redirect} from 'react-router-dom';


class Registrate extends Component{
    state= {
        user: {},
    };

    

    authWithFacebook(){
    const facebookProvider= new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookProvider)
        .then((result)=> {    
            //alert(result.user.displayName + " " + result.user.email)
            this.state.user.name=result.user.displayName;
            this.state.user.email=result.user.email;
            signUp(this.state.user)
        })
    }

    authWithGoogle=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result)=> {    
                //alert(result.user.displayName + " " + result.user.email)
                this.state.user.name=result.user.displayName;
                this.state.user.email=result.user.email;
                signUp(this.state.user)
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        signUp(this.state.user)
    };

    handleRedirect=(e)=>{
        e.preventDefault();
        signUp(this.state.user)
            .then(user=>{
              this.props.history.push('/');
               window.location.reload();
            })
    }

    handleChange = (e) => {
        const {user} = this.state;
        const field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
    };
    
    render() {
        if(this.state.redirect===true){
            return <Redirect to ='/'/>
        }
        return (
            <Form onSubmit={this.handleSubmit}>
            <Form>
                <Form.Group widths='equal' style={{marginLeft:"10%"}}>
                    
                    <Button color='facebook' onClick={this.authWithFacebook}>
                     Facebook
                    </Button>
                    <Button color='google plus' onClick={this.authWithGoogle}>
                    Google  
                    </Button>
                </Form.Group>
            </Form>
            <Form.Field>
                <label>Nombre</label>
                <input type="text" name="name" id="nombreSign" placeholder='Nombre'onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>Correo</label>
                <input type="email" name="email" id="correoSign" placeholder='laura@callaghan.com' onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>Contraseña</label>
                <input type="password" name="password" id="passwordSign" placeholder='xxxxx' onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>Repite tu contraseña</label>
                <input type="password" name="password2" id="password2Sign" placeholder='xxxxx'/>
            </Form.Field>
    {/*                         <Form.Field>
            <Checkbox label='Acepto los términos y condiciones' />
            </Form.Field> */}
            <Form.Group widths='equal'>
                <Button className='inicia' inverted color='blue' htmlType="submit" onClick={this.handleRedirect}>Regístrate</Button>
            </Form.Group>

        </Form>
        );
    }

}

export default withRouter(Registrate);
