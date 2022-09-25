import { useState } from "react";
import Auth from "./components/Auth/Auth";
import AuthContext from "./context/AuthContext";

const App = () => {

    const [auth, setAuth] = useState(false);
    const [name, setName] = useState("Guest");

    const login = () => {
        setAuth(true);
        setName("Pero");
    }

    const logout = () => {
        setAuth(false);
        setName("Guest");
    }

    const contextData = {
        auth: auth,
        name: name,
        login: login,
        logout: logout
    }

    return (
        <div className="container">
            <AuthContext.Provider value={contextData}>
                <Auth />
            </AuthContext.Provider>
        </div>
    );
}

export default App;

