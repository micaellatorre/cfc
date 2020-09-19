import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import ContentPage from './pages/ContentPage/ContentPage';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ContentPage />
    </Router>
  );
}

export default App;