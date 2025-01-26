import React from 'react'

const Header = () => {
	return(
		<header style={styles.header}>
			<nav style={styles.nav}>
				<a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contact</a>
			</nav>
		</header>
	)
}
const styles ={
	header:{
		backgroundColor: "#282c34",
		padding:'10px 20px',
		margin:0,
	},
	nav:{
		display:'flex',
		justifyContent:'space-around'
	},
	link:{
		color:"white",
		textDecoration:'none',
		fontSize:'18px'
	}
	
};
export default Header;