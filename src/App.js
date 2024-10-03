import './App.css';
import './styles.css';
import Header from './components/Header';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Description></Description>
      </div>
      <footer className="footer">
        <p className="footer">Footer</p>
      </footer>
    </div>
  );
}

export default App;
