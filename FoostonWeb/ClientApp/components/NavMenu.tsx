import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

export default class NavMenu extends React.Component<{}, {}> {
    public render() {
        return(
            <Navbar style={{margin: "0", backgroundColor: ''}} inverse collapseOnSelect staticTop>
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
                        <LinkContainer key={2} to={'/table-locations'}>
                            <NavItem eventKey={2} href='/table-locations'>
                                 <span className='glyphicon glyphicon-map-marker'></span> Tables
                            </NavItem>
                        </LinkContainer>
                        <MenuItem eventKey={3} href='https://forum.fooston.com'>
                             <span className='glyphicon glyphicon-comment'></span> Forums
                        </MenuItem>
                        <LinkContainer key={4} to={'/join'}>
                            <NavItem eventKey={4} href='/join'>
                                <span className='glyphicon glyphicon-envelope'></span> Join
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer key={5} to={'/official-foosball-rules'}>
                            <NavItem eventKey={5} href='/official-foosball-rules'>
                                <span className='glyphicon glyphicon-book'></span> Official foosball rules 
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
