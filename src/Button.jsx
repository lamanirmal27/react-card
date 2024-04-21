
function Button() {
    const handleClick = (e) => e.target.textContent = 'Nirmal';
    
    return(
      <button onClick={(e) => handleClick(e)}>Click Me</button>
    );
  }
  export default Button