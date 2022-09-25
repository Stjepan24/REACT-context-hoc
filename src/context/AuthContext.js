import React from "react";

const AuthContext = React.createContext({
    auth: null,
    name: null,
    login: () => {},
    logout: () => {}
});

export default AuthContext;