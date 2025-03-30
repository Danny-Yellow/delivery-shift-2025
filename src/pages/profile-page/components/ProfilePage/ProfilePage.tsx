import type { UpdateProfile } from '@src/shared/api';

import { getPointsThunk, selectPoints } from '@src/modules/points';
import { ProfileForm, updateProfileThunk } from '@src/modules/session';
import { AdaptivePageHeader } from '@src/shared/components';
import { Toast, ToastProvider, Typography, useToast } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useEffect } from 'react';

import styles from './styles.module.scss';

export const ProfilePage = () => {
	const { toastIsOpened, toastVariant, openToast, closeToast, toastMessage } = useToast();

	const dispatch = useDispatch();

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
			<AdaptivePageHeader>
				<Typography tag="h2" variant="h2">
					Профиль
				</Typography>
			</AdaptivePageHeader>
			<ProfileForm onSubmit={handleSubmitProfile} points={points} />
			<ToastProvider>
				<Toast variant={toastVariant} onOpenChange={closeToast} open={toastIsOpened}>
					{toastMessage}
				</Toast>
			</ToastProvider>
		</div>
	);
};
