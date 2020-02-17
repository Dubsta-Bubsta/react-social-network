import React from 'react';
import s from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControls/FormsControls';
import { required } from '../../utils/validators/validators';

// import Paginator from '../common/Paginator/Paginator';

const LoginForm = (props) => {    
    debugger
    return (
        
        <form onSubmit={props.handleSubmit}>
                <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {    
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>

    )
}

export default Login;