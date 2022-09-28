import {Button, Container} from 'react-bootstrap';
import {useState} from 'react';
import FlipCard from './components/FlashCard/FlipCard';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [curCardIdx, setCurCardIdx] = useState(0);

  const flashCards = [
    {question: 'Capital of Canada', answer: 'ottowa'},
    {question: 'Capital of Jamaica', answer: 'Bugladesh'},
    {question: 'Capital of Sierra Leone', answer: 'WakaJaka'}
  ]
  const handleNextCard = () =>{
    setCurCardIdx( (curCardIdx + 1) % flashCards.length);
  }
  return (
    <Container style={ {height: '100vh'} }>
      <div style={{height: '80%'}} className='d-flex flex-column align-items-center justify-content-center'>
        <p className='h4'>({ (curCardIdx + 1) }/{flashCards.length})</p>
        <FlipCard isFlipped={isFlipped} question={flashCards[curCardIdx].question} answer={flashCards[curCardIdx].answer} />
        <Button className='my-2' onClick={()=> setIsFlipped(!isFlipped)}>Flip</Button>
        <Button className='my-2' onClick={handleNextCard} disabled={isFlipped === true}>Next</Button>
      </div>
    </Container>
  );
}

export default App;
