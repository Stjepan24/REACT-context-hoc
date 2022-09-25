import React from "react";

const LogProps = (MyComponent) => {
    class NewComponent extends React.Component
    {
        componentDidMount()
        {
            console.log(this.props);
        }

        render()
        {
            return <MyComponent {...this.props} />
        }
    }

    return NewComponent;
}

export default LogProps;