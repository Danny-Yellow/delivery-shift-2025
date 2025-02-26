import { PhoneInput } from '@src/shared/components';
import { OTPCode } from '@src/shared/components/OTPCode/OTPCode';
import { formatPhone } from '@src/shared/helpers';
import { Button, ButtonGroup, Form, Typography } from '@src/shared/ui';
import { useDispatch, useSelector } from '@src/store';
import { useForm } from '@tanstack/react-form';

import { createOtpThunk, selectIsContinued } from '../../store';

export const Auth = () => {
	const dispatch = useDispatch();

	const isContinued = useSelector(selectIsContinued);

	const { Field, Subscribe, handleSubmit } = useForm({
		defaultValues: {
			phone: '',
			code: '',
		},
		onSubmit: ({ value }) => {
			if (isContinued) {
				return '';
			}

			dispatch(createOtpThunk({ phone: value.phone }));
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
					<PhoneInput value={state.value} onChange={(event) => handleChange(event.target.value)} />
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
							<OTPCode value={state.value} onChange={(event) => handleChange(event)} />
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
				</>
			)}
		</Form>
	);
};
