// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div>
      <Header/>
      <Menu></Menu>
      <Main></Main>
      <Footer/>
      
    </div>
  );
}

export default App;
