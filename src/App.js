import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import RegisterForm from './components/registerForm/RegisterForm';
import children from './photos/children.jpg';
import group from './photos/group.jpg';
import little from './photos/littleone.jpg';
import flyer from './photos/ClaudinaMasterClass_Jan2023.svg';
import ContactMe from './components/contactMe/ContactMe';

function App() {
	return (
		<div className='App'>
			<h1 className='App-Welcome'>Claudina's Ballet Classes</h1>
			<div className='container'>
				<img src={children} alt='' className='responsiveImg' />
				<img src={group} alt='' className='responsiveImg' />
				<img src={little} alt='' className='responsiveImg' />
			</div>
			<h1 className='App-Welcome'>Register Now!</h1>
			<RegisterForm />
			<img src={flyer} alt='' className='balletFlyer' />
			<h1 className='App-Welcome'>About the Director</h1>
			<AboutMe />
			<h1 className='App-Welcome'>Questions Contact</h1>
			<ContactMe />
		</div>
	);
}

export default App;
