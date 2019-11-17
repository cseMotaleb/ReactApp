import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
	const Contact = () => {
		return (
			<div className="about-area">
				<div className="container">
					<div className="breadcrumb text-center">
						<h1>Contact</h1>
					</div>
						<div className="contact">
							<Form>
								<FormGroup row>
									<Label for="exampleEmail" sm={2}>Name</Label>
									<Col sm={10}>
									<Input type="text" name="name" id="exampleName" placeholder="with a placeholder" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="exampleEmail" sm={2}>Email</Label>
									<Col sm={10}>
									<Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="exampleText" sm={2}>Message</Label>
									<Col sm={10}>
									<Input type="textarea" row="10" name="text" id="exampleText" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="exampleFile" sm={2}>File</Label>
									<Col sm={10}>
									<Input type="file" name="file" id="exampleFile" />
									<FormText color="muted">
										This is some placeholder block-level help text for the above input.
										It's a bit lighter and easily wraps to a new line.
									</FormText>
									</Col>
								</FormGroup>
								<FormGroup check row>
									<Col sm={{ size: 10, offset: 2 }}>
									<Button>Submit</Button>
									</Col>
								</FormGroup>
							</Form>
						</div>

				</div>
			</div>
		)
	}

	export default Contact