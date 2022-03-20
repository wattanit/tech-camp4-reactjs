import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import NewPostPage from './pages/NewPost';
import AnimalPage from './pages/Animal';

function Body(){
  return (
    <div className="body">
        Body
      </div>
  )
}


function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/newpost" element={<NewPostPage/>}/>
          <Route path="/animal/:name" element={<AnimalPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
