import React from "react";

const withGrid = (WrappedComponent) => {
    return(props) => {
        return(
            <WrappedComponent {...props} />
        )
    }
}

export default withGrid