import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '../inputs/TextField';

const ForgotPasswordForm: React.FC = () => {

const [email, setEmail] = useState('');
const [error, setError] = useState<ErrObj>({});

// const user = {
//     email
// }
interface ErrObj {
    emailError?: string;
}
const validate = () => {

    const errors: ErrObj = {emailError: ''};
    if (email.trim() === '') {
        errors.emailError = 'Email address is required'
    }
    return errors;
    
}
const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validate();
    setError(errors)
    if (errors.emailError !== '') {
        return; 
        // console.log(`${errors} this was called`)
    }
    // console.log(user);
};

    return (
        <div className='form pane-form'>
            <div className="side-by-side">
                <div className="cta-title">
                    <h2 className='heading heading-3'>Forgot password</h2>
                </div>
                <div className="linkbox">
                    <p className='body'> Remembered?  <span className='link-text'><Link to='/signin'>Sign in</Link></span></p>
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
                    error={error.emailError}
                />
                
               <input type="submit" value="Sign in" className='btn btn-primary btn-form' />
            </form>    


        </div>


    )
};
export { ForgotPasswordForm};