import React from 'react';
import { render } from 'react-dom';
import MyClass from './../lib/index';

import './styles.css';

console.log(MyClass.get('a'));

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));
