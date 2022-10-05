import {Button, Alert, Container} from 'react-bootstrap';

export default function NoDecks({openSideBar}){
    return (
        <Container>
        <div className='my-4'>
            <Alert variant='danger'>
                <Alert.Heading>No Decks.</Alert.Heading>
                <p>
                    No Decks are present. Please Add a deck.
                </p>
                <Button variant='light light-outline' onClick={openSideBar}>Add Deck</Button>
            </Alert>
        </div>
    </Container>
    )
}