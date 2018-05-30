import React, { Component } from 'react';
import {Meta} from './Meta';
import {getMetas, deleteMeta} from '../../../services/Metas';
import { Button } from 'semantic-ui-react';
import MetaForm from './MetaForm';

class Metas extends Component {
  state={
    metas: []
  };

  componentWillMount(){
    if(!localStorage.getItem("user")) return this.props.history.push('/');
    getMetas()
        .then(metas=>{
            this.setState({metas});
        })
        .catch(e=>console.error(e));
  }

  //BORRAR META
  handleDelete = (id) => {
    //console.log("borrado papi", id)
    deleteMeta(id)
    .then(meta=>{
      let metas = this.state.metas.filter(m=>{
        return m._id !== meta._id;
      })
      this.setState({metas});
      })
  };



  render() {
    //console.log(this.state.metas)
    return (
      <section>
        <h2>Mis metas</h2>
          <div style={{display:'flex', flexWrap:'wrap'}}>
            {this.state.metas.map((meta, index)=>{
              let total= this.state.metas[index].totalQuantity-this.state.metas[index].initialQuantity;
              let percent= (this.state.metas[index].initialQuantity/this.state.metas[index].totalQuantity)*100;
                return(
                  <Meta {...meta} 
                  key={meta._id}
                  delete={this.handleDelete}
                  total={ total }
                  percent={percent}
                  />
                )
            })}
          <div style={{margin:"200px 2%" }}><MetaForm trigger={<Button size="huge" inverted color='violet'>Crear Meta</Button>} /></div>
        </div>
                
      </section>
    )
  }
}

export default Metas;