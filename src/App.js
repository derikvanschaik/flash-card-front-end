import FlashCardApp from "./components/FlashCard/FlashCardApp"
import {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function App(){

    const initialDecks = [
        {
            title: 'Deck 1',
            cards: [
                {question: 'Question 1', answer: 'Answer1'},
                {question: 'Question 2', answer: "Answer2"},
                {question: 'Question 3', answer: 'Answer3'}                
            ]
        },
        {
            title: 'Deck 2',
            cards: [
                {question: 'Q1', answer: 'A1'},
                {question: 'Q2', answer: "A2"},             
            ]
        },

    ]
    const [decks, setDecks] = useState(initialDecks);
    const [row, setRow] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (newCards) =>{
        decks[row]['cards'] = newCards;
        setDecks(decks);
    }
    const handleChangeDeck = (i) =>{
        setRow(i);
    }

    return (
        <>
            {/* Side bar component:  */}
            <Offcanvas show={isOpen} onHide={() => setIsOpen(false)} >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Decks</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='list-group'>
                        {decks.map((deck, i) =>{
                            return (
                                <li 
                                    className={`list-group-item ${i === row? 'active' : ''}`}
                                    onClick={() => handleChangeDeck(i)} >
                                    {deck.title}
                                </li>
                            )
                        })}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

            <FlashCardApp 
                cards={decks[row]['cards']} 
                title={decks[row]['title']} 
                handleChange={handleChange}
                toggleSideBar={() => setIsOpen(!isOpen) }
            />
        </>
    )
}