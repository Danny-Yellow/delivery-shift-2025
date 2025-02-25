import { TopNavigation } from '@src/modules/top-navigation';
import { AuthPage, CalculationLayout, CalculationPage, OrderRequestPage } from '@src/pages';
import { DeliveryProcessingPage } from '@src/pages/delivery-processing-page/components/DeliveryProcessingPage/DeliveryProcessingPage';
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
					<Route element={<OrderRequestPage />} path={ROUTES.ORDER_REQUEST} />
					<Route element={<AuthPage />} path={ROUTES.AUTH} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
