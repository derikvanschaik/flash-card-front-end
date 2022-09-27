import ReactCardFlip from 'react-card-flip';
import {Card, Button, Container} from 'react-bootstrap';
import {useState} from 'react';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Container style={ {height: '100vh'} }>
      <div style={{height: '80%'}} className='d-flex flex-column align-items-center justify-content-center'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className='text-center'>
          <Card className='py-4 px-2' >
            <Card.Body>Do turtles have feelings?</Card.Body>
          </Card>
        </div>
        <div className='text-center'>
          <Card className='py-4 px-2'>
            <Card.Body>No, turtles don't have feelings</Card.Body>
          </Card>
        </div>
      </ReactCardFlip>
      <Button className='my-2' onClick={()=> setIsFlipped(!isFlipped)}>Flip</Button>
      </div>
    </Container>
  );
}

export default App;
