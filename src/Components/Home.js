import React from 'react'

import { Button } from 'reactstrap';

	const Home = () => {
		return (
			<div className="home">
				<div className="hero_banner">
					<div className="overlay"></div>
						<div className="container">
							<div className="row">
								<div className="offset-md-2 col-md-8 ">
									<div className="banner_cation">
										<h1>Our Creativity Is Your Success</h1>
										<p>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
										<Button color="primary" size="lg">React App</Button>{' '}
										<Button className="banner_btn" outline color="primary" size="lg">Read More</Button>
									</div>
								</div>
							</div>
						</div>
				</div>
					<div className="service">
						<div className="container">
							<div className="service_head text-center">
								<h1>Our Service</h1>
							</div>
								<div className="row">
									<div className="col-md-6">
										<div className="card">
											<div className="card-block block-1">
												<h3 className="card-title">Special title</h3>
												<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
												<Button className="read-more"  size="lg" disabled>Read more</Button>{' '}
											</div>
										</div>
									</div>
										<div className="col-md-6">
											<div className="card">
												<div className="card-block block-1">
													<h3 className="card-title">Special title</h3>
													<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
													<Button className="read-more"  size="lg" disabled>Read more</Button>{' '}
												</div>
											</div>
                            			</div>
                    			</div>
                		</div>
            		</div>
			</div>
		)
	}


	export default Home