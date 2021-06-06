import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '../inputs/TextField';
// import axios from 'axios'
import * as Joi from 'joi';

const LoginForm: React.FC = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState<ErrObj>({});

interface ErrObj {
    email?: string;
    password?: string;
}

const schema = Joi.object({
    email: Joi.string().required().label('Email address'),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).label('Password').min(8),
});
// const user = {
//     email,
//     password
// }


// Validates form properties and sets the Error state
const validateForm = () => {
    const errors: any= {email: '', password: ''};
    const options = {abortEarly: false}
    const { error } = schema.validate({email: email, password: password}, options );
    if (error) {
        for (let e of error.details) {
            errors[e.path[0]] = e.message;
        } 
        return errors;
    }
    return errors
    
}
const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(validateForm());
    // console.log(user);

};

    return (
        <div className='form pane-form'>
            <div className="side-by-side">
                <div className="cta-title">
                    <h2 className='heading heading-3'>Sign in</h2>
                </div>
                <div className="linkbox">
                    <p className='body'> Or <span className='link-text'><Link to='/signup'>Sign up</Link></span></p>
                </div>
                
            </div>

            <form onSubmit={handleSubmit}>
                <TextField 
                    name='email'
                    valueType='email'
                    valuePlaceholder='me@example.com'
                    valueLabel='Email address'
                    onChange={(e: any)=> setEmail(e.target.value)}
                    value={email}
                    className='med-textbox'
                    error={error.email}
                />
                <TextField 
                    name='password'
                    valueType='password'
                    valueLabel='Password'
                    onChange={(e: any)=> setPassword(e.target.value)}
                    value={password}
                    className='med-textbox'
                    error={error.password}
                />
                
               <input type="submit" value="Sign in" className='btn btn-primary btn-form' />
            </form>    


        </div>


    )
};
export { LoginForm};