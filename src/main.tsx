import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Router } from './router/Router';

import './styles/main.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router />
	</StrictMode>,
);
