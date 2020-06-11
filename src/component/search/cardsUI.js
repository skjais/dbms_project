import React, { Component } from 'react'
import image1 from '../../image/teacher.jpeg'
import styles from '../../public/cardsUI.module.css';
import { Card, Button, ListGroupItem, ListGroup} from 'react-bootstrap'

export default class cardsUI extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {

        return (

            <Card  className={styles.cards}>
                <Card.Img variant="top" src={image1}  style={{height:250}}/>
                <Card.Body className={styles.cardbody}>
                <Card.Title className={styles.title}>{this.props.names}</Card.Title>
                 </Card.Body>

                <ListGroup className="list-group-flush ">
                    <ListGroupItem className={styles.listelement}>subject-math</ListGroupItem>
                    <ListGroupItem className={styles.listelement} >city-gonda</ListGroupItem>
                    
                </ListGroup>
                <Card.Body className={styles.cardbody}>
        
                    
                   <Button className={styles.buton}>show detail</Button>
                   
                   <Button className={styles.buton}>apply </Button>
                   
                </Card.Body>
            </Card>

        )
    }
}
