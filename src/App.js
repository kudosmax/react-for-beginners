import { useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log('I run all the time');

  useEffect(() => {
    console.log('I run only once');
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log('I run when keyword & counter changes.');
  }, [keyword, counter]);

  return (
    <div>
      <input onChange={onChange} type='text' placeholder='Search here...' />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
