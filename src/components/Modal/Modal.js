import React from 'react';
import classes from './Modal.module.css';


class Modal extends React.Component{  //modal with a show props if show true modal is shown else modal isnot shown



	render(){
		return (
			
			 <div className={classes.Modal} style={{transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
													opacity:this.props.show ? '1' : '0'}}>
						  {this.props.children}
					     </div> 

				
			   )
	}
}


export default Modal;