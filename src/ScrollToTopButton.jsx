import { useEffect, useState } from 'react'

const ScrollToTopButton =()=>{
	const [isVisible,setIsVisible] = useState(false);
	const handleScroll = () => {
		if(window.scrollY > 300){
			setIsVisible(true);
		}else{
			setIsVisible(false)
		}
	}
	const scrollToTop=()=>{
		window.scrollTo({
			top:0,
			behavior:'smooth'
		});
	}
	useEffect(()=>{
		window.addEventListener('scroll',handleScroll);
		return()=>{
			window.removeEventListener('scroll',handleScroll)
		}
	},[]);
	const styles = {
		button:{
			position:'fixed',
			bottom:'20px',
			right:'20px',
			width:'50px',
			height:'50px',
			backgroundColor:'#282c34',
			color:'white',
			borderRadius:'50%',
			fontSize:'20px',
			cursor:'pointer',
			boxShadow:'0 4px 8px rgba(0,0,0,0.2)',
			display:'flex',
			justifyContent:'center',
			alignItems:'center'
		}
	};
	return(
		isVisible &&(
			<button className="scroll-to-top" onClick={scrollToTop} style={styles.button}>↑</button>
		)
	)
};
export default ScrollToTopButton;