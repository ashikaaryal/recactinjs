import React from 'react'
import { CiHome } from "react-icons/ci";
import {Link} from "react-router-dom"


const Navbar = () => {

	function handleclick(){
		alert("Button clicked");
	}
	

	return (
		<div className='nav'>
			<div className='logo'>LOGO </div>
			<div className='navlink'>
				<ul className='navlink'>
					<li>
						<Link href="/">
              <CiHome />Home</Link>
					</li>
					<li>
						<Link href="/About">About</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
					<li>
						<Link href="/movie">Movie</Link>
					</li>
					<li>
						<button onMouseOut={handleclick}>Click me</button>
					</li>
				</ul>
			</div>
		</div>
   
	);
};



export default Navbar;