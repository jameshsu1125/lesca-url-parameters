import React from 'react';
import { render } from 'react-dom';
import QueryString from '../lib/index';
import './styles.less';

function Page() {
	return (
		<>
			<div>
				<a href='./?name=James&age=40&birthday=1981'>click to test this page</a>
			</div>
			<div>
				<h1>install</h1>
				<p>npm install lesca-url-parameters --save</p>
			</div>
			<div>
				<code>
					QueryString.get('name') <br />
					<span>// {JSON.stringify(QueryString.get('name'))}</span>
				</code>
			</div>
			<div>
				<code>
					QueryString.get('age') <br />
					<span>// {JSON.stringify(QueryString.get('age'))}</span>
				</code>
			</div>
			<div>
				<code>
					QueryString.get('birthday') <br />
					<span>// {JSON.stringify(QueryString.get('birthday'))}</span>
				</code>
			</div>
			<div>
				<code>
					QueryString.remove('birthday') <br />
					<span>// {JSON.stringify(QueryString.remove('birthday'))}</span>
				</code>
			</div>
			<div>
				<code>
					QueryString.root() <br />
					<span>// {JSON.stringify(QueryString.root())}</span>
				</code>
			</div>
			<div>
				<code>
					QueryString.file() <br />
					<span>// {JSON.stringify(QueryString.file())}</span>
				</code>
			</div>
		</>
	);
}

render(<Page />, document.getElementById('app'));
