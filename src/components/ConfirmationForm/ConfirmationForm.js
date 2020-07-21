import React from 'react';

import classes from './ConfirmationForm.module.css';
import Button from '../Button/Button.js';

const ConfirmationForm=(props)=>{  //confirmation form inside of the modal showing if the photo should be deleted
	return (
			
			 
			    <div className={classes.Container}>
			      <h1>Delete photo</h1>
			      <p className={classes.Red}>Are you sure you want to delete the photo?</p>
			    
			      <div>
			        <Button clicked={props.toggleModal} btnType="GoBack">Cancel</Button>
			        <Button clicked={props.deletePhoto} btnType="Delete">Delete</Button>
			      </div>
</div>


			)
}

export default ConfirmationForm;

