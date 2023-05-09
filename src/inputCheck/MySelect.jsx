import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';


const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);  

    
    return (
      <Wrapper>
        <Label htmlFor={props.id || props.name}>{label}</Label>
        <Select {...field} {...props} />
        {meta.touched && meta.error ? (
          <Error className="error">{meta.error}</Error>
          ) : null}
      </Wrapper>
    );
   };
  export default MySelect;
  
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.2rem;
    text-aling: left;
    `;
  const Label = styled.label`
     font-size: 1rem;
     color: #ccc;
     text-align: left;
     padding-bottom: 0.5rem;
     `;
  const Select = styled.select`
     height: 1.2rem;
     width: 300px;
     border-radius: 5px;
     border: 1px solid #ccc;
     color: #ccc;
     `;
  const Error = styled.div`
     color: red;
     font-size: 0.8rem;
     text-align: left;
     margin-top: 0.25rem;
     `;