import React, { Component } from 'react';
import {getRegistros, deleteRegistro} from '../../../services/Registros';
import { Button, Segment, Form, Table, Card, Icon, Rating } from 'semantic-ui-react';
import RegistroForm from './RegistroForm';

class Registros extends Component {
  state={
    registro: [],
    rating: 0
  };

  handleChange = e => this.setState({ rating: e.target.value })

  componentWillMount(){
    if(!localStorage.getItem("user")) return this.props.history.push('/');
    getRegistros()
        .then(registros=>{
            this.setState({registros});
        })
        .catch(e=>console.error(e));
  }

  //BORRAR REGISTRO
  handleDelete = (id) => {
    //console.log("borrado papi", id)
    deleteRegistro(id)
    .then(registro=>{
      let registros = this.state.registros.filter(m=>{
        return m._id !== registro._id;
      })
      this.setState({registros});
      })
  };



  render() {
    const { rating } = this.state;
    //console.log(this.state.registros)
    return (
      <section style={{marginRight: "1%"}}>
                <section>
         <h3>Registro gastos</h3>
            <RegistroForm trigger={<Button size="huge" circular icon='plus' basic color="blue"/>} />
            <Segment basic>
             <Form>
                <h5>Filtros</h5>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Categorías' placeholder='categoría' readOnly />
                <Form.Input fluid label='Descripción' placeholder='descripción' readOnly />
                <Form.Input fluid label='Cantidad' placeholder='cantidad' readOnly>
                <input type='range' min={0} max={5} value={rating} onChange={this.handleChange} />
                </Form.Input>
                </Form.Group>
             </Form>
            </Segment>

            <Segment basic>
                <Card.Group>
                    <Card>
                    <Card.Content>
                        <Card.Header>
                        Gastos Totales
                        </Card.Header>
                        <Card.Description>
                        $20, 000.00
                        </Card.Description>
                    </Card.Content>
                    </Card>
        
                    <Card>
                    <Card.Content>
                        <Card.Header>
                        Ingresos Totales
                        </Card.Header>
                        <Card.Description>
                        $30, 000.00
                        </Card.Description>
                    </Card.Content>
                    </Card>
        
                    <Card>
                    <Card.Content>
                        <Card.Header>
                        Total
                        </Card.Header>
                        <Card.Description>
                        $10, 000.00
                        </Card.Description>
                    </Card.Content>
                    </Card>
                </Card.Group>
            </Segment>

            <Segment basic>
                <Table color="blue">
                    <Table.Body>

                    <Table.Row>
                        <Table.Cell collapsing>
                        <Icon name='food' />
                            comida
                        </Table.Cell>
                        <Table.Cell>10 Mayo</Table.Cell>
                        <Table.Cell>Pizza de Liru Sisa</Table.Cell>
                        <Table.Cell>$70.00</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell collapsing>
                        <Icon name='home' />
                            renta
                        </Table.Cell>
                        <Table.Cell>1 Mayo</Table.Cell>
                        <Table.Cell>Renta</Table.Cell>
                        <Table.Cell>$15,000.00</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell collapsing>
                        <Icon name='plane' />
                            viajes
                        </Table.Cell>
                        <Table.Cell>14 Mayo</Table.Cell>
                        <Table.Cell>Querétaro</Table.Cell>
                        <Table.Cell>$700.00</Table.Cell>
                    </Table.Row>

                    </Table.Body>
                </Table>
            </Segment>
            
          </section>
      </section>
    )
  }
}

export default Registros;