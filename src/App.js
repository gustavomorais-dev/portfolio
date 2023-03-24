import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Section1 from './components/Section1/Section1';
import TypingText from './components/Section1/TypingText';
import i18n from 'i18next';                                   // Translator
import { initReactI18next } from 'react-i18next';             // Translator
import enTranslation from './languages/en.json';           // Translator
import ptTranslation from './languages/pt.json';           // Translator
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import Section2 from './components/Section2/Section2';

i18n.use(initReactI18next).init({ // Translator
  resources: {
    en: {
      translation: enTranslation
    },
    pt: {
      translation: ptTranslation
    }
  },
  lng: 'pt', // Idioma padrão
  fallbackLng: 'pt', // Idioma de fallback
  interpolation: {
    escapeValue: true // Evita escapar caracteres HTML em textos traduzidos
  }
});

// App

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Section1 />
      <Section2 />
      <LanguageSelector />
    </div>
  );
}

export default App;
