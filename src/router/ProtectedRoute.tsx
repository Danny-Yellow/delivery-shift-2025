import { selectIsAuth } from '@src/modules/session';
import { ROUTES } from '@src/shared/constants';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

export const ProtectedRoute = ({ access }: { access: 'forAll' | 'onlyAuth' | 'onlyUnAuth' }) => {
	const isAuth = useSelector(selectIsAuth);

	if (access === 'onlyAuth' && !isAuth) {
		return <Navigate to={ROUTES.AUTH} />;
	}

	if (access === 'onlyUnAuth' && isAuth) {
		return <Navigate to={'/'} />;
	}

	return <Outlet />;
};
