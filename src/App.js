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
        <p className='h4'>({ (curCardIdx + 1) }/{flashCards.length})</p>
        <FlipCard 
          isFlipped={isFlipped} 
          isEditing={isEditing} 
          question={flashCards[curCardIdx].question} 
          answer={flashCards[curCardIdx].answer} 
          handleSubmit={handleSubmit} />
        <Button className='my-2' onClick={()=> setIsFlipped(!isFlipped)}>Flip</Button>
        <Button className='my-2' onClick={handleNextCard} disabled={isFlipped === true}>Next</Button>
        <Button className='my-2' onClick={() => setIsEditing(!isEditing)}>{isEditing? 'Cancel' : 'Edit'}</Button>
      </div>
    </Container>
  );
}

export default App;
