import React, { Component } from 'react'
import styles from '../public/leftbar.module.css'

export default class leftbar extends Component {
    render() {
        return (
            <div>
                   
            <h5 style={{backgroundColor:"#506070",fontSize:"30px",textAlign:"center"}}>WHY THIS WEBSITE IS BEST</h5>
            <ul className={styles.list}>                
                <li >We provide large number of options.</li>               
                <li >You can choose any one of them.  </li>               
                <li >We have best teachers. </li>             
                <li > We give you good quality of education.</li>
                <li>Individual and unique learning experience</li>
                <li>One-on-one attention</li>
                <li>Improves attitude towards learning and school</li>
                <li>Improves self-esteem and confidence</li>
                <li>Improves work and study habits</li>
                <li>Positive work space</li>
                <li>Encourages independence and responsibility</li>
                <li>Helps overcome learning obstacles</li>      
            </ul>
                
            </div>
        )
    }
}
