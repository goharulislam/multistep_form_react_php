import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik, Form, FieldArray} from 'formik';
import FormikControl from './assets/FormikControl';
import * as Yup from 'yup';
import axios from '../../axios/index';

function FormHouseKeepers(){
const navigate = useNavigate();
let formData = new FormData();
const [data, setData] = useState({
	title: '',
	first_name: '',
	last_name: '',
	phone: '',
	email: '',
	address_home: '',
	postal_code: '',
	work_sought: '',
	date_birth: '',
	ni: '',
	hotel: '',
	eligible_uk: '',
	permit_expiry: '',
	passport: false,
	passport_expiry: '',
	bank_name: '',
	bank_account_number: '',
	sort_code: '',
	emergency_contact_name: '',
	emergency_contact_relation: '',
	emergency_contact_number: '',
	emergency_contact_address: '',
	employment_history: [
		{
			company_name: '',
			company_phone: '',
			company_email: '',
			company_start_date: '',
			company_finish_date: '',
		},
	],
	crime: false,
	crime_date: '',
	crime_detail: '',
	name2: '',
	sign2: '',
	date2: '',
	diabetes: false,
	epilepsy: false,
	blackouts: false,
	breath: false,
	moving: false,
	looking: false,
	outdoor: false,
	enclosed: false,
	head_height: false,
	eyesight: false,
	lifting: false,
	accident: false,
	back: false,
	feet: false,
	hernia: false,
	bp: false,
	heart: false,
	hearing: false,
	dizziness: false,
	drugs: false,
	alcohol: false,
	alergies: false,
	pregnant: false,
	sign3: '',
	name3: '',
	date3: '',
	terms_conditions: false,
	name4: '',
	sign4: '',
	date4: '',
});

const [currentStep, setCurrentStep] = useState(0);
const [errors, setErrors] = useState({});

function formatDate(date){
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const makeRequest = (newData) => {
//console.log('form submitted', newData);
document.getElementById("whereToPrint").innerHTML = JSON.stringify(newData, null, 4);

Object.keys(newData).forEach(fieldName => {
	if(fieldName === 'date_birth' || fieldName === 'sia_badge_expiry' || fieldName === 'bank_statement_date'){
		let d1 = formatDate(newData[fieldName]);
		formData.append(fieldName, d1);
	} else if (fieldName === 'employment_history' || fieldName === 'address_history' || fieldName === 'self_employment' || fieldName === 'gaps_employment'){
		formData.append(fieldName, JSON.stringify(newData[fieldName]));
	} else {
		//console.log(fieldName, newData[fieldName]);
		formData.append(fieldName, newData[fieldName]);
	}

});

//document.getElementById("whereToPrint").innerHTML = JSON.stringify(formData, null, 4);
/*
	// V IMP CODE
	for(var pair of formData.entries()){
	console.log(pair[0]+ ', ' + pair[1]); 
}
*/

axios.post('api_forms.php', formData);
}

const handleNextStep = (newData, final = false) => {
	window.scrollTo(0,0);
	setData((prev) => ({...prev, ...newData}));
	if(final){
		makeRequest(newData)
		return
	}
	setCurrentStep((prev) => prev + 1);
};

const handlePrevStep = (newData) => {
	window.scrollTo(0,0);
	setData((prev) => ({...prev, ...newData}));
	setCurrentStep((prev) => prev - 1);
};

const steps = [
				<StepOne next={handleNextStep} data={data} errors={errors} />,
				<StepTwo next={handleNextStep} prev={handlePrevStep} data={data} errors={errors} />,
				<StepThree next={handleNextStep} prev={handlePrevStep} data={data} errors={errors} />,
			]

return(
	<section className='steps steps2'>
		<h3 className='float-start'>Form: House Keepers</h3>
		<button className="btn1 btn2 float-end" onClick={() => navigate(-1)}>Back</button>
		<div>
			<ul className="steps-progress-bar">
				<li className='active'></li>
				<li className={currentStep >= 1 ? 'active' : '' }></li>
				<li className={currentStep >= 2 ? 'active' : '' }></li>
			</ul>
		</div>
		<div className='clearfix'></div>
		<p>Step {currentStep+1} out of 3</p>
		{steps[currentStep]}
		<pre id="whereToPrint"></pre>
	</section>
);
}

const stepOneValidationSchema = Yup.object().shape({
	first_name: Yup.string().required().label('First Name'),
	last_name: Yup.string().required().label('Last Name'),
	phone: Yup.string().required().label('Phone'),
	email: Yup.string().required().label('Email'),
	address_home: Yup.string().required().label('Address'),
	postal_code: Yup.string().required().label('Postal Code'),
	date_birth: Yup.string().required().label('Birth Date'),
	ni: Yup.string().required().label('NI Number'),
	hotel: Yup.string().required().label('Hotel Name'),
	permit_expiry: Yup.string().required().label('Permit expiry'),
	passport_expiry: Yup.string().required().label('Passport expiry'),
	bank_name: Yup.string().required().label('Bank Name'),
	bank_account_number: Yup.string().required().label('Bank Account Number'),
	sort_code: Yup.string().required().label('Sort Code'),
	emergency_contact_name: Yup.string().required().label('Emergency Contact Name'),
	emergency_contact_relation: Yup.string().required().label('Emergency Contact Relation'),
	emergency_contact_number: Yup.string().required().label('Emergency Contact Number'),
	emergency_contact_address: Yup.string().required().label('Emergency Contact Address'),

	employment_history: Yup.array().of(Yup.object().shape({
		company_name: Yup.string().required().label('Name'),
		company_phone: Yup.string().required().label('Phone'),
		company_email: Yup.string().required().label('Email'),
		company_start_date: Yup.string().required().label('Date'),
		company_finish_date: Yup.string().required().label('Date'),
	})),
	
	crime_date: Yup.string().required().label('Date'),
	crime_detail: Yup.string().when('crime', {
        is: (value) => value === true,
        then: Yup.string().required('Details are required.')
    }),
	name2: Yup.string().required().label('Name'),
	sign2: Yup.string().required().label('Sign'),
	date2: Yup.string().required().label('Date'),
});

const StepOne = (props) => {

const dropdownTitle = [
    {key: 'mr', value: 'Mr.'},
	{key: 'ms', value: 'Ms.'},
    {key: 'mrs', value: 'Mrs.'},
];

const dropdownHouseKeeper = [
    {key: 'roomAttendant', value: 'Room Attendant'},
    {key: 'waiter/waiteress', value: 'Waiter/Waiteress'},
    {key: 'porter', value: 'Porter'},
    {key: 'bartender', value: 'Bartender'},
    {key: 'roomService', value: 'Room Service'},
    {key: 'kitchenPorter', value: 'Kitchen Porter'},
    {key: 'hkSupervisor', value: 'HK Supervisor'},
    {key: 'publicAreaCleaner', value: 'Public Area Cleaner'},
];

const handleSubmit = (values) => {
	//console.log('Formik:', Formik)
	props.next(values);
}

return(
	<Formik initialValues={props.data} validationSchema={stepOneValidationSchema} onSubmit={handleSubmit}>
	{formik => {
		//console.log('formik', formik)
		return(
	<Form>
		<div className="row">
		<div className="col-md-4">
			<FormikControl control='select' label='Title' name='title' options={dropdownTitle} />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='First Name' name='first_name' placeholder='John' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='Surname' name='last_name' placeholder='Smith' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Phone' name='phone' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Email' name='email' />
		</div>
		<div className="col-md-10">
			<FormikControl control='input' type='text' label='Home Address' name='address_home' />
		</div>
		<div className="col-md-2">
			<FormikControl control='input' type='text' label='Post Code' name='postal_code' />
		</div>
		<div className="col-md-4">
			<FormikControl control='select' label='Work sought' name='work_sought' options={dropdownHouseKeeper} />
		</div>
		<div className="col-md-4">
			<FormikControl control='date' label='Date of birth' name='date_birth' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='NI number' name='ni' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='Hotel assigned' name='hotel' placeholder='To be filled by Admin' />
		</div>
		<div className="col-md-8">
			<FormikControl control='checkbox_toggle_switch' label='Are you eligeable to work in the UK?' name='eligible_uk' />
		</div>
		<div className="col-md-4">
			<FormikControl control='date' label='Permit Expiry Date' name='permit_expiry' />
		</div>
		<div className="col-md-8">
			<FormikControl control='checkbox_toggle_switch' label='Do you have a Passport?' name='passport' />
		</div>
		<div className="col-md-6">
			<FormikControl control='date' label='Passport Expiry Date' name='passport_expiry' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Bank Name' name='bank_name' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Account Number' name='bank_account_number' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Sort Code' name='sort_code' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Emergency Contact Name' name='emergency_contact_name' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Relation with emergency contact' name='emergency_contact_relation' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Emergency Contact Number' name='emergency_contact_number' />
		</div>
		<div className="col-md-6">
			<FormikControl control='input' type='text' label='Emergency Contact Address' name='emergency_contact_address' />
		</div>
		<div className="col-md-12">
			<h4>Previous Work Reference Detail</h4>
		</div>
		<FieldArray name="employment_history">
			{({ insert, remove, push }) => (
				<div>
					{formik.values.employment_history.length > 0 && formik.values.employment_history.map((i, index) => (
						<div className="row" key={index}>
							<div className="col-md-4">
								<FormikControl control='input' type='text' label='Company Name' name={`employment_history.${index}.company_name`} />
							</div>
							<div className="col-md-4">
								<FormikControl control='input' type='text' label='Phone/Mobile' name={`employment_history.${index}.company_phone`} />
							</div>
							<div className="col-md-4">
								<FormikControl control='input' type='email' label='Email' name={`employment_history.${index}.company_email`} />
							</div>
							<div className="col-md-6">
								<FormikControl control='date' label='Start Date' name={`employment_history.${index}.company_start_date`} />
							</div>
							<div className="col-md-6">
								<FormikControl control='date' label='Finish Date' name={`employment_history.${index}.company_finish_date`} />
							</div>
							<div className="col-md-12">
								{index > 0 && (<button type="button" className="float-end btn1 btn2" onClick={() => remove(index)}><i className='fa fa-minus'></i></button>)}
							</div>
						</div>
					))}
				<div className="col-md-12">
        			<button type="button" className="float-end btn1" onClick={() => push({ company_name: '', company_phone: '', company_email: '', company_start_date: '', company_finish_date: '' })}><i className='fa fa-plus'></i></button>
				</div>
			</div>)}
		</FieldArray>
		<div className="col-md-12">
			<FormikControl control='checkbox_toggle_switch' label='Do you have any unspent criminal convictions?' name='crime' />
		</div>
		<div className="col-md-6">
			<FormikControl control='date' label='Crime Date' name='crime_date' />
		</div>
		<div className="col-md-12" style={{display: formik.values.crime ? 'block' : 'none'}}>
			<FormikControl control='input' type='text' label='Detail' name='crime_detail' placeholder='Detail' />
		</div>
		<div className="col-md-12">
			<p>NB Certain types of employment and professions are exempt from the Rehabilitation of Offenders Act 1974and in those cases, particularly where the employment sought in relation to positions involving working with children or vulnerable adults, details of all criminal convictions must be given the information given will be treated in the strictest of confidence. Failure to declare a conviction may require us to exclude you from our register or terminate an assignment if the offense is not declared but later comes to light. GDPR: I hereby confirm that the information given is true and correct; I consent to my personal data being included in a computerised database for 36 months and its use to secure employment/temporary assignments/contracts. I consent to my CV/ID/personal data being forwarded to clients via electronic mail/post and I understand the risk of my documents being unintentionally alerted during the process. I consent to references being passed on to potential employers. If during the course of a temporary assignment the client wishes to employee direct, I acknowledge that H&D will be entitled either to charge the client an introduction transfer fee or to agree to an extension of the hiring period with the client (after which I may be employed by the client without a further charge is applicable to the client).H&D Recruitment Ltd will not market your data without your consent. I fully understand and accept all terms and conditions of H&D Recruitment Ltd.</p>
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='Name' name='name2' />
		</div>
		<div className="col-md-4">
			<FormikControl control='input' type='text' label='Signature' name='sign2' />
		</div>
		<div className="col-md-4">
			<FormikControl control='date' label='Date' name='date2' />
		</div>

		<div className="col-md-12">
			<p className='float-start error' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required field(s) first.</p>
			<button type="submit" className="float-end btn1" disabled={!(formik.isValid)}>Next <i className='fa fa-angle-right'></i></button>
		</div>
	</div>{/*row*/}
	</Form>
	)}}
</Formik>
);
}

const stepTwoValidationSchema = Yup.object({
	changed_nationality_detail: Yup.string().when('changed_nationality', {
        is: (value) => value === true,
        then: Yup.string().required('Details are required.')
    }),
	changed_surname: Yup.boolean(),
	changed_surname_detail: Yup.string().when('changed_surname', {
        is: (value) => value === true,
        then: Yup.string().required('Details are required.')
    }),
});

const StepTwo = (props) => {
const handleSubmit = (values) => {
	props.next(values);
}

	return(
		<Formik initialValues={props.data} validationSchema={stepTwoValidationSchema} onSubmit={handleSubmit}>
		{formik => {
		console.log('formik', formik)
		return(
			<Form>
				<div className="row">
				<div className="col-md-12">
					<h3>Medical Health Certification & Health Declaration</h3>
					<p>To comply with the Health and Safety at Work Act 1974, H&D Recruitment Limited is obliged to ensure that the health and safety of our temporary workers remain our highest priority. If you are on working machines or doing a task that could harm others if you are not medically fit, you could be held personally liable for not declaring this to the site where you are working and also to H&D Recruitment Ltd, your employing organization. Alertness and reasonable physical fitness are essential for duties that may interact with moving trains. It is, therefore, important to be accurate with your answers to this questionnaire, although trivial matters should be ignored (e.g. transient dizziness while gardening two years ago).<span className="bold"> When you declare NO, you are accepting a degree of responsibility for your safety, and those of others who may come to harm in your workplace.</span></p>
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Do you have Diabetes needing Insulin?' name='diabetes' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Do you suffer from Epilepsy or fits?' name='epilepsy' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Have you ever had blackouts, recurrent dizziness or any condition, which may cause sudden collapse or In capacity?' name='blackouts' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Do you get discomfort or pain in the chest or shortness of breath on exercise, e.g. climbing a single flight of stairs?' name='breath' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Do you have difficulty in moving rapidly over short distances, including on slopes, steps or rough ground?' name='moving' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Would you have difficulty in looking over either shoulder?' name='looking' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Would you have difficulty working in out-door open areas?' name='outdoor' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Would you have difficulty working in enclosed spaces?' name='enclosed' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Would you have difficulty working above head height (e.g. using ladders or maintenance platforms)?' name='head_height' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Do you have any difficulty with your eyesight (other than the wearing of glasses or contact lenses where )? E.g. Color blind.' name='eyesight' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Are you capable of repetitive lifting as for the employment?' name='lifting' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Have you ever had a serious accident or operation?' name='accident' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Do you have / ever suffered from Back/Neck problems?' name='back' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Would being on your feet all day cause you a problem?' name='feet' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Have you had a hernia?' name='hernia' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Do you have High/low blood pressure?' name='bp' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Have you have / ever had heart problems?' name='heart' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Do you have any difficulty with your hearing?' name='hearing' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Are you taking any medication that is giving you dizziness or drowsiness?' name='dizziness' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Have you used, or abused, drugs within the last 12 months?' name='drugs' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Have you had any alcohol-related illness during the last 12 months?' name='alcohol' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='Do you have any medical history and allergies?' name='allergies' />
				</div>
				<div className="col-md-12">
					<FormikControl control='input' type='checkbox' label='For health and safety protocols, we would like to know if you are pregnant?' name='pregnant' />
				</div>
				<div className="col-md-12">
					<p className="strong">I will inform H&D Recruitment Limited of any change to my health that may affect my ability to perform my duties:</p>
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Signature' name='sign3' />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Name' name='name3' />
				</div>
				<div className="col-md-4">
					<FormikControl control='date' label='Date' name='date3' />
				</div>

				<div className="col-md-4">
					<button type="button" className='btn1 btn2' onClick={() => props.prev(formik.values)}><i className='fa fa-angle-left'></i> Back</button>
				</div>				
				<div className="col-md-4">
					<p className='float-start' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required value(s) first.</p>
				</div>
				<div className="col-md-4">
					<button type="submit" className='float-end btn1'>Next <i className='fa fa-angle-right'></i></button>
				</div>
				</div>{/*row*/}
			</Form>
		)}}
		</Formik>
	);
}

const stepThreeValidationSchema = Yup.object({

	terms_conditions: Yup.boolean().oneOf([true], 'Must check this.').label('Terms & Conditions'),

	changed_nationality_detail: Yup.string().when('changed_nationality', {
        is: (value) => value === true,
        then: Yup.string().required('Details are required.')
    }),
	changed_surname: Yup.boolean(),
	changed_surname_detail: Yup.string().when('changed_surname', {
        is: (value) => value === true,
        then: Yup.string().required('Details are required.')
    }),
});

const StepThree = (props) => {
const handleSubmit = (values) => {
	props.next(values, true);
}

	return(
		<Formik initialValues={props.data} validationSchema={stepThreeValidationSchema} onSubmit={handleSubmit}>
		{formik => {
		//console.log('formik', formik);
		return(
			<Form>
				<div className="row">
				<div className="col-md-12">
					<p data-bs-toggle="modal" data-bs-target="#staticBackdrop">Click here to read Terms & Conditions</p>
					<FormikControl control='input' type='checkbox' label='I have read and understood all the terms and conditions stated above of H&D Recruitment' name='terms_conditions' />

				{/*Modal*/}
				<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
					<div className="modal-dialog modal-xl">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="staticBackdropLabel">Terms & Conditions</h5>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<h5>Payment Terms for H&D Staff:</h5>
								<p>Name: {formik.values.first_name}</p>
								<p>Address: {formik.values.address_home}</p>
								<p>Designated Hotel: To be filled by the admin</p>
								<p>Report to: To be filled by admin</p>
								<p>Start date and time: To be filled by the admin</p>
								<p>Hourly rate with Holiday Accrual: £9.82+£1.20 = £11.02</p>
								<p>Uniform: Black Smart Shirt (Full Sleeves), Black Trousers (No Jeans), Black Shoes, Earrings are not permitted</p>
								<p>This is conditional on at least 2 rooms being clean in one hour. With a total of up to 16 rooms cleaned in an 8-hour shift. You will also clean the corridors as and when required by the supervisors.</p>
								<p>First Payment date: To be filled by admin and bi-weekly thereafter.</p>
								<p>Please note that prior to starting work; you might receive 2-3 days of training, which will not be included in your first payment. H&D Recruitment will provide the remuneration for these training days, and you will be provided your training pay with your second payment.</p><p>The first payment will include the wages from the second week of your employment, as will be the case for the following weeks. All payments will be processed on Tuesday. However, due to occasional technical circumstances beyond our control, the payment may be processed on a Wednesday. Additionally, please be advised that our company's payment procedure follows the bi-weekly format. Therefore, you will only be paid for the days that you have worked in TWO continuous weeks.</p><p>Please note that you need to give us one week's notice before you decide to leave the job. I understand and accept the payment terms from H&D. I can work 5 days a week including the weekends.</p>
								<p>Signature:</p>
								<p>Date:</p>
								<h6>Agency staff quick Induction:</h6>
								<p>I sign that I fully understand and was explained the following points during housekeeping departmental induction:</p>
								<ul>
									<li>Shifts</li>
									<li>Accidents</li>
									<li>Mobile Phones</li>
									<li>General Appearance</li>
									<li>Holidays</li>
									<li>Sickness</li>
									<li>Fire Procedures</li>
									<li>Manual Handling</li>
									<li>Keys & Security</li>
									<li>Lost Property Procedure</li>
									<li>C.O.S.H.H.</li>
									<li>HK Risk Assessments</li>
									<li>Cleaning Practice</li>
									<li>Spot Checks</li>
								</ul>
								<p>Any breach or abuse of the above policies may result in disciplinary action being taken!</p>
								<p>Print Name:</p>
								<p>Agency: H&D Recruitment</p>
								<p>Signature:</p>
								<p>Date:</p>
								<p>Trainer's Name and Signature: To be filled by admin.</p>
								<h6>Employment Contract:</h6>
								<p>By Section 1 of the Employment Rights Act 1996 and Regulation 14(2) of Statutory Instrument, Number 3319 made under the Employment Agencies Act 1973, the conditions below together with the details of your Assignments form your terms and conditions of employment. CONDITIONS OF EMPLOYMENT this contract of service is made Between H&D Recruitment, the employer (referred to below as "H&D"), AND the employee named on the timesheet (referred to below as the “Employee”). Definitions Assignment: a placement whereby the Employee is assigned to the Client. Client: any client to whom the Employee is assigned to work from time to time. Hourly Rate: this is the rate per hour notified before the Employee before the commencement of each Assignment. General:</p>
								<ol>
								<li>This contract of employment sets out the terms of the relationship between H&D and the Employee and begins on the commencement date of the Employee's first Assignment (which is, therefore, the first day of employment) and continues until terminated as set out below. For the avoidance of doubt, this contract of employment shall remain in force as a contract of employment during any periods between Assignments.</li>
								<li>H&D is acting as an employment business as defined in the Conduct of Employment Agencies and Employment Businesses Regulations 2003.</li>
								<li>H&D will endeavor at all times during the viability of this contract of employment to allocate the Employee to suitable Assignments and as a minimum guarantees to the Employee that he/she will be offered by H&D at least 336 hours of work on Assignment during each full 12 month period for so long as this contract of employment has not been terminated, the first such period commencing on the commencement date of the Employee's first Assignment at a rate at least equivalent to the then-current National Minimum Wage. For Employees who work part-time this guarantee shall be pro-rated based upon a 35-hour week. For the avoidance of doubt, there is no entitlement to any number of hours on Assignment in any period less than 12 months. The provisions of the Apportionment Act 1870 shall not apply to this contract of employment. Save as provided for herein H&D does not guarantee that there will always be a suitable Assignment to which the Employee can be allocated, hence hours of work on an assignment are variable subjected to the hotel occupancy. The Employee accepts that there may be times when no suitable Assignments are available. In those times H&D has no obligation to pay the Employee. Unless there is a good cause, the Employee will be required to accept suitable Assignments offered by H&D. Refusal of an offer of suitable work by the Employee without good cause may result in the termination of the Employee's employment.</li>
								<li>The Employee will comply with all guidelines, procedures, and policies of H&D throughout his/her employment.</li>
								<li>H&D will inform the Employee of the likely duration of each Assignment. H&D may instruct the Employee to end an Assignment at any time without specifying reasons. The hours of work likely to be involved for each Assignment will be as notified to the Employ before the commencement of the Assignment.</li>
								<li>The Employee must keep H&D informed of his/her availability to work and respond to H&D's inquiries as to availability for work in a prompt including during any period in which the Employee is not on Assignment.</li>
								<li>Type of work: You are employed as Housekeeper. Your duties are cleaning Hotel rooms and corridors. This may include additional duties as determined by the client. You are employed to work for the nominated hotel determined by H&D and will adhere to the rules and regulations of that nominated hotel.</li>
								<li>In respect of work done on an Assignment; the Employee will be entitled to be paid the Hourly Rate of £9.82. H&D will deduct appropriate income tax and national insurance contributions, together with any other sums required by law to be deducted (including any court orders) or which the Employee has agreed should be deducted or otherwise.</li>
								<li>The Employee warrants that all information is given to H&D as to his/her identity, permission to work in the UK, experience, training, qualifications, and the horizon is true and complete. Where H&D is required to carry out a Disclosure and Barring Service (DBS) check on the Employee, the Employee agrees to register with the DBS update service and give H&D permission to access the Employee's online record.</li>
								<li>When the Employee commences an Assignment, he/she always undertakes during the Assignment: - (a) Not to engage in any conduct detrimental to the interests of H&D and/or the Client. (b) To be present during the times or for the total number of hours each day and/or week, as required by H&D and the Client. (c) To take all reasonable steps to save his/her own health and safety and the health and safety of any other person who may be affected by his/her actions at work. (d) To comply with any disciplinary rules or obligations in force at the Client's premises where the services are being performed to the extent that they are reasonably applicable. (e) To comply with all reasonable instructions and requests, within the scope of the agreed services made by H&D and/or the Client but not to commit any unlawful act. (f) To perform all work under the Assignment using skills reasonable skills care. (g) To conduct him/herself in a professional manner, to dress appropriately, wear or produce any form of ID required by the Client, and to observe all applicable laws. (h) To return all property belonging to the Client or obtained by the Employee during the course of the Assignment on termination of the Assignment or on demand by H&D and/or the Client.</li>
								<li>During the Employee's employment, the Employee acknowledges that he/she will receive and/or have access to information of a confidential nature in connection with H&D and/or the Client. Confidential information includes, without limitation, information relating to H&D and/or any Client's products and services, methods, systems, business plans or intentions, marketing methods, strategies, costs, techniques, financial plans or arrangements, employees, customers, suppliers or business connections. The Employee undertakes to keep all such information in the strictest confidence and not to disclose such information to any third party unless it is in the proper performance of his/her duties. If requested, the Employee agrees to execute a confidentiality undertaking in favor of H&D and/or the Client at any time, including prior to commencing any Assignment.</li>
								<li>The Employee accepts that all work done whilst on Assignments, and any intellectual property rights created or developed in connection with such work shall belong to H&D or the Client, as appropriate. The Employee agrees (i) that all such intellectual property rights shall be assigned automatically to H&D or the Client, as appropriate; (ii) not to assert, exercise, or claim any such intellectual property rights (including, without limitation, moral rights); (iii) to hand over to H&D or the Client all documents and other materials created or developed whilst on Assignment; and (iv) if requested, to execute an intellectual property assignment agreement in favor of H&D or the Client, and do such other things as may be necessary to vest such intellectual property rights in H&D or the Client.</li>
								<li>The Employee may be required to work at any location in accordance with the requirements of each Assignment or as specified by H&D. The Employee has no permanent place of work.</li>
								<li>The Employee will be paid in accordance with the National Minimum Wage (subject to deductions) that the Employment business reasonably expects to achieve, for all hours worked by the Agency Worker. All workers will receive 2-3 -days of training required for the Assignment.</li>
								<li>H&D undertakes to pay the Employee in respect of work done, whether the Client has paid H&D in respect of such work. The Employee will be paid bi-weekly in arrears following verification of the hours worked or at such other intervals as notified in advance of the commencement of an Assignment.</li>
								<li>The Employee must meet travel and subsistence costs from his/her pay and will not receive any further payment from H&D in respect of travel or subsistence unless specified in advance. The Employee may, if appropriate, seek to claim tax relief in respect of travel or subsistence costs. The Employee will need to establish his/her own entitlements in that regard (if any) and make an individual claim for them when presenting his/her personal tax return in due course.</li>
								<li>The Employee authorizes H&D to deduct from any payments due to the Employee (which for this purpose includes payment in lieu of notice, bonus, holiday pay, and sick pay) all and any debt owed by the Employee to H&D including, without limitation, any overpayment, loans or advances made to the Employee by H&D, payment made in error by H&D, and any overpayment of a holiday or sick pay.</li>
								<li>The Employee shall notify H&D if any Assignment is with a Client for whom the Employee has previously worked. Sickness Absence and Disciplinarians</li>
								<li>In the event that the Employee is unable to work due to sickness, The Agency worker is required to provide the Employment Business with evidence of incapacity to work which may be by way of a self-certificate for the first 7 days of incapacity and a doctor's certificate thereafter.</li>
								<li>In the event that the Agency worker submits a statement of fitness for work or similar medical evidence, which indicates that the agency worker may, subject to certain conditions, be fit to work/ return to work, the employment business will in its absolute discretion determine whether the agency worker will be (a) placed in a new assignment or (b) permitted to continue in an ongoing assignment. In making such a determination the employment business may consult with the Hirer and the Agency worker as appropriate to assess whether the conditions identified in the Statement or similar documentation can be satisfied for the duration of the assignment.</li>
								<li>If the Employee's performance, attitude, or behavior gives cause for concern, this could result in the employee being subject to disciplinary action in accordance with the Disciplinary Policy and Procedure. Holidays and Working Time.</li>
								<li>The Employee is entitled to paid annual leave pursuant to the Working Time Regulations 1998 (“the Regulations”) and has no other entitlement to payment for holidays (including bank/public holidays) or for absence due to sickness or injury other than any entitlement there may be to Statutory Sick Pay.</li>
								<li>For the purposes of Regulation 13, each leave year will begin on 1st January and ends on 31st December. The Employee is responsible for ensuring that all paid annual leave is requested and taken within the leave year.</li>
								<li>The Employee is entitled to paid annual leave in accordance with the Regulations. The Employee will be informed on his/her pay slip of the number of hours of paid leave that H&D regards as having accrued to the Employee. The Employee may only take paid annual leave at such time as the number of hours leave he/she wishes to take is no greater than the number of hours which he/she has been so informed has accrued due to him/her as at the date on which the leave period is to start. The Employee will compensate H&D for any payment made by H&D to the Employee for annual leave which is in excess of that which has accrued (“the excess sum”) either, at the discretion of H&D, by repayment of the excess sum or by the Employee undertaking additional temporary work to the value of the excess sum. H&D may deduct the excess sum from any other sum owed to the Employee at any time in the future.</li>
								<li>The Employee is not allowed to carry forward any accrued leave from one leave year to another and no payment in lieu will be made except on termination of this contract of employment. For the avoidance of doubt, since this contract of employment remains in force between Assignments, no payment in lieu of any accrued annual leave will be made on termination of an Assignment. A payment in lieu of any accrued annual leave can and will only be made when this contract of employment is brought to an end by the Employee or by H&D. </li>
								<li>The Employee is required to give a minimum of two weeks' notice of his/her intention to take paid annual leave unless H&D has confirmed to the Employee that it has waived this requirement. For the avoidance of doubt, such notice must be given whether or not the Employee is on Assignment. H&D reserves the right to refuse the Employee permission to take such leave.</li>
								<li>It is the Employee's responsibility to notify H&D of hours worked other than for H&D if: (a) The Employee exceeds or is likely to exceed a maximum of 48 hours working time per week, and/or (b) The Employee exceeds or is likely to exceed a maximum of eight hours working time. Termination</li>
								<li>H&D shall give to the Employee who has been continuously employed for one month or more notice of termination of employment as follows: (a) One week if the Employee's period of continuous employment is less than two years; (b) Two weeks if the Employee's period of continuous employment is more than two years but less than three years; (c) One additional week for each additional year of continuous employment up to a maximum of thirteen weeks.</li>
								<li>The Employee who has been continuously employed for one month or more shall give to H&D not less than one week's notice of termination of employment.</li>
								<li>On termination of the Employee's employment or on demand, the Employee shall return all property belonging to H&D and/or any Client.</li>
								</ol>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn" data-bs-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				{/*END-MODAL*/}
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Name' name='name4' />
				</div>
				<div className="col-md-4">
					<FormikControl control='input' type='text' label='Signature' name='sign4' />
				</div>
				<div className="col-md-4">
					<FormikControl control='date' label='Date' name='date4' />
				</div>

				<div className="col-md-4">
					<button type="button" className='btn1 btn2' onClick={() => props.prev(formik.values)}><i className='fa fa-angle-left'></i> Back</button>
				</div>				
				<div className="col-md-4">
					<p className='float-start' style={{display:!(formik.isValid) ? 'block' : 'none'}}>Fill required value(s) first.</p>
				</div>
				<div className="col-md-4">
					<button type="submit" className='float-end btn1'>Submit</button>
				</div>
				</div>{/*row*/}
			</Form>
		)}}
		</Formik>
	);
}

export default FormHouseKeepers;