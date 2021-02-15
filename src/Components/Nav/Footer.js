import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<div>
			<footer class='bg-light text-center text-lg-start'>
				{/* <!-- Grid container --> */}
				<div class='container-fluid  pb-0' style={{ background: '#d3d9e0' }}>
					<form action=''>
						{/* <!--Grid row--> */}
						<div class='row'>
							{/* <!--Grid column--> */}
							<div class='col-lg-3 col-md-6 mb-md-0'>
								<ul class='list-unstyled pt-3'>
									<li>
										<a href='#!' class='text-dark'>
											About us
										</a>
									</li>
									<li>
										<a href='#!' class='text-dark'>
											Customer Service
										</a>
									</li>
								</ul>
							</div>

							<div class='col-lg-3 col-md-6  mb-md-0 '>
								<ul class='list-unstyled pt-3'>
									<li>
										<a href='#!' class='text-dark'>
											Privacy and Cookie Policy
										</a>
									</li>
									<li>
										<a href='#!' class='text-dark'>
											Search Terms
										</a>
									</li>
									<li>
										<a href='#!' class='text-dark'>
											Contact Us
										</a>
									</li>
									<li>
										<a href='#!' class='text-dark'>
											Orders and Returns
										</a>
									</li>
									<li>
										<a href='#!' class='text-dark'>
											Advanced Search
										</a>
									</li>
								</ul>
							</div>
							{/* <!--Grid column--> */}

							{/* <!--Grid column--> */}
							<div class='col-md-5 col-12  mb-md-0'>
								{/* <!-- Email input --> */}
								<div class='form-outline pt-3 input-group'>
									<span class='input-group-addon'>
										<i class='fas fa-envelope'></i>
									</span>
									<input
										type='email'
										class='form-control'
										placeholder='Enter Your Email Address '
									/>

									<button type='submit' class='btn btn-primary mb-4 '>
										Subscribe
									</button>
								</div>
							</div>
							{/* <!--Grid column--> */}
							<div class='text-center p-3 col-12 bg-secondary'>
								© 2021 Copyright:
							</div>
							{/* <!--Grid column--> */}

							{/* <!--Grid column--> */}
						</div>
						{/* <!--Grid row--> */}
					</form>
				</div>
				{/* <!-- Grid container --> */}
			</footer>
		</div>
	);
};

export default Footer;
