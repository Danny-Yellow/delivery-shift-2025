import type { Signin } from '@src/shared/types';

import { AdaptivePageHeader, Cross, OTPCode, PhoneInput } from '@src/shared/components';
import { formatPhone } from '@src/shared/helpers';
import { Button, ButtonGroup, Form, IconButton, Typography } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useForm } from '@tanstack/react-form';
import { useNavigate } from 'react-router';

import { createOtpThunk, selectIsContinued, selectRetryDelay, setIsContinued } from '../../store';
import { ResendCodeManager } from '../ResendCodeManager/ResendCodeManager';

import styles from './styles.module.scss';

export const Auth = ({
	signin,
	signinIsLoading,
}: {
	signin: (data: Signin) => void;
	signinIsLoading: boolean;
}) => {
	const isContinued = useSelector(selectIsContinued);
	const retryDelay = useSelector(selectRetryDelay);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { Field, Subscribe, handleSubmit, state } = useForm({
		defaultValues: {
			phone: '',
			code: '',
		},
		onSubmit: ({ value }) => {
			const phone = formatPhone(value.phone);

			if (isContinued) {
				signin({ code: +value.code, phone });
				return;
			}

			dispatch(createOtpThunk({ phone }));
		},
	});

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
		>
			<AdaptivePageHeader
				mobileButton={
					<IconButton onClick={() => navigate('/')}>
						<Cross />
					</IconButton>
				}
			>
				<Typography variant="h2">Авторизация</Typography>
			</AdaptivePageHeader>
			<Typography variant="p_16_regular">
				Введите номер телефона для входа в личный кабинет
			</Typography>

			<Field
				children={({ state, handleChange }) => (
					<PhoneInput
						value={state.value}
						onChange={(event) => {
							dispatch(setIsContinued(false));
							handleChange(event.target.value);
						}}
					/>
				)}
				name="phone"
			/>
			{!isContinued ? (
				<ButtonGroup>
					<Subscribe
						children={({ values }) => {
							const isDisabled = formatPhone(values.phone).length !== 11;

							return (
								<Button
									className={styles.button}
									disabled={isDisabled}
									size="lg"
									type="submit"
									isLoading={retryDelay.isLoading}
								>
									Продолжить
								</Button>
							);
						}}
					></Subscribe>
				</ButtonGroup>
			) : (
				<>
					<Field
						children={({ state, handleChange }) => (
							<OTPCode value={state.value} onChange={(value: string) => handleChange(value)} />
						)}
						name="code"
					/>
					<ButtonGroup>
						<Subscribe
							children={({ values }) => {
								const isDisabled = formatPhone(values.code).length !== 6;

								return (
									<Button
										className={styles.button}
										disabled={isDisabled}
										size="lg"
										type="submit"
										isLoading={signinIsLoading}
									>
										Войти
									</Button>
								);
							}}
						></Subscribe>
					</ButtonGroup>
					<ResendCodeManager
						delay={retryDelay.data / 1000}
						retry={() => dispatch(createOtpThunk({ phone: state.values.phone }))}
					/>
				</>
			)}
		</Form>
	);
};
