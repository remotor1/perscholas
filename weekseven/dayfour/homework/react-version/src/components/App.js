import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Article from './Article/Article';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <main className='main'>
        <section className='content'>
          <Article />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
