import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckBox, MySelect, MyTextInput } from '../components';


import '../styles/styles.css';


export const FormikAbstraction = () => {
    
 
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik 
        initialValues={{
          firstName: '',
          lastName : '',
          email    : '',
          terms    : false,
          jobType : '',
        }}
        onSubmit= { ( values ) => {
          console.log( values )
        }}
        validationSchema= { Yup.object({
            firstName: Yup.string()
                         .max(15, 'Debe de tener 15 cartacteres o menos')
                         .required('Requerido'),
            lastName: Yup.string()
                         .max(10, 'Debe de tener 10 cartacteres o menos')
                         .required('Requerido'),
            email: Yup.string()
                      .email('El correo no tiene formato valido')
                      .required('Requerido'),
            terms: Yup.boolean()
                      .oneOf([true], 'Debe de aceptar las condiciones'),
            jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Esta opción no es permitida')
                        .required('Requerido')
          })
      }>
        { (formik) => (
          <Form >
            <MyTextInput 
              label={"First Name"} 
              name={"firstName"}
              placeholder= 'Ingrese nombre' 
            />
          
            <MyTextInput 
              label={"Last Name"} 
              name={"lastName"}
              placeholder= 'Ingrese apellido' 
            />
          
            <MyTextInput 
              label={"Email Address"} 
              name={"email"}
              placeholder= 'Ingrese su correo' 
              type='email'
            />
     
            <MySelect label="Job Type" name="jobType">
              <option value="">Pick somethings</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckBox label= "Terms & Conditions" name= "terms" />
         
            <button type='submit' >Submit</button>
    
          </Form>
          )
        }
      </Formik>

     

    </div>
  )
}
