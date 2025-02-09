import { TopNavigation } from '@src/modules/top-navigation';
import { DeliveryProcessingPage } from '@src/pages/delivery-processing-page/components/DeliveryProcessingPage/DeliveryProcessingPage';
import { CalculationLayout, CalculationPage } from '@src/pages/index';
import { RootLayout } from '@src/shared/components';
import { ROUTES } from '@src/shared/constants';
import { BrowserRouter, Route, Routes } from 'react-router';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<CalculationLayout />}>
					<Route element={<CalculationPage />} path="/" />
				</Route>
				<Route element={<RootLayout header={<TopNavigation />} />}>
					<Route element={<DeliveryProcessingPage />} path={ROUTES.PROCESSING} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
