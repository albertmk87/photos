import React from 'react';
import Button from '../Button/Button.js';
import classes from './AddForm.module.css';
import { FormFeedback, FormGroup, Input, Label, Form } from 'reactstrap';


const EditForm=(props)=>{     //similar to the edit form
	let btn=false;
		for(let key in props.errors){
			if(props.errors[key]!==""){
				btn=true;
			}
		}
	return (
			
			  <div className={classes.Container}>
				<Form>
				<div>
					 <label htmlFor="fname">Author</label>
					 <Input 
					 className={classes.Input} type="text" name="author" placeholder="Author"
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
					 name="title" placeholder="Title" onBlur={props.handleError("title")} onChange={props.handleChange} value={props.form.title} />
					 <FormFeedback>
					   {props.errors.title}
					  </FormFeedback>
					  </div>
					    <div>
					 <label htmlFor="photoUrl">Image url</label>
					 <Input  invalid={props.errors.imageUrl!==""}  className={classes.Input} type="text" name="imageUrl" placeholder="image url" onBlur={props.handleError("imageUrl")} onChange={props.handleChange} value={props.form.imageUrl} />
					  <FormFeedback>
					   {props.errors.imageUrl}
					  </FormFeedback>
					    </div>
					     <div>
					 	<Input type="textarea" name="text" invalid={props.errors.description!==""} onChange={props.handleChange} onBlur={props.handleError("description")} placeholder="description" name="description" className={classes.Input} >
 					
						</Input>
					    <FormFeedback>
					   {props.errors.description}
					  </FormFeedback>
					   </div>
      						<Input disabled={btn} type="submit" value="Submit" onClick={props.addNewPhoto}/>
  			     </Form>
			  </div>


			)
}

export default EditForm;

