import React from 'react';
import classes from './NavBar.module.css';


const NavBar=(props)=>{  //navbar with home and add photo buttons

	return (
			<div className={classes.TopNav}>
			  <a href="" onClick={(e)=>props.changeUrl(e,"home")} className="active">Home</a>
			  <a href="" onClick={(e)=>props.changeUrl(e,"addphoto")}>Add Photo</a>
			  
			</div>

			)
}

export default NavBar;













