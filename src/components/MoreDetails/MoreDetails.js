import React from 'react';
import Button from '../Button/Button.js';
import classes from './MoreDetails.module.css';




const MoreDetails=(props)=>{  //the more details showing more details about the photo passed through the state(the api)
									//bigger image is shown and the title description author..	


	return (
			
			  <div className={classes.wholeCard}>
  				<img src={props.photoObj.url}/>
 			 <div className={classes.container}>
 			 <p>Published by: <strong>{props.photoObj.author}</strong></p>
  			<h3>{props.photoObj.title}</h3>
  			<p>{props.photoObj.description} </p>
  			<Button clicked={(e)=>props.changeUrl(e,"home")} btnType="GoBack">Back</Button>
  			<Button clicked={(e)=>props.editPhoto(e)} btnType="Edit">Edit</Button>
  			<Button clicked={(e)=>props.openModal(e)} btnType="Delete">Delete</Button>

  			</div>
				</div>


			)
}

export default MoreDetails;

