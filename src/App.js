import ReactCardFlip from 'react-card-flip';
import {Card, Button, Container} from 'react-bootstrap';
import {useState} from 'react';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Container style={ {height: '100vh'} }>
      <div style={{height: '80%'}} className='d-flex flex-column align-items-center justify-content-center'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card className='py-4 px-2 text-center flashcard'>
          <Card.Body>
            <p class='h3'>Flash card Question</p>
          </Card.Body>
        </Card>

        <Card className='py-4 px-2 text-center flashcard'>
          <Card.Body>
            <p>Flash card answer answer answer ansdfasdflkjafsd
              laksdflasjdf
              asdflasdfj
              asdflkasdf
            </p>
            </Card.Body>
        </Card>
      </ReactCardFlip>
      <Button className='my-2' onClick={()=> setIsFlipped(!isFlipped)}>Flip</Button>
      </div>
    </Container>
  );
}

export default App;
