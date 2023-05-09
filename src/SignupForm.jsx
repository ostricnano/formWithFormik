import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyCheckbox from './inputCheck/MyCheckBox';
import MyTextInput from './inputCheck/MyTextInput';
import MySelect from './inputCheck/MySelect';
import styled from 'styled-components';


const SignupForm = () => {
    
    return (
        <>
        <Title>Subscribe!</Title>
        <Formik
            initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            acceptedTerms: false, // added for our checkbox
            jobType: '', // added for our select
        }}  
            validationSchema={Yup.object({
                firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
                lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
                email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            acceptedTerms: Yup.boolean()
                .required('Required')
                .oneOf([true], 'You must accept the terms and conditions.'),
            jobType: Yup.string()
                .oneOf(
                    ['designer', 'development', 'product', 'other'],
                'Invalid Job Type'
                )
                .required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm();
            }, 400);
        }
        }
        >   
            <StyledForm>
                <MyTextInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                    />
                <MyTextInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    />
                <MyTextInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Doe"
                    />
                <MySelect label="Job Type" name="jobType">
                    <option value="">Select a job type</option>
                    <option value="designer">Designer</option>
                    <option value="development">Developer</option>
                    <option value="product">Product Manager</option>
                    <option value="other">Other</option>
                </MySelect>
                <MyCheckbox name="acceptedTerms">
                    I accept the terms and conditions
                </MyCheckbox>
                <StyledButton type="submit">Submit</StyledButton>
            </StyledForm>
        </Formik>
        </>
    );
    }
    export default SignupForm;
    
    const Title = styled.h1`
        font-size: 1.5em;
        font-weight: 400;
        text-align: center;
        color: palevioletred;
        letter-spacing: 0.1em;
        `;
    
    const StyledButton = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 300px;
        border-radius: 5px;
        border: 1px solid #ccc;
        `;
    const StyledForm = styled(Form)`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        `;
    
    
    