import React from 'react';
import ReactDom from 'react-dom';
import './font';
import './index.scss';
import i18n from './i18n/i18n';
import settings from './client/state/settings';

import App from './app/pages/App';

settings.setTheme(settings.getThemeIndex());

ReactDom.render(
  <App />,
  document.getElementById('root'),
);
