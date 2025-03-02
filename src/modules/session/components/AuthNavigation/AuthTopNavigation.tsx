import { TopNavigation } from '@src/shared/components';
import { LOCAL_STORAGE_KEYS } from '@src/shared/constants/localStorage';
import { useDispatch, useSelector } from 'react-redux';

import { reset, selectIsAuth } from '../../store';

export const AuthTopNavigation = () => {
	const dispatch = useDispatch();

	const isAuth = useSelector(selectIsAuth);

	return (
		<TopNavigation
			isAuth={isAuth}
			logout={() => {
				localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
				dispatch(reset());
			}}
		/>
	);
};
