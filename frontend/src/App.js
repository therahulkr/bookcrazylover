import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import About from "./components/About.js"
import Books from "./components/Books.js"
import BookDetails from "./components/BookDetails.js"
import Authors from "./components/Authors.js"
import Blogs from "./components/Blogs.js"
import Create from "./components/Create.js"


function App() {
  return (
    <Router>
         <Header/>
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/books" element={<Books/>}/>
             <Route path="/books/:keyword" element={<Books/>}/>
             <Route path="/book/:id" element={<BookDetails/>}/>
             <Route path="/authors" element={<Authors/>}/>
             <Route path="/blogs" element={<Blogs/>}/>
             <Route path="/new" element={<Create/>}/>
         </Routes>
         <Footer/>
    </Router>
  );
}

export default App;
