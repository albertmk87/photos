import React from 'react';
import Button from '../Button/Button.js';
import classes from './EditForm.module.css';
import { FormFeedback, FormGroup, Input, Label, Form } from 'reactstrap';


const EditForm=(props)=>{  //edit form with the values storing with handle change to the appropriate state value
							//onBlur changing the touched value and invalid if the errors object is not empty(there is an error)		
	return (				//using reactstrap with formfeedback to show the error		
			
			  <div className={classes.Container}>
				<Form>
				<div>
					 <label htmlFor="fname">Author</label>
					 <Input 
					 className={classes.Input} type="text" name="author" placeholder={props.photoObj.author}
					  onChange={props.handleChange} onBlur={props.handleError("author")}
					  invalid={props.errors.author!==""} 
					  value={props.form.author}/>			
					   <FormFeedback>
					   {props.errors.author}
					  </FormFeedback>
					  </div>
					  <div>
					 <label htmlFor="title">Image title</label>
					 <Input className={classes.Input} type="text" 
					  invalid={props.errors.title!==""} 
					 name="title" placeholder={props.photoObj.title} onBlur={props.handleError("title")} onChange={props.handleChange} value={props.form.title} />
					 <FormFeedback>
					   {props.errors.title}
					  </FormFeedback>
					  </div>
					    <div>
					 <label htmlFor="photoUrl">Image url</label>
					 <Input  invalid={props.errors.imageUrl!==""}  className={classes.Input} type="text" name="imageUrl" placeholder={props.photoObj.url} onBlur={props.handleError("imageUrl")} onChange={props.handleChange} value={props.form.imageUrl} />
					  <FormFeedback>
					   {props.errors.imageUrl}
					  </FormFeedback>
					    </div>
					     <div>
					 	<Input type="textarea" name="text" invalid={props.errors.description!==""} onChange={props.handleChange} onBlur={props.handleError("description")} placeholder={props.photoObj.description} name="description" className={classes.Input} >
 					
						</Input>
					    <FormFeedback>
					   {props.errors.description}
					  </FormFeedback>
					   </div>
      						<Input disabled={props.btn} type="submit" value="Submit" onClick={props.saveEditChanges}/>
  			     </Form>
			  </div>


			)
}

export default EditForm;

