import React from 'react';


const RightPane: React.FC = (props) => {


    return (
        <div className='pane-right'>
            {props.children}
        </div>

    )
};
export { RightPane};