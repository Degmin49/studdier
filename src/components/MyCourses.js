import React from "react";
import { Container, Button, Form, Modal, Table } from "react-bootstrap";

var CoursesList = [
    {id: 0,title: "Complete C# Unity Game Developer 2D",author: "Garry Pettie",description: "The course has recently been remastered in Unity 2021.1. This course started as a runaway success on Kickstarter and has gone on to become the most popular and most watched Unity game development course on Udemy. The course has full English closed-captions throughout."},
    {id: 1,title: "Praktyczny kurs ASP.NET Core REST Web API od podstaw (C#)",author: "Jakub Kozera",description: "Platforma .NET Core to najnowsze narzędzie firmy Microsoft umożliwiające tworzenie aplikacji wieloplatformowych, w tym internetowych i internetowych interfejsów API. Ze względu na swoją wysoką wydajność, otwarty kod źródłowy oraz możliwość implementacji na różnych systemach staje się coraz bardziej popularny."},
    {id: 2,title: "Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games",author: "Sam Pattuzzi",description: "Learn how to create and mod video games using Unreal Engine 5, even if you're a complete beginner. Unreal is a free-to-use game development engine used by AAA studios and indie developers worldwide. It is a massive and powerful beast, but we break it down step-by-step so you can tame it."}
];
//CoursesList = [];

class MyCourses extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courses: CoursesList,
            currentIndex: 0,
            showModalEdit: false,
            role: localStorage.getItem('role')
        };
    }

    editCourse() {
        const newTitle = document.getElementById("newTitle").value;
        const newDescription = document.getElementById("newDescription").value;

        const currentId = this.state.courses[this.state.currentIndex].id;
        //AXIOS i zmiana w bazie danych

        //w przypadku powodzenia
        const newCourse = {id: this.state.courses[this.state.currentIndex].id, title: newTitle, author: this.state.courses[this.state.currentIndex].author, description: newDescription};        
        this.setState(prevState => ({
            courses: prevState.courses.map(obj => (obj.id === currentId ? newCourse : obj))
        }));
        
        this.setState({ showModalEdit: false });
    }

    render(){
        const coursesList = this.state.courses.map((x,index) => {
            return (
                <tr key={x.id}>
                    <td>{x.title}</td>
                    <td>{x.author}</td>
                    <td>{x.description}</td>
                    <td>
                        {this.state.role == "teacher" ? <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({showModalEdit: true, currentIndex: index})}}>Edytuj</Button> : ''}
                        <Button className="MyTableButton" variant="success" onClick={() => {this.setState({currentIndex: index}); this.sendCourse();}}>Przejdź do kursu</Button>
                    </td>
                </tr>
        )});
        let Content;
        if (this.state.courses.length > 0){
            Content = 
            <div>
                <span className="MyTitle">Twoje posiadane kursy:<br /><br /></span>
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

                <Modal show={this.state.showModalEdit} onHide={() => {this.setState({showModalEdit: false})}}>
                    <Modal.Header closeButton><Modal.Title>Edytuj dane kursu:</Modal.Title></Modal.Header>
                    <Modal.Body>
                        <Form>
                        <label><h5>Edytuj tytuł:</h5></label>
                        <Form.Control id="newTitle" placeholder="Wpisz tytuł kursu" className="MyFormControl" type="text" defaultValue={this.state.courses[this.state.currentIndex].title} />
                        <label><h5>Edytuj opis:</h5></label>
                        <Form.Control id="newDescription" placeholder="Wpisz opis książki" className="MyFormControl" type="text" defaultValue={this.state.courses[this.state.currentIndex].description} />
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalEdit: false})}}>Anuluj</Button>
                        <Button variant="success" onClick={() => {this.editCourse()}}>Tak, zmień!</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default MyCourses