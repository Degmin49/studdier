import React from "react";
import { Container, Button, Form, Modal, Table } from "react-bootstrap";

var Users = [
    {userid: 0,name: "Adam",surname: "Małysz",email: "adam.małysz@wp.pl",role:"admin"},
    {userid: 1,name: "Robert",surname: "Lewandowski",email: "złota@piłka.fr",role:"teacher"},
    {userid: 2,name: "Michał",surname: "Pazdan",email: "ronaldo@nieprzejdzie.pl",role:"student"},
    {userid: 3,name: "Sergio",surname: "Ramos",email: "ball@incosmos.com",role:"student"},
    {userid: 4,name: "Arek",surname: "Milik",email: "siła@nie-technika.pl",role:"student"}
];

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
        //POST do API - usunięcie użytkownika
        this.deleteItem();
        this.setState({ showModalDelete: false, currentIndex: 0 });
    }

    editUser() {
        const newUserName = document.getElementById("newUserName").value;
        const newUserSurname = document.getElementById("newUserSurname").value;
        const newUserEmail = document.getElementById("newUserEmail").value;
        const newUserRole = document.getElementById("newUserRole").value;
        let newUser = {userid: this.state.users[this.state.currentIndex].userid, type: this.state.users[this.state.currentIndex].type, name: newUserName, surname: newUserSurname, email: newUserEmail, role: newUserRole};

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
                <td>{x.name} {x.role === "admin" ? <span title="Konto administratora">✔</span> : ''}</td>
                <td>{x.surname}</td>
                <td>{x.email}</td>
                <td>{x.role}</td>
                <td>
                    {x.role == "admin" ? '' : <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({showModalEdit: true, currentIndex: index})}}>Edytuj</Button>}
                    {x.role == "admin" ? '' : <Button className="MyTableButton" variant="danger" onClick={() => {this.setState({showModalDelete: true, currentIndex: index})}}>Usuń</Button>}
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
                        <th>Rola</th>
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
                        <label><h5>Edytuj role:</h5></label>
                        <Form.Select id="newUserRole" placeholder="Wpisz role" className="MyFormControl" type="text">
                            <option value="admin" selected={this.state.users[this.state.currentIndex].role == "admin" ? "selected" : ""}>Administrator</option>
                            <option value="teacher" selected={this.state.users[this.state.currentIndex].role == "teacher" ? "selected" : ""}>Nauczyciel</option>
                            <option value="student" selected={this.state.users[this.state.currentIndex].role == "student" ? "selected" : ""}>Student</option>
                        </Form.Select>
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