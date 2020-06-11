import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (

            <div>
                <div style={{ marginLeft: "38%" }} >
                    <h3 style={{ height: 60, color: "white" }}>.</h3>
                    <h3 style={{ height: 60, width: 421, backgroundColor: "red", color: "red" }}>.</h3>
                    <h3 style={{ height: 60, width: 421, textAlign: "center", color: "white", marginTop: 0, marginBottom: 0 }}><p style={{ fontSize: 30, color: "black" }}>पढ़ेगा इंडिया , बढ़ेगा इंडिया</p></h3>
                    <h3 style={{ height: 60, width: 421, backgroundColor: "green", color: "green" }}>.</h3>
                    <h3 style={{ height: 60, color: "white" }} >.</h3>
                </div>

                <div style={{ backgroundColor: "#506070", height: 400 }}>
                    <h5 style={{ color: "white", textAlign: "center", fontSize: 50 }} >tutorfinder.in </h5>

                    <footer style={{ marginTop: 50 }} >
                        <div style={{ color: "white", textAlign: "center" }}>
                            <p>created by: sunil kumar jaiswal </p>
                            <p>Contact mail:
                               <ul>
                                    <li>
                                        skjaiswalnitk51@gmail.com
                                    </li>
                                    <li>
                                        sunil.181it148@nitk.edu.in
                                    </li>

                                </ul>
                            </p>

                        </div>
                    </footer>
                    <footer style={{ color: "white", textAlign: "center" }}>
                        <small >&copy; Copyright 2020 Love2Dev. All Rights Reserved</small>
                    </footer>
                </div>
            </div>

        )
    }
}
