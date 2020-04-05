import React, { FC } from 'react';
import s from '../common/FormControls/FormsControls.module.css';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Input, createField } from '../common/FormControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';
import { AppStateType } from '../../redux/redux-store';


type LoginFormOwnProps = {
	captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<LoginFormPropertiesType>("Email", "email", [required], Input)}
            {createField<LoginFormPropertiesType>("Password", "password", [required], Input, { type: "password" })}
            {createField<LoginFormPropertiesType>(undefined, "rememberMe", [], Input, { type: "checkbox" }, "Remember me")}
           
            {props.captchaUrl &&
                <div>
                <img src={props.captchaUrl} />
                { createField<LoginFormPropertiesType>("Captcha symbols", "captcha", [], Input)}
                </div>}

            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

type MapStatePropsType = {
	captchaUrl: string | null
	isAuth: boolean | null
}
type MapDispatchPropsType = {
	login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
export type LoginFormValuesType = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}
type LoginFormPropertiesType = Extract<keyof LoginFormValuesType, string>;



const Login:FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);

    }

    if (props.isAuth) return < Redirect to={"/profile"} />
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>

    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login);