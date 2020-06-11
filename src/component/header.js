import React, { Component } from 'react'
import logo from '../image/logo.png';
import Book from '../image/book.jpg';
import Pencil from '../image/pencil.jpeg';
import styles from '../public/header.module.css'
import { Redirect } from 'react-router-dom';

export default class header extends Component {
    constructor(props){
        super(props);
        this.state={
            showHome:false,
            showTeacherLogin:false,
            showTeacherRegister:false,
            showContactUs:false
        }
        this.onClickHome=this.onClickHome.bind(this);
        this.onClickTeacherLogin=this.onClickTeacherLogin.bind(this);
        this.onClickTeacherRegister=this.onClickTeacherRegister.bind(this);
        this.onClickContactUs=this.onClickContactUs.bind(this);
    }
    onClickHome(){
        this.setState({
            showHome:true
        })
    }
    onClickTeacherLogin(){
        this.setState({
            showTeacherLogin:true
        })
    }
    onClickTeacherRegister(){
        this.setState({
            showTeacherRegister:true
        })
    }
    onClickContactUs(){
        this.setState({
            showContactUs:true
        })
    }
    render() {
        return ( 
            
        <div>
       <div className={styles.logo}>
       <img  src={Book}   height="250px"  width="60%" alt="can't load"/> 
        <img  src={logo} height="250px"  width="60%" alt="can't load"/> 
        <img  src={Pencil} height="250px"  width="60%"alt="can't load"/> 
        </div>

        <div className={styles.moving}>
            <marquee scrollamount="15"> welcome to the india's number one online tutor finder website </marquee>
        </div>


        <div align="center" className={styles.menu_bars} >
            <button className={styles.butons} onClick={this.onClickHome}> HOME 
            {this.state.showHome? <Redirect to="/"></Redirect>:null }
            </button>
            <button className={styles.butons} onClick={this.onClickTeacherLogin}> TEACHER LOGIN 
            {this.state.showTeacherLogin ? <Redirect to="/teacherlogin"></Redirect> : null}
            </button>

            <button className={styles.butons} onClick={this.onClickTeacherRegister}> TEACHER REGISTER
            {this.state.showTeacherRegister ? <Redirect to ="/teacherregister"></Redirect>:null}
            </button>
            <button className={styles.butons} onClick={this.onClickContactUs}> CONTACT-US 
            {this.state.showContactUs ? <Redirect to="/contactus"></Redirect>:null}
            </button>
        </div>
        </div>
        )
    }
    
}

