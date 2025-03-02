import { AuthTopNavigation } from '@src/modules/session';
import {
	AuthPage,
	CalculationLayout,
	CalculationPage,
	HistoryPage,
	OrderRequestPage,
} from '@src/pages';
import { DeliveryProcessingPage } from '@src/pages/delivery-processing-page/components/DeliveryProcessingPage/DeliveryProcessingPage';
import { RootLayout } from '@src/shared/components';
import { ROUTES } from '@src/shared/constants';
import { BrowserRouter, Route, Routes } from 'react-router';

import { ProtectedRoute } from './ProtectedRoute';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute access="forAll" />}>
					<Route element={<CalculationLayout />}>
						<Route element={<CalculationPage />} path="/" />
					</Route>
					<Route element={<RootLayout header={<AuthTopNavigation />} />}>
						<Route element={<DeliveryProcessingPage />} path={ROUTES.PROCESSING} />
						<Route element={<OrderRequestPage />} path={ROUTES.ORDER_REQUEST} />
					</Route>
				</Route>
				<Route element={<ProtectedRoute access="onlyUnAuth" />}>
					<Route element={<RootLayout header={<AuthTopNavigation />} />}>
						<Route element={<AuthPage />} path={ROUTES.AUTH} />
					</Route>
				</Route>
				<Route element={<ProtectedRoute access="onlyAuth" />}>
					<Route element={<RootLayout header={<AuthTopNavigation />} />}>
						<Route element={<HistoryPage />} path={ROUTES.ORDER_HISTORY} />
						<Route element={<div>Profile</div>} path={ROUTES.PROFILE} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
