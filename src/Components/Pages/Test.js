import React from 'react';

const Test = () => {
	return (
		<div class='row'>
			<div class='col-6 text-right'>
				<a
					class='btn btn-primary mb-3 mr-1'
					href='#carouselExampleIndicators2'
					role='button'
					data-slide='prev'>
					<i class='fa fa-arrow-left'></i>
				</a>
				<a
					class='btn btn-primary mb-3 '
					href='#carouselExampleIndicators2'
					role='button'
					data-slide='next'>
					<i class='fa fa-arrow-right'></i>
				</a>
			</div>
			<div class='col-12'>
				<div
					id='carouselExampleIndicators2'
					class='carousel slide'
					data-ride='carousel'>
					<div class='carousel-inner'>
						<div class='carousel-item active'>
							<div class='row'>
								<div class='col-md-4 mb-3'>
									<div class='card border-0' style={{ width: '18rem' }}>
										<img
											class='card-img-top'
											src='./Imgs/backpack.jpg'
											alt='Card  cap'
										/>
										<div class='card-body'>
											<h5 class='card-title'> fantastic backpack</h5>
											<p class='card-text'>
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</p>
											<button class='btn btn-primary'>Add to Cart</button>
											<i class='fas fa-heart px-3'></i>
											<i class='fas fa-chart-bar'></i>
										</div>
									</div>
								</div>
								<div class='col-md-4 mb-3'>
									<div class='card border-0' style={{ width: '18rem' }}>
										<img
											class='card-img-top'
											src='./Imgs/bag.jpg'
											alt='Card  cap'
										/>
										<div class='card-body'>
											<h5 class='card-title'>great bag</h5>
											<p class='card-text'>
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</p>
											<button class='btn btn-primary'>Add to Cart</button>
											<i class='fas fa-heart px-3'></i>
											<i class='fas fa-chart-bar'></i>
										</div>
									</div>
								</div>
								<div class='col-md-4 mb-3'>
									<div class='card border-0' style={{ width: '15rem' }}>
										<img
											class='card-img-top'
											src='./Imgs/fitness.jpg'
											alt='Card  cap'
										/>
										<div class='card-body'>
											<h5 class='card-title'>Training video</h5>
											<p class='card-text'>
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</p>
											<button class='btn btn-primary'>Add to Cart</button>
											<i class='fas fa-heart px-3'></i>
											<i class='fas fa-chart-bar'></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='carousel-item'>
							<div class='row'>
								<div class='col-md-4 mb-3'>
									<div class='card border-0' style={{ width: '18rem' }}>
										<img
											class='card-img-top'
											src='./Imgs/hoodie.png'
											alt='Card  cap'
										/>
										<div class='card-body'>
											<h5 class='card-title'>Best Hoodie</h5>
											<p class='card-text'>
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
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
				</div>
			</div>
		</div>
	);
};

export default Test;
