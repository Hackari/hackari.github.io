// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const BlogNav = () => {
	return (
		<div>
			<Navbar style={{
				backgroundColor:"#209999"
			}}>
				<img
			src='https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10000/P9918_701E11087_02.jpg'
			height='30'
			alt=''
			loading='lazy'
			/>
				<Navbar.Brand href="#home" style={{color:"white", marginLeft:"10px"}}>Akari</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
					<Nav>
						<Nav.Link href="#home" style={{color:"white"}}>
							Games
						</Nav.Link>
						<Nav.Link href="#about" style={{color:"white"}}>
							School
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default BlogNav;
