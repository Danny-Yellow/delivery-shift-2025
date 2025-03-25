import { selectIsAuth } from '@src/modules/session';
import { ROUTES } from '@src/shared/constants';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';

export const ProtectedRoute = ({ access }: { access: 'forAll' | 'onlyAuth' | 'onlyUnAuth' }) => {
	const isAuth = useSelector(selectIsAuth);
	const location = useLocation();

	if (access === 'onlyAuth' && !isAuth) {
		return <Navigate replace to={ROUTES.AUTH} />;
	}

	if (access === 'onlyUnAuth' && isAuth) {
		const { from } = location.state ?? { from: { pathname: '/' } };
		return <Navigate replace to={from} />;
	}

	return <Outlet />;
};
