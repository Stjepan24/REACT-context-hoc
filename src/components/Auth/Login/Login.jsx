const Login = ({login}) => {
    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={login}
        >
            Login
        </button>
    );
}

export default Login;