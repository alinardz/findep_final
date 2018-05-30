import React, {Component} from 'react';
import {Card, Image, Progress} from 'semantic-ui-react';

class Logros extends Component{
    render(){
        return(
           <div>
               <h2>Logros</h2>
               <Card>
                    <Image src="https://res.cloudinary.com/alinardz/image/upload/v1527700612/8f075acdded88338673ce2f55ded0640.png" />
                    <Card.Content>
                    <Card.Header>Pagar deuda universidad</Card.Header>
                    <Card.Meta>
                        <span className='date'>
                        Se cumplió el: 20 Marzo 2018
                        </span>
                    </Card.Meta>

                    </Card.Content>

                    <Card.Content extra>

                    <Progress size ="tiny" percent="100" indicating label={"¡Lo lograste!"}/>
                        <span >
                        Cantidad total: $100,000
                        </span>
                    </Card.Content> 
                </Card>
           </div>
        )
    }
}

export default Logros;