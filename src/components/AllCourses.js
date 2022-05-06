import React from "react";
import { Container, Button, Form, Modal, Table } from "react-bootstrap";

var CoursesList = [
    {id: 0,title: "title",author: "author",description: "description"},
    {id: 1,title: "title",author: "author",description: "description"},
    {id: 2,title: "title",author: "author",description: "description"}
];
//CoursesList = [];

class AllCourses extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courses: CoursesList,
            currentIndex: 0,
            showModalDelete: false,
            showModalSend: false,
            showModalDenied: false,
            role: localStorage.getItem('role')
        };
    }

    deleteItem() {
        let courses = this.state.courses;
        courses.splice(this.state.currentIndex, 1);
        this.setState({ courses: courses });
    }

    deleteCourse() {
        this.deleteItem();
        this.setState({ showModalDelete: false, currentIndex: 0 });
    }

    sendCourse(){
        
    }

    render(){
        const coursesList = this.state.courses.map((x,index) => {
            return (
                <tr key={x.id}>
                    <td>{x.title}</td>
                    <td>{x.author}</td>
                    <td>{x.description}</td>
                    <td>
                        {this.state.role == "admin" ? <Button className="MyTableButton" variant="danger" onClick={() => {this.setState({showModalDelete: true, currentIndex: index})}}>Usuń</Button> : ''}
                        {(this.state.role == "visitor" || this.state.role == "student") ? <Button className="MyTableButton" variant="success" onClick={() => {this.state.role == "student" ? this.setState({showModalSend: true, currentIndex: index}) : this.setState({showModalDenied: true})}} title={this.state.role == "visitor" ? "Aby się zapisać na kurs najpierw musisz się zalogować!" : ''}>Zapisz się</Button> : ''}
                    </td>
                </tr>
        )});
        let Content;
        if (this.state.courses.length > 0){
            Content = 
            <div>
                <span className="MyTitle">Wszystkie dostępne kursy:<br /><br /></span>
                <Table>
                    <thead>
                        <tr>
                            <th>Tytuł</th>
                            <th>Autor</th>
                            <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coursesList}
                    </tbody>
                </Table>
                <div className="MyMarginTop"></div>
            </div>
        } else {Content = <div className="MyTitleGreen">Wystąpił problem z załadowaniem treści...</div>}

        return(
            <Container className="MyContainer">
                {Content}

                <Modal show={this.state.showModalDelete} onHide={() => {this.setState({showModalDelete: false})}}>
                    <Modal.Header closeButton><Modal.Title>Usuwanie książki</Modal.Title></Modal.Header>
                    <Modal.Body><p>Czy na pewno chcesz usunąć książkę "", autorstka?</p></Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalDelete: false})}}>Anuluj</Button>
                        <Button variant="danger" onClick={() => {this.deleteCourse()}}>Tak, usuń!</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalSend} onHide={() => {this.setState({showModalSend: false})}}>
                    <Modal.Header closeButton><Modal.Title>Czy na pewno wysłać prośbę?</Modal.Title></Modal.Header>
                    <Modal.Body><p></p></Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalSend: false})}}>Anuluj</Button>
                        <Button variant="success" onClick={() => {this.sendCourse()}}>Tak, wyślij!</Button>
                    </Modal.Footer>
                </Modal>

                {/* TUTAJ ZRÓB PRZEKIEROWANIE DO ZALOGOWANIA SIĘ */}
                <Modal show={this.state.showModalDenied} onHide={() => {this.setState({showModalDenied: false})}}>
                    <Modal.Header closeButton><Modal.Title>ZALOGUJ SIĘ</Modal.Title></Modal.Header>
                    <Modal.Body><p></p></Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalDenied: false})}}>Anuluj</Button>
                        <Button variant="success" onClick={() => {this.sendCourse()}}>Tak, wyślij!</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default AllCourses