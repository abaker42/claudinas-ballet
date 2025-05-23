import React from "react";
import "../../App.css";
import AboutMe from "../../components/aboutMe/AboutMe";
import RegisterForm from "../../components/registerForm/RegisterForm";
import children from "../../photos/children.jpg";
import group from "../../photos/group.jpg";
import little from "../../photos/littleone.jpg";
import flyer from "../../photos/Claudina AdltClass_feb.svg";
import ContactMe from "../../components/contactMe/ContactMe";
import BookSale from "../../components/bookSale/bookSale";

const Home = () => {
	return (
		<>
			<h1 className='App-Welcome'>Pre-order Now!</h1>
			<BookSale />
			<h1 className='App-Welcome'>Claudina's Ballet Classes</h1>
			<div className='container'>
				<img src={children} alt='kids ballet class' className='responsiveImg' />
				<img
					src={group}
					alt='group adult ballet class'
					className='responsiveImg'
				/>
				<img
					src={little}
					alt='children train ballet dance'
					className='responsiveImg'
				/>
			</div>
			<h1 className='App-Welcome'>Register Now!</h1>
			<p>Payments via cash or cashapp: $claudinapearl</p>
			<RegisterForm />
			<BookSale />
			<img src={flyer} alt='' className='balletFlyer' />
			<h1 className='App-Welcome'>About the Director</h1>
			<AboutMe />
			<h1 className='App-Welcome'>Questions Contact</h1>
			<ContactMe />
		</>
	);
};

export default Home;
