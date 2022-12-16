import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content-page'>
        <h1>Book finder</h1>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
