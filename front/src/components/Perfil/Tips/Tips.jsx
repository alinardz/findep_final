import React, { Component } from 'react'
import Tip from './Tip';
import {Link} from 'react-router-dom';
import {Button, Card} from 'semantic-ui-react';

export default class Tips extends Component {
  render() {
    return (
      <div>
        <h2>La fórmula secreta</h2>
  <Card.Group>
      <Card color='violet'>
        <Card.Content>
          <Card.Header>
            Fondo de ahorro para el retiro
          </Card.Header>
          <Card.Description>
            Contrata un fondo que te permita juntar el dinero suficiente, entre más joven lo tengas más fácil será lograrlo.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card color='violet'>
        <Card.Content>
          <Card.Header>
            Fondo de emergencia
          </Card.Header>
          <Card.Description>
            Trata de tener un ahorro igual a tus egresos de 3 meses para emergencias.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card color='violet'>
        <Card.Content>
          <Card.Header>
            Ahorro
          </Card.Header>
          <Card.Description>
            El ahorro depende de tus metas, pero trata de ahorrar al menos el 10% de tu ingreso, presupuéstalo y no lo uses para nada más.
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
      <div style={{marginTop:"35px"}}>
      <Button size="huge"color="violet"><Link style={{"textDecoration": "none", "color": "inherit"}} to='/blog'>Aprende más y crea un plan ideal para ti</Link></Button>
      </div>
    
      </div>
    
    )
  }
}
