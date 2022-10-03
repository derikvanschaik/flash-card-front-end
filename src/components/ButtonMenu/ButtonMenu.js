import {Button} from 'react-bootstrap';
import {FcNext, FcPrevious, FcRedo, FcCancel} from 'react-icons/fc';

export default function ButtonMenu(props){
    const {
        handlePreviousCard,
        isFlipped, 
        setIsFlipped, 
        handleNextCard,
    } = props;
    return (
        <>
        <Button className='m-2' onClick={handlePreviousCard} disabled={isFlipped === true} variant='light'>
            {
                !isFlipped && <FcPrevious />
            }
            {
                isFlipped && <FcCancel />
            }
        </Button>
        <Button className='m-2' onClick={()=> setIsFlipped(!isFlipped)}>
            <FcRedo /> (flip)
        </Button>
        <Button className='m-2' onClick={handleNextCard} disabled={isFlipped === true} variant='light'>
            {
                !isFlipped && <FcNext />
            }
            {
                isFlipped && <FcCancel />
            }
        </Button>
        </>
    )
}