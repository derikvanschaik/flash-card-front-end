import {Button} from 'react-bootstrap';
import MoreDropDown from './MoreDropDown';

export default function ButtonMenu(props){
    const {
        handlePreviousCard,
        isFlipped, 
        setIsFlipped, 
        handleNextCard, 
        isEditing, 
        setIsEditing, 
        handleDelete, 
        curCardIdx
    } = props;
    return (
        <>
        <Button className='m-2' onClick={handlePreviousCard} disabled={isFlipped === true}>Previous</Button>
        <Button className='m-2' onClick={()=> setIsFlipped(!isFlipped)}>Flip</Button>
        <Button className='m-2' onClick={handleNextCard} disabled={isFlipped === true}>Next</Button>
        <MoreDropDown 
          isEditing={isEditing} 
          setIsEditing={setIsEditing} 
          handleDelete={handleDelete} 
          curCardIdx={curCardIdx} />
        </>
    )
}