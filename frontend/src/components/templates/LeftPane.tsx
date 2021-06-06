import React from 'react';


const LeftPane: React.FC = (props) => {


    return (
        <div className='pane-left'>
            {props.children}
        </div>

    )
};
export { LeftPane};