import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { LandingPage } from './components/LandingPage';
import { MainApp } from './components/MainApp';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <LanguageProvider>
      {showLanding ? (
        <LandingPage onEnter={() => setShowLanding(false)} />
      ) : (
        <MainApp />
      )}
    </LanguageProvider>
  );
}