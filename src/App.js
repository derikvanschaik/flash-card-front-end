import {Button, Container} from 'react-bootstrap';
import {useState} from 'react';
import FlipCard from './components/FlashCard/FlipCard';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [curCardIdx, setCurCardIdx] = useState(0);

  const cards = [
    {question: 'Question 1', answer: 'Answer1'},
    {question: 'Question 2', answer: "Answer2"},
    {question: 'Question 3', answer: 'Answer3'}
  ]
  const [flashCards, setFlashCards] = useState(cards);
  const handleAdd = () =>{
    setCurCardIdx(flashCards.length);
    setFlashCards([...flashCards, {answer: 'Click Edit to change answer.', question: 'click edit to change question.'}])
  }
  const handleDelete = (idx) =>{
    const newFlashCards = flashCards.filter((_, i) => i !== idx);
    setFlashCards(newFlashCards);
    setCurCardIdx( newFlashCards.length === 0? -1 :(curCardIdx) % newFlashCards.length);
  }
  const handleNextCard = () =>{
    setIsEditing(false);
    setCurCardIdx( (curCardIdx + 1) % flashCards.length);
  }
  const handleSubmit = (type, val) =>{
    const edit = Object.assign({}, flashCards[curCardIdx]);
    edit[type] = val;
    setFlashCards([...flashCards.slice(0, curCardIdx), edit, ...flashCards.slice(curCardIdx + 1, flashCards.length)]);
    setIsEditing(false);
  }
  return (
    <Container style={ {height: '100vh'} }>
      <div style={{height: '80%'}} className='d-flex flex-column align-items-center justify-content-center'>
        <Button className='my-1' onClick={handleAdd}>Add card</Button>
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
              handleSubmit={handleSubmit} />
            <div className='flex-row align-items-center justify-content-around'>
              <Button className='m-2' onClick={() => setIsEditing(!isEditing)}>{isEditing? 'Cancel' : 'Edit'}</Button>
              <Button className='m-2' onClick={() => handleDelete(curCardIdx)}>Delete</Button>
              <Button className='m-2' onClick={()=> setIsFlipped(!isFlipped)}>Flip</Button>
              <Button className='m-2' onClick={handleNextCard} disabled={isFlipped === true}>Next</Button>
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

export default App;
