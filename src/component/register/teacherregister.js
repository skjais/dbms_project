
import React, { Component } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default class teacherregister extends Component {


    constructor(props){
        super(props);
        this.state={
            fname:"",
            lname:"",
            picurl:"",
            username:"",
            password:"",
            email:"",
            dob:new Date(),
            phoneNumber:"",
            address:"",
            city:"",
            stateName:"",
            zip:"",
            subject:"",
            qualification:"",
            experience:"",
            fee:"",
            gender:""

        }

        this.onChangeFname=this.onChangeFname.bind(this);
        this.onChangeLname=this.onChangeLname.bind(this);
        this.onChangePicurl=this.onChangePicurl.bind(this);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);   
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeDOB=this.onChangeDOB.bind(this);
        this.onChangePhoneNo=this.onChangePhoneNo.bind(this);
        this.onChangeAddress=this.onChangeAddress.bind(this);
        this.onChangeCity=this.onChangeCity.bind(this);
        this.onChangeState=this.onChangeState.bind(this);
        this.onChangeZip=this.onChangeZip.bind(this);
        this.onChangeGender=this.onChangeGender.bind(this); 
        this.onChangeSubject=this.onChangeSubject.bind(this);
        this.onChangeQualification=this.onChangeQualification.bind(this);
        this.onChangeExperience=this.onChangeExperience.bind(this);
        this.onChangeFee=this.onChangeFee.bind(this); 
        this.onSubmit=this.onSubmit.bind(this); 
    }
         

    onChangeFname(e){
        this.setState({
            fname:e.target.value
        })
    }
    onChangeLname(e){
        this.setState({
            lname:e.target.value
        })
    }
    onChangePicurl(e){
        this.setState({
            picurl:e.target.files[0]
        })
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
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
    }
    onChangeDOB(e){
        this.setState({
            dob:e.target.value
        })
    }
    onChangePhoneNo(e){
        this.setState({
            phoneNumber:e.target.value
        })
    }
    onChangeAddress(e){
        this.setState({
            address:e.target.value
        })
    }
    onChangeCity(e){
        this.setState({
            city:e.target.value
        })
    }
    onChangeState(e){
        this.setState({
            stateName:e.target.value
        })
    }
    onChangeZip(e){
        this.setState({
            zip:e.target.value
        })
    }

    onChangeSubject(e){
        this.setState({
            subject:e.target.value
        })
    }

    onChangeQualification(e){
        this.setState({
            qualification:e.target.value
        })
    }
    onChangeExperience(e){
        this.setState({
            experience:e.target.value
        })
    }
    onChangeFee(e){
        this.setState({
            fee:e.target.value
        })
    }

    onChangeGender(e){
        this.setState({
            gender:e.target.value
        })
    }

    onSubmit(e){
      
        e.preventDefault();
    //     const user={
    //         fname:this.state.fname ,
    //         lname:this.state.lname ,
    //         picurl:this.state.picurl ,
    //         username:this.state.username ,
    //         password:this.state.password ,
    //         email:this.state.email ,
    //         dob:this.state.dob,
    //         phoneNumber:this.state.phoneNumber,
    //         address:this.state.address ,
    //         city:this.state.city ,
    //         stateName:this.state.stateName ,
    //         zip:this.state.zip ,
    //         gender:this.state.gender,
    //         subject:this.state.subject, 
    //         qualification:this.state.qualification,
    //         experience:this.state.experience,
    //         fee:this.state.fee          
    //     }        
    //    console.log(user);

    let formData = new FormData();    
    formData.append('fname', this.state.fname); 
    formData.append('lname',this.state.lname)
    formData.append('picurl',this.state.picurl);
    formData.append('username',this.state.username)
    formData.append('password',this.state.password)
    formData.append('email',this.state.email)
    formData.append('dob',this.state.dob)
    formData.append('phoneNumber',this.state.phoneNumber)
    formData.append('address',this.state.address)
    formData.append('city',this.state.city)
    formData.append('stateName',this.state.stateName)
    formData.append('zip',this.state.zip)
    formData.append('gender',this.state.gender)
    formData.append('subject',this.state.subject)
    formData.append('qualification',this.state.qualification)
    formData.append('experience',this.state.experience)
    formData.append('fee',this.state.fee)


    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }


       axios.post('http://localhost:8000/teacherregister',formData,config)
       .then(res=>console.log(res.data))
       
       
       this.setState({
        fname:"",
        lname:"",
        picurl:"",
        username:"",
        password:"",
        email:"",
        dob:new Date(),
        phoneNumber:"",
        address:"",
        city:"",
        stateName:"",
        zip:"",
        gender:"",  
        subject:"",
        qualification:"",
        experience:"",
        fee:"",
           
       })
     
    }





    render() {
        return (
            <div>
               <div className="container " style={{backgroundColor:"gray",color: "white"}}>
                <h1 style={{color:"white",backgroundColor:"green", width: "100%"}}>Teacher Registration</h1>

                <form class="form-horizontal"   onSubmit={this.onSubmit} >

            <div class="form-group">
                <div class="form-row col-sm-9">
                    <div class="col">
                        <label>Firstname</label>
                        <input  type="text" class="form-control" placeholder="First name"  value={this.state.fname} onChange={this.onChangeFname} />
                    </div>
                    <div class="col">
                        <label>Lastname</label>
                        <input  type="text" class="form-control" placeholder="Last name"  value={this.state.lname} onChange={this.onChangeLname} />
                    </div>
                </div>
            </div>
            <div class="form-group   col-sm-9">

            <div class="custom-file ">
                  
                 <input type="file" class="custom-file-input" id="customFile"  onChange={this.onChangePicurl} />
                 <label class="custom-file-label" for="customFile">Upload photo</label>
            </div>
            </div>

            <div class="form-group">
                <label for="username" class="col-sm-3 control-label">UserName*</label>
                <div class="col-sm-9">
                    <input  type="text" id="username" placeholder="username" class="form-control"  value={this.state.username} onChange={this.onChangeUsername} />
                </div>
            </div>

            <div class="form-group">
                <label for="password" class="col-sm-3 control-label">Password*</label>
                <div class="col-sm-9">
                    <input  type="password" id="password" placeholder="Password" class="form-control" value={this.state.password}  onChange={this.onChangePassword} />
                </div>
            </div>
           
           
            <div class="form-group">
                <label for="email" class="col-sm-3 control-label">Email* </label>
                <div class="col-sm-9">
                    <input  type="email" id="email" placeholder="Email" class="form-control"  value={this.state.email} onChange={this.onChangeEmail}  />
                </div>
            </div>


            <div class="form-group">
                <label for="birthDate" class="col-sm-3 control-label">Date of Birth*</label>
                <div class="col-sm-9">
                    <input  type="date" id="birthDate" class="form-control" value={this.state.dob} onChange={this.onChangeDOB} />
                </div>
            </div>
            <div class="form-group">
                <label for="phoneNumber" class="col-sm-3 control-label">Phone number </label>
                <div class="col-sm-9">
                    <input  type="phoneNumber" id="phoneNumber" placeholder="Phone number" class="form-control"  value={this.state.phoneNumber} onChange={this.onChangePhoneNo} />
                    <span class="help-block">Your phone number won't be disclosed anywhere </span>
                </div>
            </div>


    <div class="form-group col-md-9">
    <label for="inputAddress2">Address</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"  value={this.state.address} onChange={this.onChangeAddress} />
  </div>
  <div class="form-row col-md-12">
    <div class="form-group col-md-3">
      <label for="inputState">State</label>
      <input type="text" class="form-control" id="inputState"  value={this.state.stateName} onChange={this.onChangeState}  />
    </div>
    <div class="form-group col-md-3">
        <label for="inputCity">City</label>
       <input type="text" class="form-control" id="inputCity"  value={this.state.city} onChange={this.onChangeCity}  />
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" value={this.state.zip} onChange={this.onChangeZip} />
    </div>
  </div>


 <div className="form-group col-sm-9">
     <label for="inputState" class=" control-label">Subject*</label>
      <select id="inputState" class="form-control form-control " value={this.state.subject} onChange={this.onChangeSubject}>
      <option selected>--select--</option> 
        <option >Maths</option>
        <option>Physics</option>
        <option>Chemistry</option>
        <option > Biology</option>
      </select>

 </div>
 <div class="form-group col-sm-9">
 <label for="inputQualification" class=" control-label"> Qualification*</label>
      <select id="inputQualification" class="form-control "  value={this.state.qualification} onChange={this.onChangeQualification} >
        <option selected>--select--</option> 
        <option >Intermediate</option>
        <option>Graduate</option>
        <option>Post Graduate</option>
      </select>

 </div>

 <div class="form-group col-sm-9">
        
       <label for="experience" class=" control-label">Experience* (in year)</label>
        <div >
            <input  type="number" id="experience" placeholder="experience" class="form-control" value={this.state.experience} onChange={this.onChangeExperience} />
        </div>

 </div>
 <div class="form-group">
        
       <label for="fee" class="col-sm-3 control-label">Fee* (per month)</label>
        <div class="col-sm-9">
            <input  type="text" id="fee" placeholder="fee" class="form-control" value={this.state.fee} onChange={this.onChangeFee } />
        </div>

 </div>


 <div class="form-group col-md-3">

<label for="inputGender">Gender</label>
      <select id="inputGender" class="form-control"  value={this.state.gender} onChange={this.onChangeGender}  >
        <option selected>Male</option>
        <option>Female</option>
        <option>Transgender</option>
      </select>

</div> 


             <div class="form-group">
                <div class="col-sm-9 col-sm-offset-3">
                    <span class="help-block ">*  Required fields</span>
                </div>
            </div>

                 <button type="submit" class="btn btn-primary btn-block">Register</button>
            </form>


<div >
    <br/>
    <br/>
    <br/>
<div style={{backgroundColor:"hotpink",color:"black"}}>
<footer >
   <small >&copy; Copyright 2020 Love2Dev. All Rights Reserved</small>
</footer>

</div>
</div>
  </div>


</div>
        )
    }
}
