import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Login from './pages/Login';

function App() {
  const [showLogin, setShowLogin] = React.useState(false);

  const toggleLogin = () => setShowLogin(!showLogin);

  // Reset to home when navigating home
  React.useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#home') {
        setShowLogin(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLoginClick={toggleLogin} />
      {showLogin ? <Login /> : <Hero />}
    </div>
  );
}

export default App;