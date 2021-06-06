

import React, {useState} from 'react';
import { Button } from './../inputs/Button'
import cross from './../../assets/icons/cross.svg'

interface CardProps {
    title: String,

}

const DeleteBox: React.FC<CardProps>  = ({ 
    title ='',
    ...props
 
}) => {
    const [ showState, setShowState] = useState(false);
    const closeModal = () => {
        setShowState(!showState);
    }

    return (
        <div className={showState? 'modal-hide modal' : 'modal'}>
            <div className='card modal-card'>
                <div className="side-by-side">
                <h3 className='heading heading-4'>{`Delete ${title}`} </h3>
                <div className='modal-exit' onClick={closeModal}><img src={cross} alt="exit" /></div>
                </div>
                
                <p className='body-small'>Are you sure you want to delete?</p>
                <div className="side-by-side">
                    <Button title='Yes, Delete now' buttonType='warning' />
                    <Button title='No, Changed my mind' buttonType='comp' onclick={closeModal}/>
                </div>


            </div>
        </div>

    )
};
export { DeleteBox };