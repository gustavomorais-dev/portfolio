import React from 'react';
import Typical from 'react-typical';
import { useTranslation } from 'react-i18next';

const TypingText = () => {
  const { t } = useTranslation();

  return (
    <Typical
      steps={[t('home.greeting'), 500]}
      loop={1}
      wrapper="h1"
    />
  );
};

export default TypingText;
