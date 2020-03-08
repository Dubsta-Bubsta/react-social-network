import React from "react";
import s from './FormsControls.module.css';
import { Field } from 'redux-form';

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;

    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>

}

export const createField = (placeHolder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeHolder}
            name={name}
            component={component}
            validate={validators}
            {...props} /> {text}  
    </div>
)