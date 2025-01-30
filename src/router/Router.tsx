import { TopNavigation } from '@src/modules/index';
import { CalculationPage } from '@src/pages/index';
import { Layout } from '@src/shared/components/index';
import { BrowserRouter, Route, Routes } from 'react-router';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout header={<TopNavigation />} />}>
					<Route element={<CalculationPage />} path="/" />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
