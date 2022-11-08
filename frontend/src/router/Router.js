import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Careers from '../pages/Careers';
import SiaDoorSupervisor from '../pages/forms/SiaDoorSupervisor';
import FormWaiter from '../pages/forms/FormWaiter';
import FormPublicAreaCleaner from '../pages/forms/FormPublicAreaCleaner';
import FormPorter from '../pages/forms/FormPorter';
import FormLinenPorter from '../pages/forms/FormLinenPorter';
import FormHouseKeepers from '../pages/forms/FormHouseKeepers';
import NoMatch from '../pages/NoMatch';
function Router(){
  return(
	<div>
	<Navbar />
	<div className="container">
	<div className="row">
		<Routes>
			<Route path="/" element={<Careers />} />
			<Route path="/careers" element={<Careers />} />
			<Route path="/formsiadoorsupervisor" element={<SiaDoorSupervisor />} />
			<Route path="/formwaiter" element={<FormWaiter />} />
			<Route path="/formpublicareacleaner" element={<FormPublicAreaCleaner />} />
			<Route path="/formporter" element={<FormPorter />} />
			<Route path="/formlinenporter" element={<FormLinenPorter />} />
			<Route path="/formhousekeepers" element={<FormHouseKeepers />} />
			<Route path="*" element={<NoMatch />} />
		</Routes>
	</div>
	</div>
	</div>
  );
}
export default Router;