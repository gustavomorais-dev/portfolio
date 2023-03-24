import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { t } = useTranslation();

  function changeLanguage(event) {
    const language = event.target.value;
    i18n.changeLanguage(language);
  }

  return (
    <div>
      <label htmlFor="language-selector">{t('language')}</label>
      <select id="language-selector" onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
