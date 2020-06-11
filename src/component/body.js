import React, { Component } from 'react'
import styles from '../public/body.module.css'
import Leftbar from './leftbar';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


export default class body extends Component {
    constructor(props){
        super(props);
        this.state={
            showSearchEngine:false,
           
        }
        this.onClickSearchForTutor=this.onClickSearchForTutor.bind(this);
        
    }

    onClickSearchForTutor(){

        
            axios.get('http://loaclhost:8000/teacherdata/')
            .then(response=>{
                this.setState({
                    teacher:response.data
                    
                })
            })
            .catch((err)=>{
                console.log(err);
            })
            console.log(this.state.teacher);
        
    

        this.setState({
            showSearchEngine:true
        })
    }
   



    render() {
        return (
            <div>
                <main className={styles.main_body}>

                    <div className={styles.leftbar}>
                        <Leftbar />
                    </div>

                    <div className={styles.center}>

                        <div className={styles.center_rows}>
                            <button onClick={this.onClickSearchForTutor} >SEARCH FOR TUTOR   {this.state.showSearchEngine ? <Redirect to="/search"></Redirect> :null} </button>
                        </div>

                        <div className={styles.center_rows}>
                            <button>INSTANT BOOKING</button>

                        </div>
                        <div className={styles.center_rows}>
                            <button  > BOOKING STATUS </button>

                        </div>
                        <div className={styles.center_rows}>
                            <button style={{ backgroundColor: "red", color: "black", fontSize: 30 }}>SUBSCRIBE </button>

                        </div>

                    </div>
                    <div className={styles.rightbar}>
                    </div>
                </main>

            </div>
        )
    }
}
