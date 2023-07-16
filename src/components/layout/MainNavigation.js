import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import cbc from '../../photos/CBC.svg';
import classes from './MainNavigation.module.css';

const active = (dat) => (dat.isActive ? classes.active : '');
const MainNavigation = () => {
	return (
		<Fragment>
			<header className={classes.header}>
				<div className={classes.logo}>
					<img src={cbc} alt='' />
				</div>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink to='/' className={active}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='about-me' className={active}>
								About Me
							</NavLink>
						</li>
						<li>
							<NavLink to='books' className={active}>
								Books
							</NavLink>
						</li>
						<li>
							<NavLink to='appointments' className={active}>
								Appointments
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</Fragment>
	);
};

export default MainNavigation;
