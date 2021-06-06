import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '../inputs/TextField';

const SignupForm: React.FC = () => {

const [firstname, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState<ErrObj>({});

// const user = {
//     firstname,
//     lastName,
//     email,
//     password
// }
interface ErrObj {
    emailError?: string;
    passwordError?: string;
    firstnameError?: string;
    lastnameError?: string;
}
const validate = () => {

    const errors: ErrObj = {emailError: '', passwordError: ''};
    if (email.trim() === '') {
        errors.emailError = 'Email address is required'
    }
    if (password.trim() === '') {
        errors.passwordError = 'Password is required'
    }
    if (firstname.trim() === '') {
        errors.firstnameError = 'First name is required'
    }
    if (lastName.trim() === '') {
        errors.lastnameError = 'Last name is required'
    }
    return errors;
    
}
const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validate();
    setError(errors)
    if (errors.emailError !== '' || errors.passwordError !== '') {
        return; 
        // console.log(`${errors} this was called`)
    }
    // console.log(user);
};

    return (
        <div className='form pane-form'>
            <div className="side-by-side">
                <div className="cta-title">
                    <h2 className='heading heading-3'>Sign up</h2>
                </div>
                <div className="linkbox">
                    <p className='body'> Or <span className='link-text'><Link to='/signin'>Sign in</Link></span></p>
                </div>
                
            </div>

            <form onSubmit={handleSubmit}>
                <TextField 
                    name='firstname'
                    valueType='text'
                    valuePlaceholder='John'
                    valueLabel='First name'
                    onChange={(e: any)=> setFirstName(e.target.value)}
                    value={firstname}
                    className='med-textbox'
                    error={error.firstnameError}
                />
                <TextField 
                    name='firstname'
                    valueType='text'
                    valuePlaceholder='Doe'
                    valueLabel='Last name'
                    onChange={(e: any)=> setLastName(e.target.value)}
                    value={lastName}
                    className='med-textbox'
                    error={error.lastnameError}
                />
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
                <TextField 
                    name='password'
                    valueType='password'
                    valueLabel='Password'
                    onChange={(e: any)=> setPassword(e.target.value)}
                    value={password}
                    className='med-textbox'
                    error={error.passwordError}
                />
               <p className='body body-small'>Creating an account means that you’ve read and agreed to our <span className="link-text"><Link className='body-small' to='terms-of-service'>Terms of Service</Link> </span> and <span className="link-text"><Link className='body-small' to='/privacy'>Privacy policy. </Link></span></p> 
               <input type="submit" value="Sign up" className='btn btn-primary btn-form' />
            </form>    


        </div>


    )
};
export { SignupForm};