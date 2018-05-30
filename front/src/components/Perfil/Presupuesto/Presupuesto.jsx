import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';

class Presupuesto extends Component{
    render(){
        return(
           <div>
               <h1>Presupuesto Mensual</h1>

                <Table color="blue">
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Tipo</Table.HeaderCell>
                        <Table.HeaderCell>Planeado</Table.HeaderCell>
                        <Table.HeaderCell>Real</Table.HeaderCell>
                        <Table.HeaderCell>Diferencia</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>Renta</Table.Cell>
                        <Table.Cell>$10,000</Table.Cell>
                        <Table.Cell>$10,000</Table.Cell>
                        <Table.Cell style={{color:"green"}}>$0</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Fondo Ahorro Retiro</Table.Cell>
                        <Table.Cell>$1,000</Table.Cell>
                        <Table.Cell>$1,000</Table.Cell>
                        <Table.Cell style={{color:"green"}}>$0</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Viaje a Japón</Table.Cell>
                        <Table.Cell>$3,000</Table.Cell>
                        <Table.Cell>$1,000</Table.Cell>
                        <Table.Cell style={{color:"red"}}>$2,000</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Comida</Table.Cell>
                        <Table.Cell>$1,200</Table.Cell>
                        <Table.Cell>$3,400</Table.Cell>
                        <Table.Cell style={{color:"red"}}>$2,200</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Total</Table.HeaderCell>
                        <Table.HeaderCell>$15,200</Table.HeaderCell>
                        <Table.HeaderCell>$15,400</Table.HeaderCell>
                        <Table.HeaderCell style={{color:"red"}}>$200</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                </Table>
           </div>
        )
    }
}

export default Presupuesto;