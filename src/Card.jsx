import profilePic from './assets/luffy.jpg'
function Card() {
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Mero photo"></img>
            <h2 className='card-title'>Monkey D. Luffy</h2>
            <p className='card-text'>I am gonna be a Pirate King!!</p>
        </div>
    );
}

export default Card