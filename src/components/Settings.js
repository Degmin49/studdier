import React from "react";
import { Container, Button, Form, Modal, Table, FormLabel, Alert } from "react-bootstrap";

var User = {userid: 0,type: true,name: "Adam",surname: "Małysz",email: "adam.małysz@wp.pl"};

class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: User,
            showModalDelete: false,
            showModalEdit: false,
            whatEdit: '',
        };
    }

    changeDetails() {
        switch(this.state.whatEdit) {
            case 'name': {
                this.setState(prevState => ({user: {...prevState.user,name: document.getElementById("ChangeUserName").value}}));
                break;
            }
            case 'surname': {
                this.setState(prevState => ({user: {...prevState.user,surname: document.getElementById("ChangeUserSurname").value}}));
                break;
            }
            case 'email': {
                this.setState(prevState => ({user: {...prevState.user,email: document.getElementById("ChangeUserEmail").value}}));
                break;
            }
            case 'password': {
                this.setState(prevState => ({user: {...prevState.user,password: document.getElementById("ChangeUserPassword").value}}));
                break;
            }
          }

        console.log("Zmieniamy obiekt...."); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        this.setState({whatEdit: ''});
    }

    discardChanges() {
        switch(this.state.whatEdit) {
            case 'name': {
                document.getElementById("ChangeUserName").value=this.state.user.name;
                break;
            }
            case 'surname': {
                document.getElementById("ChangeUserSurname").value=this.state.user.surname;
                break;
            }
            case 'email': {
                document.getElementById("ChangeUserEmail").value=this.state.user.email;
                break;
            }
            case 'password': {
                document.getElementById("ChangeUserPassword").value='';
                break;
            }
          }

        this.setState({whatEdit: ''});
    }

    render(){
        return(
            <Container className="MyContainer">
                <span className="MyTitle">Witaj {this.state.user.name} {this.state.user.surname}!<br /><br /></span>
                <p></p>
                <p>Twoje dane:</p>
                <Table>
                    <tbody>
                        <tr>
                            <th>Imię:</th>
                            <th><Form.Control id="ChangeUserName" className="MyTableButton" defaultValue={this.state.user.name} disabled={this.state.whatEdit === "name" ? false : true} /></th>
                            <th>
                                {this.state.whatEdit === "name" ?
                                <span><Button className="MyTableButton" variant="secondary" onClick={() => this.changeDetails()}>Zatwierdź</Button>
                                <Button className="MyTableButton" variant="secondary" onClick={() => this.discardChanges()}>Anuluj</Button></span> : 
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({whatEdit: "name"})}} disabled={this.state.whatEdit === '' ? false : true}>Edytuj</Button>}
                            </th>
                        </tr>
                        <tr>
                            <th>Nazwisko:</th>
                            <th><Form.Control id="ChangeUserSurname" className="MyTableButton" defaultValue={this.state.user.surname} disabled={this.state.whatEdit === "surname" ? false : true} /></th>
                            <th>
                                {this.state.whatEdit === "surname" ?
                                <span><Button className="MyTableButton" variant="secondary" onClick={() => {this.changeDetails()}}>Zatwierdź</Button>
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.discardChanges()}}>Anuluj</Button></span> : 
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({whatEdit: "surname"})}} disabled={this.state.whatEdit === '' ? false : true}>Edytuj</Button>}
                            </th>
                        </tr>
                        <tr>
                            <th>E-mail:</th>
                            <th><Form.Control id="ChangeUserEmail" className="MyTableButton" defaultValue={this.state.user.email} disabled={this.state.whatEdit === "email" ? false : true} /></th>
                            <th>
                                {this.state.whatEdit === "email" ?
                                <span><Button className="MyTableButton" variant="secondary" onClick={() => {this.changeDetails()}}>Zatwierdź</Button>
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.discardChanges()}}>Anuluj</Button></span> : 
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({whatEdit: "email"})}} disabled={this.state.whatEdit === '' ? false : true}>Edytuj</Button>}
                            </th>
                        </tr>
                        <tr>
                            <th>Hasło:</th>
                            <th><Form.Control id="ChangeUserPassword" type="password" className="MyTableButton" placeholder="**********" disabled={this.state.whatEdit === "password" ? false : true} /></th>
                            <th>
                                {this.state.whatEdit === "password" ?
                                <span><Button className="MyTableButton" variant="secondary" onClick={() => {this.changeDetails()}}>Zatwierdź</Button>
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.discardChanges()}}>Anuluj</Button></span> : 
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({whatEdit: "password"})}} disabled={this.state.whatEdit === '' ? false : true}>Edytuj</Button>}
                            </th>
                        </tr>
                    </tbody>
                </Table>
                {this.state.user.type ? <Alert className="MyMarginTop" variant="info">{this.state.user.name}! Jesteś administratorem naszego serwisu!</Alert> : ''}
            </Container>
        );
    }
}

export default Settings