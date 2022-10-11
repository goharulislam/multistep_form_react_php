import axios from "axios";
export default axios.create({
	baseURL: 'https://handdservices.co.uk/',
	headers:{
		"content-type": "application/json, multipart/form-data"
	}
});