import { CalculationLayout, CalculationPage } from '@src/pages/index';
import { BrowserRouter, Route, Routes } from 'react-router';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<CalculationLayout />}>
					<Route element={<CalculationPage />} path="/" />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
