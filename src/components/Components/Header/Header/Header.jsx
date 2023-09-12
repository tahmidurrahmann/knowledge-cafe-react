import Profile from '../../../../assets/images/profile.png'
import './Header.css'
const Header = () => {

    return (
        <div className='profile-picture flex border-b-2 justify-between items-center my-8'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={Profile} alt="profile picture" />
        </div>
    );
};

export default Header;