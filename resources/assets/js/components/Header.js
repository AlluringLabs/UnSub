import React from 'react';

import Authentication from './Authentication';

const Header = (props) => {
	return (
		<header className="header">
			<nav className="nav navbar">
				<a href="#"></a>
			</nav>
			
			<Authentication />
		</header>
	);
};

export default Header;