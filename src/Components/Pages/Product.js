import React from 'react';

const Product = () => {
	return (
		<div className='container'>
			<div className='row pt-3'>
				<div className='col-6 .d-sm-none .d-md-block '>
					<div
						id='carouselExampleIndicators'
						class='carousel slide'
						data-ride='carousel'>
						<ol class='carousel-indicators'>
							<li
								data-target='#carouselExampleIndicators'
								data-slide-to='0'
								class='active'></li>
							<li
								data-target='#carouselExampleIndicators'
								data-slide-to='1'></li>
						</ol>
						<div class='carousel-inner'>
							<div class='carousel-item active'>
								<img
									class='d-block w-100'
									src='./Imgs/prod/prod1.jpg'
									alt='First slide'
								/>
							</div>
							<div class='carousel-item'>
								<img
									class='d-block w-100'
									src='./Imgs/prod/prod2.jpg'
									alt='Second slide'
								/>
							</div>
						</div>
						<a
							class='carousel-control-prev'
							href='#carouselExampleIndicators'
							role='button'
							data-slide='prev'>
							<span
								class='carousel-control-prev-icon'
								aria-hidden='true'></span>
							<span class='sr-only'>Previous</span>
						</a>
						<a
							class='carousel-control-next'
							href='#carouselExampleIndicators'
							role='button'
							data-slide='next'>
							<span
								class='carousel-control-next-icon'
								aria-hidden='true'></span>
							<span class='sr-only'>Next</span>
						</a>
					</div>
				</div>
				<div className='col-6 text-center'>
					<div className='row border-bottom'>
						<h2 className='col-12'>Tank</h2>
						<h3 className='col'>$34</h3>
						<p className='col'>
							<b>IN STOCK</b>
						</p>
					</div>
					<div>
						<div className='row pt-3'>
							<strong className='col-12'>Color</strong>
							<button
								className='btn border p-3 col-md'
								style={{ backgroundColor: '#fafafa' }}></button>
							<button
								className='btn border p-3 col-md'
								style={{ backgroundColor: '#dabdfc' }}></button>
							<button
								className='btn border p-3 col-md'
								style={{ backgroundColor: '#f0e3a8' }}></button>
						</div>
						<div className='row py-3'>
							<strong className='col-12'>Size</strong>
							<button className='btn border col-md'>S</button>
							<button className='btn border col-md'>M</button>
							<button className='btn border col-md'>L</button>
						</div>
						<div>
							<strong>Qty</strong>
							<br />
							<input type='number' defaultValue='1'></input>
						</div>
						<div className='row pt-3'>
							<button class='btn btn-primary col-12'>Add to Cart</button>
							<i class='fas fa-heart  col'>ADD TO WISH LIST</i>
							<i class='fas fa-chart-bar  col'>ADD TO COMPARE</i>
							<i class='fas fa-envelope'>EMAIL</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
