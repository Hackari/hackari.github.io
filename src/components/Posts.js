// Posts.js

import React from "react";
import Post1 from "./Post1";
import { Container, Row, Col, Card } from 'react-bootstrap';


const Posts = () => {
	return (
		<Container>
			<Row className="justify-content-between">
				<Col md={8} className="mb-4 mt-4">
					<Post1 />
				</Col>
				<Col md={2} className="mt-4 float-right">
					<Card>
						<Card.Body>
							<Card.Title>Recent Posts</Card.Title>
							<ul className="list-unstyled">
								<li><a href="#">JavaScript</a></li>
								<li><a href="#">Data Structure</a></li>
								<li><a href="#">Algorithm</a></li>
								<li><a href="#">Computer Network</a></li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Posts;
