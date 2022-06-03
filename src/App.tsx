import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
	const { t } = useTranslation(['commons']);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{t('commons:hello')}</p>
				<p>{t('commons:longtexttest')}</p>
			</header>
		</div>
	);
}

export default App;
