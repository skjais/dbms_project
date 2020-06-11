import React, { Component } from 'react'
import axios from 'axios';
import styles from '../../public/login.module.css'

export default class login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""

        }
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);       
        this.onSubmit=this.onSubmit.bind(this); 
    }
         

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const user={
            username:this.state.username, 
            password:this.state.password
        }
        
       console.log(user);

       axios.post('http://localhost:8000/studentlogin',user)
       .then(res=>console.log(res.data))
       
       
       this.setState({
           username:"",
           password:""
       })
     
    }


    render() {

        return (

<div className={styles.login_body} >

       <div className={styles.logo}>
         <h3>LOGIN </h3>
       </div>

    
      <form  className={styles.login_box} onSubmit={this.onSubmit}> 

      <div className={styles.input_field}>
      <label> username: <br/></label>
      <input type="text"  value={this.state.username}  onChange={this.onChangeUsername} />
      <br/>
      <br/>
      
     <label >password:<br/></label>
       
      <input type="password" value={this.state.password} onChange={this.onChangePassword}/>
      
      </div>


      <br/>
      <button className={styles.buttons}  style={{fontSize:25}}>  Login</button>
      <br/>

      <p className={styles.txt}>register if you do not have account <a href="teacherregister">register</a>
      </p>
    </form>


    <div className={styles.footer}>

    <footer >
       <small >&copy; Copyright 2020 Love2Dev. All Rights Reserved</small>
    </footer>

    </div>


</div>

                

        )
    }
}
