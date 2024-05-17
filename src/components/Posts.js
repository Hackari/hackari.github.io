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
			</Row>
		</Container>
	);
};

export default Posts;
