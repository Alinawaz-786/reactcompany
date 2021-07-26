import React from 'react';
// import ReactDOM from 'react-dom';

const Alert = (props) => {
    return (
            <div className={"alert alert-warning alert-dismissible fade " + props.show }role="alert">
                <strong>{props.type}!</strong> {props.message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>

                </button>
            </div>
    );
}

export default Alert;

