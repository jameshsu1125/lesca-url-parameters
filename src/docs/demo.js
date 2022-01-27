import React, { useEffect } from 'react';
import { Code } from './components';
import QueryString from '../lib/index';

const code1 = `import QueryString from 'lesca-url-parameters';

QueryString.get('name'); // ${QueryString.get('name')}
QueryString.get('age'); // ${QueryString.get('age')}
QueryString.get('birthday'); // ${QueryString.get('birthday')}
QueryString.remove('birthday') // ${QueryString.remove('birthday')}
QueryString.root() // ${QueryString.root()}
QueryString.file() // ${QueryString.file()}
`;

const Demo = () => {
	useEffect(() => {}, []);
	return (
		<>
			<Code code={code1} />
		</>
	);
};
export default Demo;
