import { getSessionThunk } from '@src/modules/session';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';

import { Router } from './router/Router';
import { LOCAL_STORAGE_KEYS } from './shared/constants/localStorage';
import { ModalProvider } from './shared/ui/Modal/Modal';
import { store } from './store/store';

import './styles/main.scss';

const init = async () => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

	if (token) {
		await store.dispatch(getSessionThunk());
	}

	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<StoreProvider store={store}>
				<ModalProvider>
					<Router />
				</ModalProvider>
			</StoreProvider>
		</StrictMode>,
	);
};

init();
