import React from 'react';
import { render } from 'react-dom';
import QueryString from './../lib/index';

import './styles.css';

console.log(QueryString.get('a'));

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));
