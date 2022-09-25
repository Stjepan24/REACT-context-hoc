import { useDebugValue } from 'react';
import AuthContext from '../../context/AuthContext';
import Welcome from '../Welcome/Welcome';
import style from './Auth.module.scss';
import Login from './Login/Login';
import Logout from './Logout/Logout';

const Auth = () => {

    const titleBlueStyle = `${style["title"]} ${style["title__blue"]}`;

    return (
        <>
            <AuthContext.Consumer>
                {
                    (value) => {

                        const {auth, name, login, logout} = value;

                        return (
                            <>
                                <h1 className={ titleBlueStyle }>
                                    <Welcome name={name} />
                                </h1>

                                {
                                    !auth && <Login login={login} />
                                }
                                {
                                    auth && <Logout logout={logout} />
                                }
                            </>
                        );
                    }
                }
            </AuthContext.Consumer>
        </>
    );
}

export default Auth;