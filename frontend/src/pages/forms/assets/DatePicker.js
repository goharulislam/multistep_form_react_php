/*github.com/Hacker0x01/react-datepicker*/
import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker(props){
    const {label, name, ...rest} = props;
    return(
        <div className='fc'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const {setFieldValue} = form;
                        const {value} = field;
                        
                        const formatUTC = (dateInt, addOffset = false) => {
                            let date = (!dateInt || dateInt.length < 1) ? new Date : new Date(dateInt);
                            if (typeof dateInt === "string") {
                                //return date;
                                return setFieldValue(name, date);
                            } else {
                                const offset = addOffset ? date.getTimezoneOffset() : -(date.getTimezoneOffset());
                                const offsetDate = new Date();
                                offsetDate.setTime(date.getTime() + offset * 60000)
                                //return offsetDate;
                                return setFieldValue(name, offsetDate);
                            }
                        }
                        
                        return(
                            <DateView id={name} {...field} {...rest} selected={value} onChange={val => formatUTC(val)} dateFormat="dd/MM/yyyy" />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default DatePicker;