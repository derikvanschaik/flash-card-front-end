import SideBar from './components/SideBar';
import FlashCardApp from "./components/FlashCard/FlashCardApp";
import AddNewDeck from "./components/DeckManager/AddNewDeck";
import DeckItem from "./components/DeckManager/DeckItem";
import NoDecks from "./components/DeckManager/NoDecks";
import {useState, useRef} from 'react';
import {Button } from 'react-bootstrap';
import { AddIcon } from "./components/icons/Icons";

export default function App(){

    const initialDecks = [
        {
            title: 'Deck 1',
            cards: [
                {question: 'Question 1', answer: 'Answer1'},
                {question: 'Question 2', answer: "Answer2"},
                {question: 'Question 3', answer: 'Answer3'}                
            ],
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
    const handleDelete = (event, i) =>{
        event.stopPropagation();
        const newDecks = [...decks.filter((_, idx) => idx!==i)];
        setDecks( newDecks );
        //  want to bring the alert to user's attention
        if(newDecks.length === 0){
            setIsOpen(false);
        }
        if(row === i){
            setRow(newDecks.length === 0? 0 : newDecks.length -1 );
        }
    }
    const handleChangeTitle = (i) =>{
        const changeTitle = (newTitle) =>{
            decks[i].title = newTitle;
            setDecks([...decks]);
        }
        return changeTitle;
    }

    return (
        <>
            <SideBar 
                isOpen={isOpen} 
                hideSideBar={() => setIsOpen(false)} 
                content={
                    (isAddingNew &&
                        <AddNewDeck
                            handleNewTitleInput={(e) => setNewDeckTitle(e.target.value)}
                            handleAdd={handleAdd}
                            handleCancel={() => setIsAddingNew(false)}
                            newDeckTitle={newDeckTitle}
                            inputRef={input} />) 
                    || 
                        <>
                        <Button className='my-2' variant='light' onClick={() => setIsAddingNew(true)}>
                            <AddIcon /> 
                            Add Deck
                        </Button>
                        <ul className='list-group'>
                            {decks.map((deck, i) =>{
                                return (
                                    <DeckItem 
                                        title={deck.title} 
                                        isActive={row === i} 
                                        handleSelect={() => handleChangeDeck(i)}
                                        handleDelete={(e) => handleDelete(e, i)} 
                                        handleChangeTitle = {handleChangeTitle(i)}/>
                                )
                            })}
                        </ul>
                        </>
                }/>
            {
                decks[row] && 
                <FlashCardApp 
                    cards={decks[row]['cards']} 
                    title={decks[row]['title']} 
                    handleChange={handleChange}
                    toggleSideBar={() => setIsOpen(!isOpen) }
                />
            }
            {
                decks.length === 0 &&
                <NoDecks openSideBar={()=> setIsOpen(true)}/>
            }
        </>
    )
}