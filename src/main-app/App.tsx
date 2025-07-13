import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {NavBar} from '../components/navBar/navBar';
import Footer from '../components/Footer/Footer';
import './App.css';
import LandingPage from '../components/landingPage/LandingPage.view';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../muiTheme';

function App() {


  return (
    <Router>
      <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
