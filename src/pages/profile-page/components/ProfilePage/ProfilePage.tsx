import type { UpdateProfile } from '@src/shared/api';

import { getPointsThunk, selectPoints } from '@src/modules/points';
import { ProfileForm, updateProfileThunk } from '@src/modules/session';
import { AdaptivePageHeader, ArrowLeft, BottomNavigation } from '@src/shared/components';
import { IconButton, Toast, ToastProvider, Typography, useToast } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import styles from './styles.module.scss';

export const ProfilePage = () => {
	const { toastIsOpened, toastVariant, openToast, closeToast, toastMessage } = useToast();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { data: points } = useSelector(selectPoints);

	useEffect(() => {
		dispatch(getPointsThunk());
	}, []);

	function handleSubmitProfile(profile: UpdateProfile) {
		dispatch(updateProfileThunk(profile))
			.unwrap()
			.then(() => openToast('success', 'Данные успешно обновлены'))
			.catch(() => openToast('error', 'Произошла ошибка!'));
	}

	return (
		<div className={styles.page}>
			<AdaptivePageHeader
				mobileButton={
					<IconButton onClick={() => navigate(-1)}>
						<ArrowLeft />
					</IconButton>
				}
			>
				<Typography tag="h2" variant="h2">
					Профиль
				</Typography>
			</AdaptivePageHeader>
			<ProfileForm onSubmit={handleSubmitProfile} points={points} />
			<BottomNavigation />
			<ToastProvider>
				<Toast variant={toastVariant} onOpenChange={closeToast} open={toastIsOpened}>
					{toastMessage}
				</Toast>
			</ToastProvider>
		</div>
	);
};
