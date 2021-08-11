import {Link} from 'react-router-dom';

import HomeHeader from "./HomeHeader";
import Decoration from '../assets/Decoration.svg';

const Login = () => {
    const lgtBorder = (e) => {
        e.target.style.border = `1px #3c3c3c solid`;
    };

    const extBorder = (e)=> {
        e.target.style.borderColor = 'transparent'
    }

    return (
        <>
            <HomeHeader/>
            <div className='user-form'>
                <h1>Zaloguj się</h1>
                <img src ={Decoration} alt ='decoration'/>
                <div className ='login-data'>
                    <label>Email</label>
                    <input type='email'/>
                    <label>Hasło</label>
                    <input type='password'/>
                </div>
                <div className ='btns'>
                    <Link to ='/register' onMouseEnter={lgtBorder} onMouseLeave={extBorder}>Załóż konto</Link>
                    <Link to ='/login' onMouseEnter={lgtBorder} onMouseLeave={extBorder}>Zaloguj się</Link>
                </div>
            </div>
        </>
    )
};

export default Login;