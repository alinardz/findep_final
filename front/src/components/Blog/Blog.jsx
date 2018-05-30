import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {ListaArticulos} from './Articulos/ListaArticulos'

class Blog extends Component{
    render(){
        return(
           <div>
              {/*  <ListaArticulos/> */}
               <h2 style={{fontSize:"2rem"}}>¿Qué quieres aprender hoy</h2>

               <div className="containerBlog">
                    <Link to='/blog/articulos' className="cardCat">
                        <i className="card__circle"></i>
                        <p>Seguros</p>
                    </Link>

                   <Link to='/blog/articulos' className="cardCat card1">
                        <i className="card__circle"></i>
                        <p>Fondo para el retiro</p>
                    </Link>

                    <Link to='/blog/articulos' className="cardCat card--alt-3">
                        <i className="card__circle"></i>
                        <p>Tarjetas de crédito</p>
                    </Link>

                    <Link to='/blog/articulos' className="cardCat card--alt-2">
                        <i className="card__circle"></i>
                        <p>Fondo de emergencia</p>
                    </Link>

                    <Link to='/blog/articulos' className="cardCat">
                        <i className="card__circle"></i>
                        <p>Crédito de auto</p>
                    </Link>

                    <Link to='/blog/articulos' className="cardCat card--alt-2">
                        <i className="card__circle"></i>
                        <p>Hipoteca</p>
                    </Link>

                    <Link to='/blog/articulos' className="cardCat card--alt-3">
                        <i className="card__circle"></i>
                        <p>CETES</p>
                    </Link>

                    <Link to='/blog/articulos' className="cardCat card--alt-4">
                        <i className="card__circle"></i>
                        <p>Inversiones en la bolsa</p>
                    </Link>

                    <Link to='/blog/articulos' className="cardCat card1">
                        <i className="card__circle"></i>
                        <p>Criptomonedas</p>
                    </Link>
                    </div>

           </div>
        )
    }
}

export default withRouter(Blog);