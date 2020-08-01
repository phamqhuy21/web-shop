import React from 'react';

function index(props) {
    const { title } = props;
    return (
        <React.Fragment>
            <p>{title}</p>
        </React.Fragment>
    );
}

export default index;
