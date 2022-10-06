import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import User from './pages/User';

import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <div className="flex flex-col justify-between h-screen">
          <Router>
            <Navbar />

            <main className="container mx-auto max-w-6xl px-3">
              <Alert />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFoundPage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </main>

            <Footer />
          </Router>
        </div>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
