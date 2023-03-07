import { ErrorMessage, useField } from "formik";

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any
}

export const MyTextInput = ( { label, ...props }: Props ) => {

    // const [ field, meta ] = useField( props )
    const [ field ] = useField( props )
   
  return (
    <>
        <label htmlFor={ props.id || props.name }>{ label }</label>
        <input className="text-input" {...field} { ...props } />
        
        {/* 
            <ErrorMessage name={ props.name } component="span"/> 
            aca se pueden poner más cosas personalizables como el 
            className="etc etc"
        */}
        
        <ErrorMessage name={ props.name } component="span"/>

        {/* 
            Esta es la otra forma de hacerlo pero ocupando meta 
            en caso de requerirlo 
        */}
        {/* {
            meta.touched && meta.error && (
                <span className="error">{ meta.error }</span>
            )
        } */}
    </>
  )
}
