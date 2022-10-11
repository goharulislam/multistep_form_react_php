/* github.com/Hacker0x01/react-datepicker/ */

import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TimePicker(props){
    const {label, name, ...rest} = props;
    return(
        <div className='fc'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const {setFieldValue} = form;
                        const {value} = field;
                        return(
                            <DateView id={name} {...field} {...rest} selected={value} onChange={val => setFieldValue(name, val)} showTimeSelect showTimeSelectOnly timeIntervals={1} dateFormat="h:mm aa" />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default TimePicker;