import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';


import Header from './component/header'
import Footer from './component/footer'
import Welcome from './component/welcome'
import Body from './component/body';
import StuLoginLogout from './component/stuLoginLogout'
import StudentLogin from './component/login/studentlogin'
import TeacherLogin from './component/login/teacherlogin'

import Studentregister from './component/register/studentregister'
import Teacherregister from './component/register/teacherregister'

// import Search from './component/search/cardsUI';
// import Cards from './component/search/cards'
import SearchBar from './component/search/searchbar';



function App() {
  return (
    <div className="App">
     
     <Router>
              <Route path="/"  exact component= { Header}/>
              <Route path="/"  exact component= { Welcome}/>
              <Route path="/"  exact component= { StuLoginLogout}/>
              <Route path="/"  exact component= { Body}/>
              <Route path="/"  exact component= { Footer}/>

              <Route path="/search"  exact component= {SearchBar}/>
              {/* <Route path="/searchresult"  exact component= {Cards}/> */}


            <Route path="/studentlogin" exact component={StudentLogin}/>
            <Route path="/teacherlogin" exact component={TeacherLogin}/>


            <Route path="/studentregister" exact component={Studentregister}/>
            <Route path="/teacherregister" exact component={Teacherregister}/>
    </Router>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
