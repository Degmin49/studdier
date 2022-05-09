import React from "react";
import { Container, Button, Form, Modal, Table, Ratio, Badge, Card } from "react-bootstrap";

var CourseInfo = {
    id: 1,
    title: "Praktyczny kurs ASP.NET Core REST Web API od podstaw (C#)",
    author: "Jakub Kozera",
    calendar: ["2022-05-13, Poznań - Sala Wykładowa nr.24, 8:00-16:00","2022-06-06, Poznań - Sala Wykładowa nr.8, 8:00-16:00","2022-07-17, Poznań - Sala Wykładowa nr.3, 8:00-16:00"]
};

class Calendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            course: CourseInfo,
            role: localStorage.getItem('role')
        };
    }

    goToPayment(){
        window.location.href = "Payment";
    }
    
    render(){
        const calendarList = CourseInfo.calendar.map((x,index) => {
            return (
                <tr key={index}>
                    <td>{x}</td>
                    <td>
                        <Button className="MyTableButton" variant="success" onClick={() => this.goToPayment()}>Zapisz się!</Button>
                    </td>
                </tr>
        )});
        let Content;
        if (CourseInfo.calendar.length > 0){
            Content = 
            <div>
                <span className="MyTitle">Dostępne terminy szkoleń:<br /><br /></span>
                <Table>
                    <tbody>
                        {calendarList}
                    </tbody>
                </Table>
                <div className="MyMarginTop"></div>
            </div>
        } else {Content = <div className="MyTitleRed">Niestety, aktualnie nie ma żadnych dostępnych szkoleń...</div>}

        return(
            <Container className="MyContainer">
                <h1>{CourseInfo.title}<br /></h1>
                <Badge bg="secondary">Autor: {CourseInfo.author}</Badge>

                <br /><br />{Content}

            </Container>
        );
    }
}

export default Calendar