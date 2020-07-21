import React from 'react';
import classes from './Card.module.css';


const Card=(props)=>{ //a single card in the home dom to show all cards with only a photo and a name on hover

	return (
			
			<div onClick={props.selectPhoto} className={classes.Card}>

			<img src={props.thumbnailURL} className="gallery-image" alt="" />

		<div className={classes.Info}>

			<p>{props.title} </p>

		</div>

</div>
			


			)
}

export default Card;

