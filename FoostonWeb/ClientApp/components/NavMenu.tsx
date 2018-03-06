import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

export default class NavMenu extends React.Component<{}, {}> {
    public render() {
        return(
            <Navbar style={{margin: "0"}} inverse collapseOnSelect staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to={'/'}>
                            <a href='/'>FOOSTON</a>
                        </LinkContainer>
                    </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer key={1} to={'/ratings'}>
                            <NavItem eventKey={1} href='/ratings'>
                                 <span className='glyphicon glyphicon-th-list'></span> Will D Ratings
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer key={2} to={'/join'}>
                            <NavItem eventKey={2} href='/join'>
                                <span className='glyphicon glyphicon-envelope'></span> Join
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
