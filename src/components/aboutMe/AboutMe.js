import React, { Fragment } from 'react';
import classes from './AboutMe.module.css';
//import cbc from '../../photos/CBC.svg';
import profilePic from '../../photos/profile.jpg';

const AboutMe = () => {
	return (
		<Fragment>
			<div className={classes.container}>
				<img src={profilePic} alt='' className={classes.responsiveImg} />
				<p className={classes.profile}>
					Claudina Baker has taught thousands of students ballet and liturgical
					dance professionally. She began dancing at the early age of six. At
					eighteen she authored her first book “Anointed to Dance”; which sold
					over 1,000 copies. Anointed to Dance, is a simple and clear devotional
					guide that will aide its audience in understanding the Liturgical
					Dance Ministry and its divine purpose. Claudina has performed/taught
					at prestigious events all over the U.S. In 2011, she performed a
					ballet pas de duex at the White House for President and First Lady
					Obama. She has taught over 5 years for the C.M.E Church Conferences,
					where she orchestrated over 200 liturgical dancers. She then became a
					ballet teacher at the Washington School of Ballet located in
					Washington D.C.. She is the director of Pearls of Anacostia Dancers. A
					nonprofit organization that gives back to young teens in the
					Washington D.C area. Her unique style of teaching earned her the title
					Ballet Master in Long Island, New York. A former graduate of Duke
					Ellington School of the Performing Arts; she studied dance at Long
					Island University. Claudina is Dance Director of Pearls Academy, an
					educator at the Living Water School, a well sought out Minister, and
					Instructor who has danced before thousands and inspired many.
				</p>
			</div>
		</Fragment>
	);
};

export default AboutMe;
