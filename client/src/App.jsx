import { useState } from 'react';
import Header from './components/Header/Header'; // Asegúrate de que la ruta del archivo sea correcta.
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Main from './iu/Main';
import Content from './iu/Content';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} font-quickSand`}>
      {/* Pasa la función toggleSidebar como prop */}
      <Header 
        toggleDarkMode={toggleDarkMode} 
        darkMode={darkMode} 
        toggleSidebar={toggleSidebar} 
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Main>
        <Content>Main content</Content>
        <Profile>Profile</Profile>
      </Main>
    </div>
  );
}

export default App;
