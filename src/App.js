import Navbar from './components/navbar/index';
import Header from './pages/header/index';
import Footer from './pages/footer/index';
import Proj1 from './pages/proj1/index';
import Proj2 from './pages/proj2/index';
import Proj3 from './pages/proj3/index';
import Proj4 from './pages/proj4/index';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <Proj1 />
      <Proj2 />
      <Proj3 />
      <Proj4 />
      <Footer/>
    </div>
  );
}


export default App;
