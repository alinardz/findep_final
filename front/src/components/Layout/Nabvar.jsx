import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../services/Auth';
import Registrate from '../Auth/Registrate';
import Inicia from '../Auth/Inicia';
import {Menu, Modal, Image } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

class Navbar extends Component {
  state = { activeItem: 'home',
  current: "mail",
  user:{},
  isLoggedIn: false
}

  handleClick = (e)=>{
    console.log('click',e);
    this.setState({
      current:e.key
    });
  };

  handleLogout = () => {
    logout()
        .then(res=>{
            this.setState({isLoggedIn:false, user:{}});
            this.props.history.push("/");
            //message.success(res.message);
        })
  };

  componentWillMount(){
    if(!localStorage.getItem("user")) return;
    let user = JSON.parse(localStorage.getItem("user"));
    this.setState({user,isLoggedIn:true})
}

  render() {
    const { activeItem, isLoggedIn } = this.state;

    return (
      <div className="menuNav">
      
        <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick} as={Link} to='/'>
          <Image src="https://res.cloudinary.com/alinardz/image/upload/v1527385056/findep-logo-01.png" style={{width:"150px", marginLeft: isLoggedIn? '350%':'0'}}></Image></Menu.Item>
           <Menu.Menu position='right'>

            <Menu.Item name='Perfil' active={activeItem === 'perfil'} style={{display: isLoggedIn? 'block': 'none'}}  onClick={this.handleClick} as={Link} to='/perfil/resumen'/>

            <Modal dimmer="blurring" size="small" trigger={<Menu.Item name='registrate' style={{display: !isLoggedIn? 'block': 'none'}}><Link to='/'>Regístrate</Link></Menu.Item>}>
                <Modal.Header>Regístrate</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='https://res.cloudinary.com/alinardz/image/upload/v1527697663/juguito.gif' />
                <Modal.Description style={{"width":"45%"}}>
                    <Registrate/>
                </Modal.Description>
                </Modal.Content>
            </Modal>


            <Modal dimmer="blurring"size="small" trigger={<Menu.Item name='ingresa' style={{display: !isLoggedIn? 'block': 'none'}} as={Link} to='/'>Inicia Sesión</Menu.Item>}>
                <Modal.Header>Inicia Sesión</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='https://res.cloudinary.com/alinardz/image/upload/v1527697663/juguito.gif' />
                <Modal.Description style={{"width":"45%"}}>
                    <Inicia/>
                </Modal.Description>
                </Modal.Content>
            </Modal>

            <Menu.Item name='diagnóstico' active={activeItem === 'diagnóstico'} onClick={this.handleClick} as={Link} to='/diagnostico'>Diagnóstico</Menu.Item>
            <Menu.Item name='logout' style={{display: isLoggedIn? 'block': 'none'}} active={activeItem === 'logout'} onClick={this.handleLogout}>Cerrar Sesión</Menu.Item>
            <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleClick} as={Link} to='/blog'/>

{/*             BARRA BUSQUEDA
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
             */}
        </Menu.Menu>

        </Menu>
      </div>
    )
  }
}

export default withRouter(Navbar);