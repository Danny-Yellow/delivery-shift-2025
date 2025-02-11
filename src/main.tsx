import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';

import { Router } from './router/Router';
import { store } from './store/store';

import './styles/main.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StoreProvider store={store}>
			<Router />
		</StoreProvider>
	</StrictMode>,
);
