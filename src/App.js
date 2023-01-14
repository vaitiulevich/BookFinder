import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';

// import store from './Store';
import {Provider} from 'react-redux'
import store from './store/store';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BookPage from "./pages/BookPage/BookPage";

import routes from './routes'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <div className='content-page'>
      <Routes>
      <Route>
        <Route exact path="/" element={<Home/>} />
        <Route path="/book/:ID" element={<BookPage/>} />
      </Route>
    </Routes>
      </div>
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
