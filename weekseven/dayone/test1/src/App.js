import logo from './logo.svg';
import './App.css';
import ListGroup from './ListGroup.jsx';

const definitions = [
  { dt: 'one', dd: 'two', id: 1 },
  { dt: 'another term', dd: 'another description', id: 2 },
];

function App() {
  let name = 'igor';
  return (
    <div className='App'>
      <ListGroup>
        <p>one</p>
        <p>two</p>
      </ListGroup>
      <div id={name}>
        <p>paragraph</p>
      </div>
      <div></div>

      <div id={name}>{<p>paragraph</p>}</div>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
