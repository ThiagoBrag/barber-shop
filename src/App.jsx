import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import useAppSelector from './hooks/useAppSelector';
import Home from './pages/Home/Home';
import { userConfigSelector } from './store/UserConfig/UserConfigReducer';
import { manageTheme } from './utils/manageTheme';

function App() {
  const { isDarkTheme } = useAppSelector(userConfigSelector);

  useEffect(() => {
    manageTheme(isDarkTheme);
  }, [isDarkTheme]);

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Main />}> */}
        <Route index element={<Home />} />
        {/* <Route path="our" element={<Our />} /> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
