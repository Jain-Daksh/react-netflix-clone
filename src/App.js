import './App.css';
import '../src/styles/navbar.css'
import '../src/styles/row.css'
import '../src/styles/banner.css'
import '../src/styles/navb.css'
import '../src/styles/footer.css'

//import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';
import Feature from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Nav />
      <Feature />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
