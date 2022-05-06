import React from "react";
import { Container, Button, Form, Modal, Table } from "react-bootstrap";

var CoursesList = [
    {id: 0,title: "Complete C# Unity Game Developer 2D",author: "Garry Pettie",description: "The course has recently been remastered in Unity 2021.1. This course started as a runaway success on Kickstarter and has gone on to become the most popular and most watched Unity game development course on Udemy. The course has full English closed-captions throughout."},
    {id: 1,title: "Praktyczny kurs ASP.NET Core REST Web API od podstaw (C#)",author: "Jakub Kozera",description: "Platforma .NET Core to najnowsze narzędzie firmy Microsoft umożliwiające tworzenie aplikacji wieloplatformowych, w tym internetowych i internetowych interfejsów API. Ze względu na swoją wysoką wydajność, otwarty kod źródłowy oraz możliwość implementacji na różnych systemach staje się coraz bardziej popularny."},
    {id: 2,title: "Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games",author: "Sam Pattuzzi",description: "Learn how to create and mod video games using Unreal Engine 5, even if you're a complete beginner. Unreal is a free-to-use game development engine used by AAA studios and indie developers worldwide. It is a massive and powerful beast, but we break it down step-by-step so you can tame it."}
];
//CoursesList = [];

class AllCourses extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courses: CoursesList,
            currentIndex: 0,
            showModalDelete: false,
            showModalLogin: false,
            showModalDenied: false,
            role: localStorage.getItem('role')
        };
    }

    deleteCourse() {
        //alert("Tutaj AXIOS, id: "+this.state.courses[this.state.currentIndex].id); //XXXXXXXXXXXXXXXXXXXXXXXXXXXX

        //jeśli poprawnie usuneło
        let courses = this.state.courses;
        courses.splice(this.state.currentIndex, 1);
        this.setState({ courses: courses });

        //w każdej sytuacji
        this.setState({ showModalDelete: false, currentIndex: 0 });
    }

    sendCourse(){
        if (this.state.role == "student"){
            //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            //jeśli już posiada ten kurs
            this.setState({showModalDenied: true});
            //jeśli nie wykupił:
            //redirect do kalendarza
        }
        if (this.state.role == "visitor") this.setState({showModalLogin: true});
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
                        {(this.state.role == "visitor" || this.state.role == "student") ? <Button className="MyTableButton" variant="success" onClick={() => {this.setState({currentIndex: index}); this.sendCourse();}} title={this.state.role == "visitor" ? "Aby się zapisać na kurs najpierw musisz się zalogować!" : ''}>Zapisz się</Button> : ''}
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
                    <Modal.Header closeButton><Modal.Title>Usuwanie kursu</Modal.Title></Modal.Header>
                    <Modal.Body><p>Czy na pewno chcesz usunąć kurs "{this.state.courses[this.state.currentIndex].title}", autorstwa {this.state.courses[this.state.currentIndex].author}?</p></Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalDelete: false})}}>Anuluj</Button>
                        <Button variant="danger" onClick={() => {this.deleteCourse()}}>Tak, usuń!</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalDenied} onHide={() => {this.setState({showModalDenied: false})}}>
                    <Modal.Header closeButton><Modal.Title>Nie możesz wykupić kursu</Modal.Title></Modal.Header>
                    <Modal.Body><p>Nie możesz wykupić kursu, ponieważ już go posiadasz.</p></Modal.Body>

                    <Modal.Footer>
                        <Button variant="success" onClick={() => {this.setState({showModalDenied: false})}}>Ok</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalLogin} onHide={() => {this.setState({showModalLogin: false})}}>
                    <Modal.Header closeButton><Modal.Title>Nie jesteś zalogowany</Modal.Title></Modal.Header>
                    <Modal.Body><p>Aby wykupić kurs musisz się najpierw zalogować.</p></Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalLogin: false})}}>Ok</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default AllCourses