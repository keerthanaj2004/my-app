//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import AboutUs from './components/AboutUs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//babel compiles the js code
function App() {
  return (
    //shld return only one element here returning div
    //node module waala folder kisiko dete nhi
    <>
    <Navbar title="TextEx" search="Explore"/>
    <div className="container">
      <Textform heading="TextUtils"></Textform>
      {/* <AboutUs/> */}
    </div>
    </>
  );
}

export default App;
