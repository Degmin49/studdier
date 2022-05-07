import React from "react";
import { Container, Button, Form, Modal, Table, Ratio, Badge, Card } from "react-bootstrap";

var CourseInfo = {
    id: 1,
    title: "Praktyczny kurs ASP.NET Core REST Web API od podstaw (C#)",
    author: "Jakub Kozera",
    description: "Platforma .NET Core to najnowsze narzędzie firmy Microsoft umożliwiające tworzenie aplikacji wieloplatformowych, w tym internetowych i internetowych interfejsów API. Ze względu na swoją wysoką wydajność, otwarty kod źródłowy oraz możliwość implementacji na różnych systemach staje się coraz bardziej popularny.",
    videoFileName: "0001.mp4",
    fullDescription: 'Platforma .NET Core to najnowsze narzędzie firmy Microsoft umożliwiające tworzenie aplikacji wieloplatformowych, w tym internetowych i internetowych interfejsów API.\
    \
    Ze względu na swoją wysoką wydajność, otwarty kod źródłowy oraz możliwość implementacji na różnych systemach staje się coraz bardziej popularny.\
    \
    \
    \
    Kurs pokazuje, jak za pomocą ASP.NET Core powstaje aplikacja web API, która docelowo może być wykorzystana przez SPA (single page application), aplikacje mobilne, aplikacje IoT lub dowolną aplikację, w której komunikacja odbywa się za pośrednictwem protokołu HTTP.\
    \
    Omówione zostaną dobre praktyki, takie jak wstrzykiwanie zależności, automatyczne mapowanie, rejestrowanie błędów, walidacja modelu, stosowanie mapowania relacyjno-obiektowego - za pomocą Entity Framework.\
    \
    \
    \
    Abyś nauczył się jak najwięcej z tego kursu, zachęcam do podążania za mną oraz do samodzielnego rozwiązywania zadań praktycznych.\
    \
    \
    \
    W trakcie kursu:\
    \
    - stworzysz aplikację, która zgodnie z architekturą REST będzie: czytać, tworzyć, modyfikować lub usuwać dane z serwera\
    \
    - wyślesz zapytania do bazy danych z kodu za pomocą ORM (Entity Framework Core)\
    \
    - utworzysz bazę danych MS SQL w oparciu o klasy w C#\
    \
    - zwalidujesz przychodzące modele i zwracać odpowiednie komunikaty w przypadku nieprawidłowości\
    \
    - użyjesz automatycznego mapowania\
    \
    - użyjesz wbudowanego kontenera, aby wstrzyknąć zależności\
    \
    - zarejestrujesz błędy lub określone informacje w pliku tekstowym\
    \
    - utworzysz dokumentację (za pomocą narzędzia Swagger)\
    \
    - skonfigurujesz NLogger\
    \
    - użyjesz Postmana, aby korzystać z internetowego interfejsu API\
    \
    - zautentykujesz użytkowników użytkowników za pomocą tokenów JWT\
    \
    - stwórz własne zasady autoryzacji\
    \
    - utworzysz tabele użytkowników i jednostek ról\
    \
    - zabezpieczysz hasła użytkowników za pomocą hashy\
    \
    - dowiesz się jak autoryzować na podstawie roszczenia użytkownika i jego wartości\
    \
    Czego się nauczysz\
    utworzyć backend aplikacji webowej, która będzie dodawać, modyfikować oraz usuwać lub zwracać dane\
    zbudować bazę danych MS SQL na podstawie klas C#\
    dodać autentykacje oraz autoryzacje użytkowników API\
    implementować własne Middleware\
    obsługiwać pliki statyczne - zwracać je z API oraz przesyłać na serwer\
    logować informacje lub błędy aplikacji do plików tekstowych\
    paginować zwracane wyniki\
    skonfigurować politykę CORS\
    wdrożyć aplikacje na chmurę Azure\
    Czy istnieją jakieś wymagania dotyczące kursu?\
    Podstawowa znajomość języka C#\
    Dla kogo jest ten kurs:\
    Początkujący programiści .NET, którzy chcą nauczyć się tworzyć aplikacje webowe'
};

class CourseDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            course: CourseInfo,
            role: localStorage.getItem('role')
        };
    }
    
    render(){
        return(
            <Container className="MyContainer">
                <h1>{CourseInfo.title}<br /></h1>
                <Badge bg="secondary">Autor: {CourseInfo.author}</Badge>

                {/* TUTAJ ZRÓB VIDEO */}
                <Card className="MyVideo" style={{ width: '100%;' }}></Card>
                
                <p>{CourseInfo.fullDescription}</p>
            </Container>
        );
    }
}

export default CourseDetails