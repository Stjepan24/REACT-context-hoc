import LogProps from "../../hoc/LogProps";

const Welcome = ({name}) => {
    return (
        <>
            Welcome {name}
        </> 
    );
}

export default LogProps(Welcome);