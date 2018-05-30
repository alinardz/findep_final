import React from 'react';
import { Card, Image, Button, Progress} from 'semantic-ui-react';
import MetaForm from './MetaForm';

export const Meta =(props)=> {
        return(
          <div style={{marginLeft:"3%", marginBottom:"20px"}}>
            <Card>
            <Image src={props.picture ? props.picture : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
            <Card.Content>
              <Card.Header>{props.name}</Card.Header>
              <Card.Meta>
                <span className='date'>
                Se cumple el:
                  {props.dateEnd}
                </span>
              </Card.Meta>

              <Card.Description>
                Te faltan: ${props.total}
              </Card.Description>

            </Card.Content>

            <Card.Content extra>

              <Progress size ="tiny" percent={props.percent} indicating label={"Progreso: " + Math.round(props.percent) + "%"}/>
                <Button circular basic color='blue' icon='trash' onClick={()=>props.delete(props._id)}/>
                <MetaForm trigger={<Button circular basic color='violet' icon='edit'/>}/>
              </Card.Content> 
          </Card>
          </div>
        )
}
