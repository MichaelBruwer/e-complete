import React from 'react';
import './css/Home.css';

const Home = () => {
	return (
		<div className='container'>
			<div className=' pt-3'>
				<div className=' beach pt-3'>
					<div className='newluma overflow-auto mr-5'>
						<div>
							<span className='d-block '>New Luma Yoga Collection</span>
							<strong className='d-block'>
								Get fit and look fab in new
								<br /> seasonal styles
							</strong>
							<button className='btn btn-primary d-block'>Shop New Yoga</button>
						</div>
					</div>
				</div>
				{/* grid container start */}
				<div className='container imgcontainer pt-3'>
					<div class='item item1' align='left'>
						<div>
							<h1 className='d-block '>20% OFF</h1>
							<span className='d-block '>Luma pants when you shop today*</span>
							<a className='d-block ' href='#!'>
								Shop pants{' '}
							</a>
						</div>
					</div>
					<div class='item item2 ' align='right'>
						<div class='itemalign'>
							<h1 className='d-block '>
								Even more ways <br /> to mix and match
							</h1>
							<span className='d-block '>
								Buy 3 Luma tees get a 4th
								<br /> free
							</span>
							<a className='d-block ' href='#!'>
								Shop Tees{' '}
							</a>
						</div>
					</div>
					<div class='item item3' align='right'>
						<div>
							<h1 className='d-block '>Take it from Erin</h1>
							<span className='d-block '>
								Luma founder Erin Renny shares her favorites
							</span>
							<a className='d-block ' href='#!'>
								Shop Erin Recommends{' '}
							</a>
						</div>
					</div>
					<div class='item item4' align='center'>
						<div class='itemtextalign'>
							<h1 className='d-block '>Science meets performance</h1>
							<span className='d-block '>
								Wicking to raingear, Luma covers you
							</span>
							<a className='d-block ' href='#!'>
								Shop Performance{' '}
							</a>
						</div>
					</div>
					<div class='item item5 ' align='right'>
						<div class='itemtextalign'>
							<h1 className='d-block '>Twice around, twice as nice</h1>
							<span className='d-block '>
								Find conscientious,comfy clothing in our eco-friendly colection
							</span>
							<a className='d-block ' href='#!'>
								Shop Eco-Friendly{' '}
							</a>
						</div>
					</div>
				</div>
				{/* hot seller start */}
				<div className='container'>
					<div className='row'>
						<div className='col-12 d-flex justify-content-center'>
							<h1>Hot Sellers</h1>
						</div>
						<div className='col-12 d-flex justify-content-center'>
							<p>Here is what's trending on luma right now</p>
						</div>
					</div>
					{/* cards */}
					<div className='row'>
						<div class='card' style={{ width: '18rem' }}>
							<img class='card-img-top' src='#!' alt='Card  cap' />
							<div class='card-body'>
								<h5 class='card-title'> fantastic backpack</h5>
								<p class='card-text'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<button class='btn btn-primary'>Add to Cart</button>
								<i class='fas fa-heart px-3'></i>
								<i class='fas fa-chart-bar'></i>
							</div>
						</div>
						{/* card 2 */}
						<div class='card' style={{ width: '18rem' }}>
							<img class='card-img-top' src='#!' alt='Card  cap' />
							<div class='card-body'>
								<h5 class='card-title'>great bag</h5>
								<p class='card-text'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<button class='btn btn-primary'>Add to Cart</button>
								<i class='fas fa-heart px-3'></i>
								<i class='fas fa-chart-bar'></i>
							</div>
						</div>
						{/* card3 */}
						<div class='card' style={{ width: '18rem' }}>
							<img class='card-img-top' src='#!' alt='Card  cap' />
							<div class='card-body'>
								<h5 class='card-title'>Training video</h5>
								<p class='card-text'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<button class='btn btn-primary'>Add to Cart</button>
								<i class='fas fa-heart px-3'></i>
								<i class='fas fa-chart-bar'></i>
							</div>
						</div>
						{/* card4 */}
						<div class='card' style={{ width: '18rem' }}>
							<img class='card-img-top' src='#!' alt='Card  cap' />
							<div class='card-body'>
								<h5 class='card-title'>Best Hoodie</h5>
								<p class='card-text'>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<button class='btn btn-primary'>Add to Cart</button>
								<i class='fas fa-heart px-3'></i>
								<i class='fas fa-chart-bar'></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
