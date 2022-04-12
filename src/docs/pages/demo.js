import { Button, ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import QueryString from '../../lib';

const Demo = () => {
  const [msg, setMsg] = useState('');
  useEffect(() => {}, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>

      <h4>change url parameters for demonstration</h4>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            window.location.href = './?name=James&age=40&birthday=1981';
          }}
        >
          change url
        </Button>
      </ButtonGroup>
      <h4>name</h4>
      <pre>
        <code>{JSON.stringify(QueryString.get('name'))}</code>
      </pre>

      <h4>age</h4>
      <pre>
        <code>{JSON.stringify(QueryString.get('age'))}</code>
      </pre>

      <h4>birthday</h4>
      <pre>
        <code>{JSON.stringify(QueryString.get('birthday'))}</code>
      </pre>

      <h4>remove parameters</h4>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            window.location.href = QueryString.remove('name') || window.location.href;
          }}
        >
          remove name
        </Button>
        <Button
          onClick={() => {
            window.location.href = QueryString.remove('age') || window.location.href;
          }}
        >
          remove age
        </Button>
        <Button
          onClick={() => {
            window.location.href = QueryString.remove('birthday') || window.location.href;
          }}
        >
          remove birthday
        </Button>
      </ButtonGroup>
      <h4> get dir root and file</h4>
      <pre>
        <code>{msg}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            setMsg(QueryString.root());
          }}
        >
          get dir root
        </Button>
        <Button
          onClick={() => {
            setMsg(QueryString.file());
          }}
        >
          get file
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
