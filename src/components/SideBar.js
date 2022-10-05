import {Offcanvas } from 'react-bootstrap';

export default function SideBar({content, isOpen, hideSideBar}){
    return (
        <Offcanvas show={isOpen} onHide={hideSideBar} >
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Decks</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {content}
        </Offcanvas.Body>
    </Offcanvas>
    )
}