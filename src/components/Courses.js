import React from "react";
import { Container, Button, Form, Modal, Table } from "react-bootstrap";

var Books = [
    {bookid: 0,title: "Wiedźmin. Tom 3. Krew elfów",author: "Andrzej Sapkowski",type: "private",send: false,comment: "Podoba mi się, choć jest nudna.",description: '"Krew elfów" opowiada o losach Geralta - wiedźmina, który opiekuje się dzieckiem-niespodzianką. Tym dzieckiem jest dziewczynka o imieniu Ciri. W prezentowanym tomie poznajemy też czarodziejkę Triss, która również ma wpływ na wychowanie dziecka. Autor powoli wprowadza czytelnika w nowy świat, kreuje i daje poznać otaczającą bohaterów rzeczywistość. Fabuła książki rozgrywa się w świecie określanym przez samego autora jako quasi-średniowiecze. Mamy więc tu nie tylko zwykłych ludzi, ale też mutantów, krasnoludów i elfów.'},
    {bookid: 1,title: "Diuna. Kroniki Diuny. Tom 1",author: "Frank Herbert",type: "official",send: false,comment: "Bardzo fajna książka, polecam!",description: 'Arrakis, zwana Diuną, to jedyne we wszechświecie źródło melanżu. Z rozkazu Padyszacha Imperatora planetę przejmują Atrydzi, zaciekli wrogowie władających nią dotychczas Harkonnenów. Zwycięstwo księcia Leto Atrydy jest jednak pozorne – przejęcie planety ukartowano. W odpowiedzi na atak Imperium i Harkonnenów dziedzic rodu Atrydów Paul staje na czele rdzennych mieszkańców Diuny i sięga po imperialny tron.'},
    {bookid: 2,title: "Minecraft komiks. Tom 3",author: "Sarah Graley",type: "waiting",send: false,comment: "Nie wiem czemu, ale to czytam?",description: 'Candace, Evan, Grace, Tobi i Tyler przeżywają liczne przygody w Świecie Podstawowym. Pewnego dnia trafiają na tajemniczy uszkodzony portal. Przenosi on ich do dziwnego i cudownego zakątka Netheru, którego wcześniej nie znali. W jego eksplorowaniu ma im pomóc ich specjalistka od Netheru, Grace. Jednak w obliczu nowych zagrożeń Grace odkrywa, że brzemię wiary, jaką pokładają w niej jej przyjaciele, zanadto ją przytłacza. Gracze trafiają do niesamowitego bastionu, w którym na każdym kroku czają się nowe zagrożenia… ale tym razem muszą im stawić czoła bez pomocy swojej ekspertki. Wygląda jednak na to, że aby poradzić sobie z nowymi zagrożeniami, przyjaciele będą musieli ponownie połączyć siły…'}
];
// Books = [];

class Courses extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: Books,
            currentIndex: 0,
            showModalDelete: false,
            showModalEdit: false,
            showModalSend: false,
            showModalAdd: false
        };
    }

    deleteItem() {
        let books = this.state.books;
        books.splice(this.state.currentIndex, 1);
        this.setState({ books: books });
    }

    deleteBook() {
        console.log("Usuwamy obiekt: "+this.state.books[this.state.currentIndex].title); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        this.deleteItem();
        this.setState({ showModalDelete: false, currentIndex: 0 });
    }

    editBook() {
        let newBook = {};
        if (this.state.books[this.state.currentIndex].type === "official"){
            let newBookComment = document.getElementById("newBookComment").value;

            newBook = {bookid: this.state.books[this.state.currentIndex].bookid, type: this.state.books[this.state.currentIndex].type, title: this.state.books[this.state.currentIndex].title, author: this.state.books[this.state.currentIndex].author,comment: newBookComment, description: this.state.books[this.state.currentIndex].description};
        } else {
            let newBookTitle = document.getElementById("newBookTitle").value;
            let newBookAuthor = document.getElementById("newBookAuthor").value;
            let newBookDescription = document.getElementById("newBookDescription").value;
            let newBookComment = document.getElementById("newBookComment").value;

            newBook = {bookid: this.state.books[this.state.currentIndex].bookid, type: this.state.books[this.state.currentIndex].type, title: newBookTitle, author: newBookAuthor,comment: newBookComment, description: newBookDescription};
        }

        console.log('Edytujemy obiekt z "bookid": '+this.state.books[this.state.currentIndex].bookid); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX UWAGA - OFFICIAL KSIĄŻKE TYLKO KOMENTARZ MOŻNA EDYTOWAĆ

        let currentId = this.state.books[this.state.currentIndex].bookid;
        this.setState(prevState => ({
            books: prevState.books.map(obj => (obj.bookid === currentId ? newBook : obj))
        }));
        
        this.setState({ showModalEdit: false });
    }

    sendBook() {
        console.log('Wysłano prośbę z "bookid": '+this.state.books[this.state.currentIndex].bookid); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        let currentId = this.state.books[this.state.currentIndex].bookid;
        this.setState(prevState => ({
            books: prevState.books.map(obj => (obj.bookid === currentId ? Object.assign(obj, { send: true }) : obj))
        }));

        this.setState({ showModalSend: false });
    }

    addBook() {
        let newBookTitle = document.getElementById("newBookTitle").value;
        let newBookAuthor = document.getElementById("newBookAuthor").value;
        let newBookDescription = document.getElementById("newBookDescription").value;
        let newBookComment = document.getElementById("newBookComment").value;

        //musimy w odpowiedzi odrzymać jej id
        let newBook = {bookid: this.state.books.length+100, type: "private", title: newBookTitle, author: newBookAuthor,comment: newBookComment, description: newBookDescription};

        console.log("Dodajemy nową książkę"); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX UWAGA - OFFICIAL KSIĄŻKE TYLKO KOMENTARZ MOŻNA EDYTOWAĆ
        //musimy w odpowiedzi odrzymać jej id

        this.setState(prevState => ({
            books: [...prevState.books, newBook]
        }));
        
        this.setState({ showModalAdd: false });
    }

    render(){
        const BooksList = this.state.books.map((x,index) => {
            return (
                <tr key={x.bookid}>
                    <td>{index+1}</td>
                    <td>{x.title} {x.type === "official" ? <span title="Książka potwierdzona">✔</span> : ''}</td>
                    <td>{x.author}</td>
                    <td>{x.description}</td>
                    <td>{x.comment}</td>
                    <td>
                        <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({showModalEdit: true, currentIndex: index})}}>Edytuj</Button>
                        <Button className="MyTableButton" variant="danger" onClick={() => {this.setState({showModalDelete: true, currentIndex: index})}}>Usuń</Button>
                        {x.type != "official" ? <Button disabled={x.send} className="MyTableButton" variant="success" onClick={() => {this.setState({showModalSend: true, currentIndex: index})}} title="Wyślij prośbę do administratora o dodanie książki do listy oficjalnych książek">{x.send ? "Wysłano" : "Wyślij prośbę"}</Button> : ""}
                    </td>
                </tr>
        )});
        let Content;
        if (this.state.books.length > 0){
            Content = 
            <div>
                <span className="MyTitle">Twoja lista ulubionych książek:<br /><br /></span>
                <Table>
                    <thead>
                        <tr>
                            <th>Lp.</th>
                            <th>Tytuł</th>
                            <th>Autor</th>
                            <th>Opis</th>
                            <th>Komentarz</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BooksList}
                    </tbody>
                </Table>
                <Button variant="btn btn-outline-success" onClick={() => {this.setState({showModalAdd: true})}}>Dodaj nową pozycję!</Button>
                <div className="MyMarginTop"></div>
            </div>
        } else {Content = <div className="MyTitleGreen">Dodaj swoją pierwszą książkę do listy ulubionych!</div>}

        return(
            <Container className="MyContainer">
                {Content}

                <Modal show={this.state.showModalDelete} onHide={() => {this.setState({showModalDelete: false})}}>
                    <Modal.Header closeButton><Modal.Title>Usuwanie książki</Modal.Title></Modal.Header>
                    <Modal.Body><p>Czy na pewno chcesz usunąć książkę "{this.state.books[this.state.currentIndex].title}", autorstka {this.state.books[this.state.currentIndex].author}?</p></Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalDelete: false})}}>Anuluj</Button>
                        <Button variant="danger" onClick={() => {this.deleteBook()}}>Tak, usuń!</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalEdit} onHide={() => {this.setState({showModalEdit: false})}}>
                    <Modal.Header closeButton><Modal.Title>Edytuj dane książki:</Modal.Title></Modal.Header>
                    <Modal.Body>
                        <Form>
                        <label><h5>Edytuj tytuł:</h5></label>
                        <Form.Control id="newBookTitle" placeholder="Wpisz tytuł książki" className="MyFormControl" type="text" defaultValue={this.state.books[this.state.currentIndex].title} disabled={this.state.books[this.state.currentIndex].type === "official" ? true : false} />
                        <label><h5>Edytuj autora:</h5></label>
                        <Form.Control id="newBookAuthor" placeholder="Wpisz autora książki" className="MyFormControl" type="text" defaultValue={this.state.books[this.state.currentIndex].author} disabled={this.state.books[this.state.currentIndex].type === "official" ? true : false} />
                        <label><h5>Edytuj opis:</h5></label>
                        <Form.Control id="newBookDescription" placeholder="Wpisz opis książki" className="MyFormControl" type="text" defaultValue={this.state.books[this.state.currentIndex].description} disabled={this.state.books[this.state.currentIndex].type === "official" ? true : false} />
                        <label><h5>Edytuj swoją notatkę:</h5></label>
                        <Form.Control id="newBookComment" placeholder="Wpisz swoją notatkę" className="MyFormControl" type="text" defaultValue={this.state.books[this.state.currentIndex].comment} />
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalEdit: false})}}>Anuluj</Button>
                        <Button variant="success" onClick={() => {this.editBook()}}>Tak, zmień!</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalSend} onHide={() => {this.setState({showModalSend: false})}}>
                    <Modal.Header closeButton><Modal.Title>Czy na pewno wysłać prośbę?</Modal.Title></Modal.Header>
                    <Modal.Body><p>Czy na pewno chcesz wysłać prośbę, aby książka "{this.state.books[this.state.currentIndex].title}", autorstka {this.state.books[this.state.currentIndex].author} została dodana do listy oficjalnych książek?</p></Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalSend: false})}}>Anuluj</Button>
                        <Button variant="success" onClick={() => {this.sendBook()}}>Tak, wyślij!</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalAdd} onHide={() => {this.setState({showModalAdd: false})}}>
                    <Modal.Header closeButton><Modal.Title>Wpisz dane książki:</Modal.Title></Modal.Header>
                    <Modal.Body>
                        <Form>
                        <label><h5>Podaj tytuł:</h5></label>
                        <Form.Control id="newBookTitle" placeholder="Wpisz tytuł książki" className="MyFormControl" type="text" />
                        <label><h5>Podaj autora:</h5></label>
                        <Form.Control id="newBookAuthor" placeholder="Wpisz autora książki" className="MyFormControl" type="text" />
                        <label><h5>Wpisz opis:</h5></label>
                        <Form.Control id="newBookDescription" placeholder="Wpisz opis książki" className="MyFormControl" type="text" />
                        <label><h5>Wpisz swoją notatkę:</h5></label>
                        <Form.Control id="newBookComment" placeholder="Wpisz swoją notatkę" className="MyFormControl" type="text" />
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalAdd: false})}}>Anuluj</Button>
                        <Button variant="success" onClick={() => {this.addBook()}}>Tak, dodaj!</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default Courses