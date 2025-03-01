import { TopNavigation } from '@src/shared/components';
import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../store';

export const AuthTopNavigation = () => {
	const isAuth = useSelector(selectIsAuth);

	return <TopNavigation isAuth={isAuth} logout={() => {}} />;
};
