// imports for app
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faPhone,
	faArrowUpRightFromSquare,
	faLaptopCode,
	faServer,
	faToolbox,
	faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';

// Make icons available across files
library.add(
	fab,
	faEnvelope,
	faPhone,
	faArrowUpRightFromSquare,
	faLaptopCode,
	faServer,
	faToolbox,
	faLightbulb
);

function App() {
	return <Home />;
}

export default App;

