import { useState } from "react";
import "./App.css";

import Modal from "./components/modal/Modal";
import Backdrop from "./components/modal/Backdrop";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe";
import BookSale from "./components/bookSale/bookSale";
import PageNotFound from "./components/pageNotFound/PageNotFound";


function App() {
	const [showIntro, setShowIntro] = useState(true);
	setTimeout(() => setShowIntro(false), 2000);
	return (
		<div className='App'>
			<Modal show={showIntro} />
			<Backdrop show={showIntro} />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='about-me' element={<AboutMe />} />
				<Route exact path='books' element={<BookSale />} />
				<Route path='*' element={<PageNotFound />}/>
			</Routes>
		</div>
	);
}

export default App;
