import { Auth } from '@src/modules/auth';
import { selectSignin, signinThunk } from '@src/modules/session';
import { ROUTES } from '@src/shared/constants';
import { Toast, ToastProvider, useToast } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useNavigate } from 'react-router';

export const AuthPage = () => {
	const dispatch = useDispatch();

	const signin = useSelector(selectSignin);

	const { openToast, toastIsOpened, toastMessage, toastVariant } = useToast();

	const navigate = useNavigate();

	return (
		<>
			<Auth
				signin={(data) =>
					dispatch(signinThunk(data))
						.unwrap()
						.then(() => navigate(ROUTES.ORDER_HISTORY))
						.catch(() => openToast('error', 'Неверный номер телефона или код'))
				}
				signinIsLoading={signin.isLoading}
			/>
			<ToastProvider>
				<Toast variant={toastVariant} open={toastIsOpened}>
					{toastMessage}
				</Toast>
			</ToastProvider>
		</>
	);
};
