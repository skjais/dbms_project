import React, { Component } from 'react'
import CardsUI from './cardsUI';

export default class cards extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         teacher: []
    //     };
        
    // }
   
    render() {
        const names = ['james','virat kohli','James', 'Paul', 'John', 'George', 'Ringo','ram','shyam','sitaram','ramgopal'];

        let teacherCards=names.map(names=>{
            return(
                <div className="col-md-3">
                <CardsUI names={names} />
               </div>
            )
        })
       
        return (

            <div className="container-fluid justify-content-center">
                <div className="row">        
                       {teacherCards}

                       {/* <CardsUI/>
                       <CardsUI/>
                       <CardsUI/> */}

                </div>

            </div>
        );
    }
}

