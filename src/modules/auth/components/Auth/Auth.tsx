import type { Signin } from '@src/shared/types';

import { OTPCode, PhoneInput } from '@src/shared/components';
import { formatPhone } from '@src/shared/helpers';
import { Button, ButtonGroup, Form, Typography } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useForm } from '@tanstack/react-form';

import { createOtpThunk, selectIsContinued, selectRetryDelay, setIsContinued } from '../../store';
import { ResendCodeManager } from '../ResendCodeManager/ResendCodeManager';

export const Auth = ({ signin }: { signin: (data: Signin) => void }) => {
	const isContinued = useSelector(selectIsContinued);
	const retryDelay = useSelector(selectRetryDelay);

	const dispatch = useDispatch();

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
			<Typography variant="h2">Авторизация</Typography>
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
								<Button disabled={isDisabled} size="lg" type="submit">
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
									<Button disabled={isDisabled} size="lg" type="submit">
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
