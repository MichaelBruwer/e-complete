import React from 'react';

const Header = () => {
	return (
		<div>
			{/* top nav */}
			<nav
				className='navbar navbar-light bg-secondary'
				style={{ color: 'white' }}>
				<span className='.d-none'></span>
				<span className='justify-content-end'>
					This is a demo store for testing purposes - no orders shall be
					fulfilled.
				</span>
			</nav>
			{/* Main nav */}
			<nav class='navbar navbar-expand-lg navbar-light '>
				<a class='navbar-brand' href='#!'>
					<div className='row pl-3'>
						<img
							src='/Imgs/Logo.jpg'
							alt='logo'
							style={{ height: '50px', width: '50px' }}
						/>
						<h1>Luma</h1>
					</div>
				</a>

				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul class='navbar-nav mr-auto'></ul>
					<form class='form-inline my-2 my-lg-0 '>
						<input
							class='form-control mr-sm-2'
							type='search'
							placeholder='Search entire store here...'
							aria-label='Search'
						/>
						<button class='btn  my-2 my-sm-0' type='submit'>
							<i class='fas fa-shopping-cart'></i>
						</button>
					</form>
				</div>
			</nav>
			{/* secondary nav */}
			<nav
				class='navbar navbar-expand-lg navbar-light'
				style={{ background: '#d3d9e0' }}>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNav'>
					<ul class='navbar-nav'>
						<li class='nav-item active'>
							<a class='nav-link' href='#!'>
								What's New
							</a>
						</li>
						<li class='nav-item active'>
							<a class='nav-link' href='#!'>
								Woman
							</a>
						</li>
						<li class='nav-item active'>
							<a class='nav-link' href='#!'>
								Men
							</a>
						</li>
						<li class='nav-item active'>
							<a class='nav-link' href='#!'>
								Gear
							</a>
						</li>
						<li class='nav-item active'>
							<a class='nav-link' href='#!'>
								Training
							</a>
						</li>
						<li class='nav-item active'>
							<a class='nav-link' href='#!'>
								Sale
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
