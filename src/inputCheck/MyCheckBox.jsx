import React from "react";
import { useField } from "formik";
import styled from 'styled-components';


const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField( { ...props, type:'checkbox' });
    
    return (
        <Wrapper>
            <Label className="checkbox-input">
                <Input type="checkbox" {...field} {...props} />
                {children}
            </Label>
            {meta.touched && meta.error ? (
                <Error>{meta.error}</Error>
                ) : null}
        </Wrapper>
    );
}
export default MyCheckbox;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0.2rem;
`;
const Label = styled.label`
font-size: 1rem;
color: #ccc;
text-align: left;
padding-bottom: 0.5rem;
`;
const Input = styled.input`
height: 1.2rem;
border-radius: 5px;
border: 1px solid #ccc;
padding-right: 0.5rem;
cursor: pointer;
`;
const Error = styled.div`
color: red;
font-size: 0.8rem;
text-align: left;
margin-top: 0.25rem;
`;