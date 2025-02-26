import { Auth } from '@src/modules/auth';
import { signinThunk } from '@src/modules/session';
import { useDispatch } from '@src/store';

export const AuthPage = () => {
	const dispatch = useDispatch();

	return <Auth signin={(data) => dispatch(signinThunk(data))} />;
};
