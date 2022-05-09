import React from "react";
import { Container, Button, Form, Modal, Table } from "react-bootstrap";

var Users = [
    {userid: 0,type: true,name: "Adam",surname: "Małysz",email: "adam.małysz@wp.pl"},
    {userid: 1,type: false,name: "Robert",surname: "Lewandowski",email: "złota@piłka.fr"},
    {userid: 2,type: false,name: "Michał",surname: "Pazdan",email: "ronaldo@nieprzejdzie.pl"},
    {userid: 3,type: false,name: "Sergio",surname: "Ramos",email: "ball@incosmos.com"},
    {userid: 4,type: false,name: "Arek",surname: "Milik",email: "siła@nie-technika.pl"}
];
// Users = [];

class UsersPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: Users,
            currentIndex: 0,
            showModalDelete: false,
            showModalEdit: false
        };
    }
    
    deleteItem() {
        let users = this.state.users;
        users.splice(this.state.currentIndex, 1);
        this.setState({ users: users });
    }

    deleteUser() {
        console.log("Usuwamy obiekt: "+this.state.users[this.state.currentIndex].name+" "+this.state.users[this.state.currentIndex].surname); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        this.deleteItem();
        this.setState({ showModalDelete: false, currentIndex: 0 });
    }

    editUser() {
        var newUserName = document.getElementById("newUserName").value;
        var newUserSurname = document.getElementById("newUserSurname").value;
        var newUserEmail = document.getElementById("newUserEmail").value;
        let newUser = {userid: this.state.users[this.state.currentIndex].userid, type: this.state.users[this.state.currentIndex].type, name: newUserName, surname: newUserSurname, email: newUserEmail};

        console.log('Edytujemy obiekt z "userid": '+this.state.users[this.state.currentIndex].userid); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        console.log("Tymi danymi: "+newUserName+" "+newUserSurname); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        var currentId = this.state.users[this.state.currentIndex].userid;
        this.setState(prevState => ({
            users: prevState.users.map(obj => (obj.userid === currentId ? newUser : obj))
        }));
        
        this.setState({ showModalEdit: false });
    }

    render(){
        const UsersList = this.state.users.map((x,index) => {
        return (
            <tr key={x.userid}>
                <td>{index+1}</td>
                <td>{x.name} {x.type ? <span title="Konto administratora">✔</span> : ''}</td>
                <td>{x.surname}</td>
                <td>{x.email}</td>
                <td>
                    {x.type ? '' : <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({showModalEdit: true, currentIndex: index})}}>Edytuj</Button>}
                    {x.type ? '' : <Button className="MyTableButton" variant="danger" onClick={() => {this.setState({showModalDelete: true, currentIndex: index})}}>Usuń</Button>}
                </td>
            </tr>
        )});
        let Content;
        if (this.state.users.length > 0){
            Content = 
            <div>
            <span className="MyTitle">Lista użytkowników:<br /><br /></span>
            <Table>
                <thead>
                    <tr>
                        <th>Lp.</th>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersList}
                </tbody>
            </Table>
        </div>
        } else {Content = <div className="MyTitleGreen">Nie ma żadnych użytkowników!</div>}
        
        return(
            <Container className="MyContainer">
                {Content}

                <Modal show={this.state.showModalDelete} onHide={() => {this.setState({showModalDelete: false})}}>
                    <Modal.Header closeButton><Modal.Title>Usuwanie użytkownika</Modal.Title></Modal.Header>
                    <Modal.Body><p>Czy na pewno chcesz usunąć użytkownika {this.state.users[this.state.currentIndex].name} {this.state.users[this.state.currentIndex].surname}?</p></Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalDelete: false})}}>Anuluj</Button>
                        <Button variant="danger" onClick={() => {this.deleteUser()}}>Tak, usuń!</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalEdit} onHide={() => {this.setState({showModalEdit: false})}}>
                    <Modal.Header closeButton><Modal.Title>Edytuj dane użytkownika:</Modal.Title></Modal.Header>
                    <Modal.Body>
                        <Form>
                        <label><h5>Edytuj imię:</h5></label>
                        <Form.Control id="newUserName" placeholder="Wpisz imię" className="MyFormControl" type="text" defaultValue={this.state.users[this.state.currentIndex].name} />
                        <label><h5>Edytuj nazwisko:</h5></label>
                        <Form.Control id="newUserSurname" placeholder="Wpisz nazwisko" className="MyFormControl" type="text" defaultValue={this.state.users[this.state.currentIndex].surname} />
                        <label><h5>Edytuj adres e-mail:</h5></label>
                        <Form.Control id="newUserEmail" placeholder="Wpisz adres e-mail" className="MyFormControl" type="email" defaultValue={this.state.users[this.state.currentIndex].email} />
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalEdit: false})}}>Anuluj</Button>
                        <Button variant="success" onClick={() => {this.editUser()}}>Tak, zmień!</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default UsersPanel