import React from 'react';
import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	employees: Yup.array().of(
		Yup.object().shape({
			firstName: Yup.string().required(),
			lastName: Yup.string().required(),
			email: Yup.string().email().required(),
		})
	)
})

function Register(){
return(
<div>
<Formik initialValues={{
	employees: [{ firstName: '', lastName: '', email: '' }],
}}
validationSchema = {validationSchema}
onSubmit={(values)=>{console.log(values)}}
>
{
	(formik) => (
		<Form>
			<div className='form-group'>
				<h3>Add Multiple Employees</h3>
				<FieldArray name='employees' render={
					(arrayHelpers)=>{
						return(<div>
							{formik.values.employees.map((employee, index) => (
								<div className='mt-2' key={index}>
									{index > 0 && <div className='float-end'><button type='button' className='btn btn-danger' onClick={()=> arrayHelpers.remove(index)}>-</button></div>}
										<div className='card' style={{padding:5}}>
											<div className='card-title'>{`Employee ${index+1}`}</div>
											<div className='card-body'>
												<div className='form-group'>
													<label htmlFor={`employees.${index}.firstName`}>First name</label>
													<Field type='text' className='form-control' name={`employees.${index}.firstName`} id={`employees.${index}.firstName`}/>
													<ErrorMessage component='span' className='error' name={`employees.${index}.firstName`} />
												</div>
												<div className='form-group'>
													<label htmlFor={`employees.${index}.lastName`}>Last name</label>
													<Field type='text' className='form-control' name={`employees.${index}.lastName`} id={`employees.${index}.lastName`}/>
													<ErrorMessage component='span' className='error' name={`employees.${index}.lastName`} />
												</div>
												<div className='form-group'>
													<label htmlFor={`employees.${index}.email`}>Email</label>
													<Field type='email' className='form-control' name={`employees.${index}.email`} id={`employees.${index}.email`}/>
													<ErrorMessage component='span' className='error' name={`employees.${index}.email`} />
												</div>
											</div>
										</div>
								</div>
							))}
							<div className='form-group float-end mt-2'>
								<button type='button' className='btn btn-success' onClick={()=> arrayHelpers.insert(formik.values.employees.length + 1, { firstName: '', lastName: '', email: '' })}>+</button>
							</div>
							<br /><br /><br />
						</div>)
					}
				}
				/>
			</div>
			<div className='form-group float-end mt-2'>
				<button type='submit' className='btn btn-secondary'>Submit</button>
			</div>
		</Form>
	)
}
</Formik>
</div>
);
}
export default Register;