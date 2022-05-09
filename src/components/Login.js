import React from "react";
import { Button, Form, NavDropdown, Modal } from "react-bootstrap";
import { Router, Routes } from "react-router-dom";
//import axios from "axios";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModalFail: false
        };
    }

    login(){  
        let loginEmail = document.getElementById("loginEmail").value;
        let loginPassword = document.getElementById("loginPassword").value;
        
        let userDetails = {email: loginEmail, password: loginPassword};

        // axios.post('/api/Access/Login', userDetails)
        // .then(res => {
        //     localStorage.setItem('token',res.data.token);

        //     //if Admin
        //     //window.location.replace("/WaitingBooks");
        //     //if Customer
        //     window.location.replace("/MyBooks");
        // })
        // .catch(err => {
        //     this.setState({showModalFail: true});
        //     console.log(err);
        // });
    }

    render(){
        return(
            <div>
                <Form className="MyLogin">
                    <div className="MyLoginInfo">Zaloguj się</div>

                    <div>
                        <label>Podaj e-mail:</label>
                        <input type="email" id="loginEmail" className="form-control" placeholder="Wpisz swój adres e-mail" />
                    </div>

                    <div>
                        <label>Podaj hasło:</label>
                        <input type="password" id="loginPassword" className="form-control" placeholder="Wpisz swoje hasło" />
                    </div>

                    <div className="MyLoginRememberMe">
                        <input type="checkbox" />
                        <label htmlFor="customCheck1">Zapamiętaj mnie</label>
                    </div>

                    <div className="MyCenterLogin">
                        <Button className="btn btn-dark btn-lg btn-block" onClick={() => {this.login()}}>Zaloguj</Button>
                    </div>
                    <div className="MyRegisterLink">Nie masz konta? <a href="/Register">Zarejestruj się!</a></div>
                </Form>

                <Modal show={this.state.showModalFail} onHide={() => {this.setState({showModalFail: false})}}>
                    <Modal.Header closeButton><Modal.Title>Nie można się zalogować!</Modal.Title></Modal.Header>
                    <Modal.Body>Niestety, ale nie można się zalogować. Sprawdź czy podałeś poprawne dane, lub jeśli nie masz konta - zarejestruj się!</Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={() => {this.setState({showModalFail: false})}}>Spróbuj ponownie</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Login