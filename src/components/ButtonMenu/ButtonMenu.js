import {Button} from 'react-bootstrap';
import {NextIcon, PreviousIcon, FlipIcon, CancelIcon} from '../icons/Icons';


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
                !isFlipped && <PreviousIcon/>
            }
            {
                isFlipped && <CancelIcon />
            }
        </Button>
        <Button className='m-2' onClick={()=> setIsFlipped(!isFlipped)}>
            <FlipIcon /> (flip)
        </Button>
        <Button className='m-2' onClick={handleNextCard} disabled={isFlipped === true} variant='light'>
            {
                !isFlipped && <NextIcon />
            }
            {
                isFlipped && <CancelIcon />
            }
        </Button>
        </>
    )
}