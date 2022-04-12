import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import Code from '../components/code';
import { name } from '../config';

const codes = [
  {
    title: '1. Installation',
    code: `npm install ${name} --save`,
    type: 'text',
  },
  {
    title: '2. Usage',
    code: `import QueryString from 'lesca-url-parameters';

// url = "https://www.example.com/?name=James&age=40&birthday=1981";
const name = QueryString.get('name'); // James
const age = QueryString.get('age'); // 40
const birthday = QueryString.get('birthday'); // 1981`,
    type: 'js',
  },
];

const Usage = () => {
  useEffect(() => {}, []);
  return (
    <div className='Usage'>
      <h2>Usage</h2>
      {codes.map((e) => (
        <div key={e.title}>
          <h3>{e.title}</h3>
          <Code code={e.code} theme={e.type} />
        </div>
      ))}
      <ButtonGroup variant='contained'>
        <Button>click</Button>
      </ButtonGroup>
    </div>
  );
};
export default Usage;
