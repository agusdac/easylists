import React from 'react';
import './App.css';
import { appStrings } from './utils/localizable/appStrings';
import LanguageDropdown from './utils/localizable/LanguageDropdown';

function App() {
  const forceUpdate = React.useReducer(() => ({}))[1]
  const changeLanguage = (e, { value }) => {
    appStrings.setLanguage(value)
    forceUpdate()
  }
  return (
    <div>
      <h1>Easy Lists</h1>
      <h5>{appStrings.welcomeSubtitle}</h5>
      <LanguageDropdown changeLanguage={changeLanguage} />
      <But />
    </div>
  );
}

export default App;

const But = () => (
  <div className="ui button">
    {appStrings.english}
  </div>
)