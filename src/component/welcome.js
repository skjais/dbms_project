import React, { Component } from 'react'
import styles from '../public/welcome.module.css';


export default class welcome extends Component {
    render() {
        return (
            <div>
                <div className={styles.box}>

                 <div className={styles.inner} >
                  <span>WELCOME</span>
                 </div>
                 <div className={styles.inner} >
                 <span>WELCOME</span>
                 </div>

                 </div>
            
            </div>
        )
    }
}
