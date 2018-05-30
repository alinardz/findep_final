import React, {Component} from 'react';
import MenuPerfil from './MenuPerfil';
import {Grid } from 'semantic-ui-react';
import {RoutesPerfil} from './RoutesPerfil'

class Perfil extends Component{

    componentWillMount(){
        if(!localStorage.getItem("user")) return this.props.history.push('/login');
        let user= JSON.parse(localStorage.getItem("user"));
        this.setState({user})
    }

    render(){
        return(
        <section>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                    <Grid.Column width={3} style={{"paddingTop":"0", "height":"1000px"}}>
                        <MenuPerfil/>
                    </Grid.Column>
                    
                    <Grid.Column width={13}>
                    <RoutesPerfil/>
                    </Grid.Column>
                </Grid.Row>
            </Grid> 
        </section>
        )
    }
};

export default Perfil;