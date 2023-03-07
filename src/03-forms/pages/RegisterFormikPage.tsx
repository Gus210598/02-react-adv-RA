import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    
    return (
        <div>
            <h1>Register Formik Page</h1>
        <Formik 
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: '',
                
            }}
            onSubmit= { ( values ) => {
                console.log( values )
            }}
            validationSchema= { Yup.object({
                name: Yup.string()
                .min(2, 'Debe de tener mínimo 2 cartacteres o más')
                .max(15, 'Debe de tener 15 cartacteres o menos')
                .required('Requerido'),
                email: Yup.string()
                .email('El correo no tiene formato valido')
                .required('Requerido'),
                password1: Yup.string()
                .min(6, 'Debe de tener mínimo 6 cartacteres o más')
                .required('Requerido'),
                password2: Yup.string()
                .oneOf( [ Yup.ref('password1') ], 'Las contraseñas no son iguales' )
                .required('Requerido'),
            })
        }>
        { ( { handleReset } ) => (
            <Form >
                <MyTextInput 
                label={"Name"} 
                name={"name"}
                placeholder= 'Ingrese nombre' 
                />
                                       
                <MyTextInput 
                label={"Email Address"} 
                name={"email"}
                placeholder= 'Ingrese su correo' 
                type='email'
                />
                                       
                <MyTextInput 
                label={"Password"} 
                name={"password1"}
                placeholder= 'Ingrese su clave' 
                type='password'
                />
                                       
                <MyTextInput 
                label={"Repeat Password"} 
                name={"password2"}
                placeholder= 'Repita su clave' 
                type='password'
                />
    
                <button type="submit">Create</button>
                <button type="button" onClick={ handleReset } >Reset Form</button>
            </Form>
          )
        }
      </Formik>

    </div>
  )
}
