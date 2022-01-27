import React from 'react';
import { render } from 'react-dom';
import { Code, Navation } from './components';
import Demo from './demo';
import './styles.less';

const homepage = 'https://github.com/jameshsu1125/lesca-url-parameters';
const name = 'lesca-url-parameters';
const description = 'get query string parameters value';

const Page = () => {
	return (
		<>
			<Navation />
			<div className='content'>
				<div>
					<h1>{name}</h1>
					<figcaption>{description}</figcaption>
				</div>
				<div>
					<h2>install</h2>
					<Code code={`npm install ${name} --save`} theme='command' />
				</div>
				<div>
					<a href='./?name=James&age=40&birthday=1981'>click to test this page</a>
				</div>
				<div>
					<Demo />
				</div>
				<div>
					<h2>Usage</h2>
					<a href={homepage}>Documentation</a>
				</div>
			</div>
		</>
	);
};

render(<Page />, document.getElementById('app'));
