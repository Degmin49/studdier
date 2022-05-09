import React from "react";
import { Container, Button, Form, Modal, Table, Ratio, Badge, Card } from "react-bootstrap";

var CourseInfo = {
    id: 1,
    title: "Praktyczny kurs ASP.NET Core REST Web API od podstaw (C#)",
    author: "Jakub Kozera",
    calendar: "2022-05-13",
    price: "30zł"
};

class Payment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            course: CourseInfo,
            role: localStorage.getItem('role')
        };
    }

    payment(){
        //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        alert("Płatność przetwarzana");
    }
    
    render(){
        return(
            <Container className="MyContainer">
                <h1>Twój produkt:</h1>
                
                <h4>{CourseInfo.title}<br /></h4><Badge bg="secondary">Autor: {CourseInfo.author}</Badge>
                <br /><h4><b>Koszt: {CourseInfo.price}</b></h4>
                <br /><Button className="MyTableButton" variant="dark" onClick={() => {this.payment()}}>Zapłać</Button>
            </Container>
        );
    }
}

export default Payment