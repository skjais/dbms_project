import React, { Component } from 'react'
import styles from '../public/stuLoginLogout.module.css'
import { Redirect } from 'react-router-dom';

export default class stuLoginLogout extends Component {
    constructor(props){
        super(props);
        this.state={
            showLoginComponent:false,
            showRegisterComponent:false
        }
        this.onClicklogin=this.onClicklogin.bind(this);
        this.onClickstudentregister=this.onClickstudentregister.bind(this);
    }

    onClicklogin(){
        this.setState({
            showLoginComponent:true
        })
    }
    onClickstudentregister(){
        this.setState({
            showRegisterComponent:true
        })
    }

    
    render() {
        return (
            <div className={styles.loginsection}>
                <div>
                <button onClick={this.onClicklogin} >STUDENT LOGIN</button>
                {this.state.showLoginComponent ? <Redirect to="/studentlogin"></Redirect> :null}
                </div>
                <div>
                <button onClick={this.onClickstudentregister}>STUDENT REGISTER</button>
                {this.state.showRegisterComponent ?<Redirect to="/studentregister"></Redirect>  :null}
                </div>
            </div>
        )
    }
}
