/**
 * 인덱스 모듈
 *
 * @author RWB
 * @since 2021.10.28 Thu 00:54:28
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './global/reportWebVitals';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementsByTagName('main')[0]
);

reportWebVitals();