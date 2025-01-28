import { Layout } from '@src/components/Layout/Layout';
import { TopNavigation } from '@src/modules/TopNavigation/components/TopNavigation/TopNavigation';
import { RootPage } from '@src/pages/RootPage/components/RootPage';
import { BrowserRouter, Route, Routes } from 'react-router';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout header={<TopNavigation />} />}>
					<Route element={<RootPage />} path="/" />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
