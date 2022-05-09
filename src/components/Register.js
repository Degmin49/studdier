import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
//import axios from "axios";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModalSuccess: false,
            showModalFail: false
        };
    }
    
    register() {
        let registerName = document.getElementById("registerName").value;
        let registerSurname = document.getElementById("registerSurname").value;
        let registerEmail = document.getElementById("registerEmail").value;
        let registerPassword = document.getElementById("registerPassword").value;
        let registerUser = {name: registerName, surname: registerSurname, email: registerEmail, password: registerPassword};

        let userDetails = {email: registerUser.email,password: registerUser.password, fullName: registerUser.name+" "+registerUser.surname };

        // axios.post('/api/Access/Registration', userDetails)
        // .then(res => {
        //     this.setState({showModalSuccess: true});
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
                    <div className="MyLoginInfo">Zarejestruj się</div>

                    <div>
                        <label>Podaj imię:</label>
                        <input type="name" id="registerName" className="form-control" placeholder="Wpisz swoje imię" />
                    </div>

                    <div>
                        <label>Podaj nazwisko:</label>
                        <input type="surname" id="registerSurname" className="form-control" placeholder="Wpisz swoje nazwisko" />
                    </div>

                    <div>
                        <label>Podaj e-mail:</label>
                        <input type="email" id="registerEmail" className="form-control" placeholder="Wpisz swój adres e-mail" />
                    </div>

                    <div>
                        <label>Podaj hasło:</label>
                        <input type="password" id="registerPassword" className="form-control" placeholder="Wpisz bezpieczne hasło" />
                    </div>

                    <div className="MyCenterRegister">
                        <Button className="btn btn-dark btn-lg btn-block" onClick={() => {this.register()}}>Zarejestruj</Button>
                    </div>
                    <div className="MyRegisterLink">Masz już konto? <a href="./Login">Zaloguj się!</a></div>
                </Form>

                <Modal show={this.state.showModalSuccess} onHide={() => {this.setState({showModalSuccess: false})}}>
                    <Modal.Header closeButton><Modal.Title>Konto zostało utworzone!</Modal.Title></Modal.Header>
                    <Modal.Body>Twoje konto zostało pomyślnie zarejestrowanie! Możesz teraz przejść do strony logowania, żeby zalogować się do naszego serwisu!</Modal.Body>

                    <Modal.Footer>
                        <Button variant="success" href="./Login" onClick={() => {this.setState({showModalSuccess: false})}}>Przejdź do logowania</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalFail} onHide={() => {this.setState({showModalFail: false})}}>
                    <Modal.Header closeButton><Modal.Title>Nie można utworzyć konta!</Modal.Title></Modal.Header>
                    <Modal.Body>Niestety, ale nie można utworzyć konta! Podane dane są nieprawidłowe, lub wystąpił błąd po stronie serwera!</Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={() => {this.setState({showModalFail: false})}}>Spróbuj ponownie</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Register