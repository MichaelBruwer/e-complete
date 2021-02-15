import React from 'react';
import './css/checkout.css';

const Checkout = () => {
	return (
		<div className='container-fluid'>
			<div className='row pt-3'>
				<div className='col'>
					<h3 className='border-bottom'>Shipping Address</h3>
					<form className='pb-3'>
						<div class='form-group col-md-12 border-bottom pb-3'>
							<label for='inputEmail4'>Email Address</label>
							<input type='email' class='form-control' />
						</div>
						<div class='form-group col-md-12'>
							<label for='inputPassword4'>First Name</label>
							<input type='text' class='form-control' />
						</div>
						<div class='form-group col-md-12'>
							<label for='inputPassword4'>Last name</label>
							<input type='password' class='form-control' />
						</div>

						<div class='form-group col-md-12'>
							<label for='inputAddress'>Company</label>
							<input type='text' class='form-control' />
						</div>
						<div class='form-group col-md-12'>
							<label for='inputAddress2'>Address</label>
							<input type='text' class='form-control' />
						</div>

						<div class='form-group col-md-12'>
							<label for='inputCity'>City</label>
							<input type='text' class='form-control' />
						</div>
						<div class='form-group col-md-12'>
							<label for='inputState'>State/Province</label>
							<input type='text' class='form-control' />
						</div>
						<div class='form-group col-md-12'>
							<label for='inputZip'>Zip/Postal Code</label>
							<input type='text' class='form-control' />
						</div>
						<div class='form-group col-md-12'>
							<label for='inputState'>Country</label>
							<select id='inputState' class='form-control'>
								<option selected>Poland</option>
								<option>United Kingdom</option>
								<option>United States</option>
								<option>South Africa</option>
							</select>
						</div>
						<div class='form-group col-md-12'>
							<label for='inputZip'>Phone Number</label>
							<input type='text' class='form-control' />
						</div>

						<button type='submit' class='btn btn-primary col-md'>
							Next
						</button>
					</form>
				</div>
				<div className='col pt-5 .d-sm-none .d-md-block '>
					<div className='' style={{ backgroundColor: '#f0f0f0' }}>
						<h3>Order Summary</h3>
						<div className='row border-top border-bottom py-2'>
							<div className='col-6'>Cart Subtotal</div>
							<div className='col-6 py-2'>$34.00</div>
							<div className='col-6'>Shipping</div>
							<div className='col-6 py-2'>
								<i>Not yet calculated</i>
							</div>
						</div>
						<div className='row py-2'>
							<h4 className='col-6'>Order Total</h4>
							<div className='col-6'>$34.00</div>
						</div>
						<div className='row py-2 border-bottom'>
							<h4 className='col-6'>1 Item in Cart</h4>
							<button
								class='btn btndrop col-6 border-0'
								type='button'
								data-toggle='collapse'
								data-target='#collapseExample'
								aria-expanded='false'
								aria-controls='collapseExample'>
								<i class='fas fa-chevron-up'></i>
							</button>
						</div>
						<div class='collapse pt-3' id='collapseExample'>
							<div class='row'>
								<div className='col-4'>
									<img src='./Imgs/prod/prod1.jpg' alt='prod1' height='100' />
								</div>
								<div className='col-4'>
									{' '}
									Tank <br />
									Qty: 1
								</div>
								<div className='col-4'> $34.00</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
