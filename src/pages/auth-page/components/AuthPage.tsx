import { Auth } from '@src/modules/auth';
import { signinThunk } from '@src/modules/session';
import { ROUTES } from '@src/shared/constants';
import { useDispatch } from '@src/store';
import { useNavigate } from 'react-router';

export const AuthPage = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	return (
		<Auth
			signin={(data) =>
				dispatch(signinThunk(data))
					.unwrap()
					.then(() => navigate(ROUTES.ORDER_HISTORY))
			}
		/>
	);
};
