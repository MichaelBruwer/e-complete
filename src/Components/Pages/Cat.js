import React from 'react';
import './css/Cat.css';

const Cat = () => {
	return (
		<div className='container pt-3'>
			<div className='row'>
				{/* Left nav */}
				<div className=' col-3'>
					<h6> Shopping Options</h6>

					{/* 1 */}
					<div className='col-12 border-top border-bottom'>
						<a
							class='btn btndrop'
							data-toggle='collapse'
							href='#collapse1'
							role='button'
							aria-expanded='false'
							aria-controls='collapse1'
							style={{ border: 'none' }}>
							Category
						</a>
						<div class='collapse' id='collapse1'>
							<div>
								<ul>
									<li>Tank</li>
									<li>Hoodie</li>
								</ul>
							</div>
						</div>
					</div>

					{/* 2 */}
					<div className='col-12  border-top border-bottom'>
						<a
							class='btn btndrop'
							data-toggle='collapse'
							href='#collapse2'
							role='button'
							aria-expanded='false'
							aria-controls='collapse2'
							style={{ border: 'none' }}>
							Color
						</a>
						<div class='collapse' id='collapse2'>
							<div>
								<ul>
									<li>Tank</li>
									<li>Hoodie</li>
								</ul>
							</div>
						</div>
					</div>
					{/* 3 */}
					<div className='col-12 border-top border-bottom'>
						<a
							class='btn btndrop'
							data-toggle='collapse'
							href='#collapse3'
							role='button'
							aria-expanded='false'
							aria-controls='collapse3'
							style={{ border: 'none' }}>
							Style
						</a>
						<div class='collapse' id='collapse3'>
							<div>
								<ul>
									<li>Tank</li>
									<li>Hoodie</li>
								</ul>
							</div>
						</div>
					</div>
					{/* end */}
					<h6 className='pt-3'>Compare products</h6>
					<p>You have no items to compare.</p>
					<h6>My Wish List</h6>
					<p>You have no items in your wish list.</p>
				</div>
				{/* Left nav end*/}
				<div className='col'>
					<div className='row'>
						{/* card1 */}
						<div class='card border-0' style={{ width: '15rem' }}>
							<img
								class='card-img-top'
								src='./Imgs/cat/tank1.jpg'
								alt='Card  cap'
							/>
							<div class='card-body'>
								<h5 class='card-title'> Tank</h5>
								<p class='card-text'>$34.00</p>
								<div className='row'>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#fafafa' }}></button>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#dabdfc' }}></button>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#f0e3a8' }}></button>
								</div>
								<div className='row'>
									<button className='btn border'>XS</button>
									<button className='btn border'>S</button>
									<button className='btn border '>M</button>
									<button className='btn border '>L</button>
									<button className='btn border'>XL</button>
								</div>
								<button class='btn btn-primary'>Add to Cart</button>
								<i class='fas fa-heart px-3'></i>
								<i class='fas fa-chart-bar'></i>
							</div>
						</div>
						{/* card2 */}
						<div class='card border-0' style={{ width: '15rem' }}>
							<img
								class='card-img-top'
								src='./Imgs/cat/fitness1.jpg'
								alt='Card  cap'
							/>
							<div class='card-body'>
								<h5 class='card-title'> Fitness Tee</h5>
								<p class='card-text'>$24.00</p>
								<div className='row'>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#030302' }}></button>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#c28721' }}></button>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#c0c439' }}></button>
								</div>
								<div className='row'>
									<button className='btn border'>XS</button>
									<button className='btn border'>S</button>
									<button className='btn border '>M</button>
									<button className='btn border '>L</button>
									<button className='btn border'>XL</button>
								</div>
								<button class='btn btn-primary'>Add to Cart</button>
								<i class='fas fa-heart px-3'></i>
								<i class='fas fa-chart-bar'></i>
							</div>
						</div>
						{/* card3 */}
						<div class='card border-0' style={{ width: '15rem' }}>
							<img
								class='card-img-top'
								src='./Imgs/cat/endurance1.jpg'
								alt='Card  cap'
							/>
							<div class='card-body'>
								<h5 class='card-title'> Endurance Tee</h5>
								<p class='card-text'>$24.00</p>
								<div className='row'>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#0d0d0c' }}></button>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#41753b' }}></button>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#9eb028' }}></button>
								</div>
								<div className='row'>
									<button className='btn border'>XS</button>
									<button className='btn border'>S</button>
									<button className='btn border '>M</button>
									<button className='btn border '>L</button>
									<button className='btn border'>XL</button>
								</div>
								<button class='btn btn-primary'>Add to Cart</button>
								<i class='fas fa-heart px-3'></i>
								<i class='fas fa-chart-bar'></i>
							</div>
						</div>
						{/* card4 */}
						<div class='card border-0' style={{ width: '15rem' }}>
							<img
								class='card-img-top'
								src='./Imgs/cat/radiant1.jpg'
								alt='Card  cap'
							/>
							<div class='card-body'>
								<h5 class='card-title'> Radiant Tee</h5>
								<p class='card-text'>$22.00</p>
								<div className='row'>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#ed68af' }}></button>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#c389f0' }}></button>
									<button
										className='btn border p-3'
										style={{ backgroundColor: '#3bdbe3' }}></button>
								</div>
								<div className='row'>
									<button className='btn border'>XS</button>
									<button className='btn border'>S</button>
									<button className='btn border '>M</button>
									<button className='btn border '>L</button>
									<button className='btn border'>XL</button>
								</div>
								<button class='btn btn-primary'>Add to Cart</button>
								<i class='fas fa-heart px-3'></i>
								<i class='fas fa-chart-bar'></i>
							</div>
						</div>
						{/* end */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cat;
