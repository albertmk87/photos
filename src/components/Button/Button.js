import React from 'react';
import classes from './Button.module.css';

const Button=(props)=>{  //a button component added in the form
	return (
		
			<button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={(e)=>props.clicked(e)}>
				{props.children}
			</button>		

	
			)

}

export default Button;