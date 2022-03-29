import React from 'react';
import {Form, FormControl, InputGroup} from "react-bootstrap";


type onChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

interface Props{
    label:string,
    type:string,
    id:string
    min?:number,
    addOn?:string,
    placeholder?:string,
    onChange:onChange
}

function Input(props:Props) {
    return (
        <>
            <Form.Label htmlFor={props.id}>{props.label}</Form.Label>
            <InputGroup className="mb-3">
                {
                    props.addOn && <InputGroup.Text>{props.addOn}</InputGroup.Text>
                }
                <FormControl required
                             type={props.type}
                             min={props.min??''}
                             placeholder={props.placeholder??''}
                             onChange={props.onChange}
                             id={props.id} />
            </InputGroup>
        </>
    );
}

export default Input;