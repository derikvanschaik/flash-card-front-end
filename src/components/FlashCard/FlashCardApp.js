import {Button, Container} from 'react-bootstrap';
import { MdLibraryAdd } from "react-icons/md";
import { useState, useEffect } from 'react';
import FlipCard from './FlipCard';
import ButtonMenu from '../ButtonMenu/ButtonMenu';
import {mod} from '../../utils/utils';
import '../../App.css';

function FlashCardApp({cards, handleChange, title, toggleSideBar}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [curCardIdx, setCurCardIdx] = useState(0);

  const [flashCards, setFlashCards] = useState(cards);

  // Monitors flashCards so that CRUD operations can be 
  // communicated to the parent app component 
  useEffect( ()=>{
    handleChange(flashCards);

  }, [flashCards]);

  // monitor changes in cards prop 
  useEffect( () =>{
    setFlashCards(cards);
    setCurCardIdx(curCardIdx < cards.length? curCardIdx : 0);
  }, [cards]);


  const handleAdd = () =>{
    setCurCardIdx(flashCards.length);
    setFlashCards([...flashCards, {answer: 'Click Edit to change answer.', question: 'click edit to change question.'}])
  }
  const handleDelete = (idx) =>{
    if(window.confirm("Are you sure you want to delete this card? This action is not reversible.") === true){
      const newFlashCards = flashCards.filter((_, i) => i !== idx);
      setFlashCards(newFlashCards);
      setCurCardIdx( newFlashCards.length === 0? -1 :(curCardIdx) % newFlashCards.length);
    }
  }
  const handleNextCard = () =>{
    handleNavigateCard(1);
  }
  const handlePreviousCard = () =>{
    handleNavigateCard(-1);
  }
  const handleNavigateCard = (val) =>{
    setIsEditing(false);
    setCurCardIdx( mod(curCardIdx + val, flashCards.length) );
  }
  const handleSubmit = (type, val) =>{
    const edit = Object.assign({}, flashCards[curCardIdx]);
    edit[type] = val;
    setFlashCards([...flashCards.slice(0, curCardIdx), edit, ...flashCards.slice(curCardIdx + 1, flashCards.length)]);
    setIsEditing(false);
  }
  const handleCancelEdit = () =>{
    setIsEditing(false);
  }
  return (
    <Container style={ {height: '100vh'} }>
      <h3>Currently on Deck: <a href="#" onClick={ toggleSideBar }>{title}</a></h3>

      <div style={{height: '80%'}} className='d-flex flex-column align-items-center justify-content-center'>
        <Button className='my-1' onClick={handleAdd}>
          <MdLibraryAdd />(Add card)
        </Button>
        {
          flashCards.length > 0 &&
          <>
            <div className='d-flex flex-row align-items-center justify-content-between'>
              <p className='h4'>({ (curCardIdx + 1) }/{flashCards.length})</p>
            </div>
            <FlipCard 
              isFlipped={isFlipped} 
              isEditing={isEditing} 
              question={flashCards[curCardIdx].question} 
              answer={flashCards[curCardIdx].answer} 
              handleSubmit={handleSubmit} 
              handleCancel={handleCancelEdit}/>
            <div className='flex-row align-items-center justify-content-around'>
              <ButtonMenu 
                handlePreviousCard={handlePreviousCard}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                handleNextCard={handleNextCard}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                handleDelete={handleDelete}
                curCardIdx={curCardIdx} />
            </div>
          </>
        }
        {
          flashCards.length === 0 &&
          <p className='alert alert-danger'>No flash cards. Please add one.</p>
        }
      </div>
    </Container>
  );
}

export default FlashCardApp;
