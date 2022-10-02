import FlashCardApp from "./components/FlashCard/FlashCardApp"
import {useState, useRef} from 'react';
import {Offcanvas, Button, Stack, Form} from 'react-bootstrap';

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
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [newDeckTitle, setNewDeckTitle] = useState('');
    const input = useRef();

    const handleChange = (newCards) =>{
        decks[row]['cards'] = newCards;
        setDecks(decks);
    }
    const handleChangeDeck = (i) =>{
        setRow(i);
    }
    const handleAdd = () =>{
        if(decks.map(obj => obj.title).includes(newDeckTitle)) return;
        if(newDeckTitle === '') return;
        setIsAddingNew(false);
        setDecks([...decks, {title: newDeckTitle, cards: []}])
        setNewDeckTitle('');
        input.current.value = '';
    }

    return (
        <>
            {/* Side bar component:  */}
            <Offcanvas show={isOpen} onHide={() => setIsOpen(false)} >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Decks</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        isAddingNew &&
                            <Form className='my-2'>
                                <Stack gap={2}>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Title" 
                                        onInput={(e) => setNewDeckTitle(e.target.value)}
                                        ref={input}
                                        value={newDeckTitle} />

                                    <Button variant="light" onClick={handleAdd}>Submit</Button>
                                    <Button variant="dark"onClick={() => setIsAddingNew(false)}>Cancel</Button>
                                </Stack>
                            </Form>
                    }
                    {
                        !isAddingNew &&
                        <>
                            <Button className='my-2' variant='light' onClick={() => setIsAddingNew(true)}>Add New</Button>
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
                        </>
                    }
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