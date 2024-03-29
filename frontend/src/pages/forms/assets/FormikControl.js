import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import RadioButtons from './RadioButtons';
import CheckboxToggleSwitch from './CheckboxToggleSwitch';
import CheckboxGroup from './CheckboxGroup';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import FileUpload from './FileUpload';

function FormikControl(props){
    const  {control, ...rest} = props;
    switch(control){
        case 'input':
            return <Input {...rest} />;
        case 'textarea':
            return <Textarea {...rest} />;
        case 'select':
            return <Select {...rest} />;
        case 'radio':
            return <RadioButtons {...rest} />;
        case 'checkboxgroup':
            return <CheckboxGroup {...rest} />;
        case 'checkbox_toggle_switch':
            return <CheckboxToggleSwitch {...rest} />;
        case 'date':
            return <DatePicker {...rest} />;
        case 'time':
            return <TimePicker {...rest} />;
        case 'file':
            return <FileUpload { ...rest} />;
        default:
            return null;
    }
}

export default FormikControl