import type { Person } from '@src/shared/types';

import { PhoneInput } from '@src/shared/components/PhoneInput/PhoneInput';
import { stripNonDigits } from '@src/shared/helpers';
import { Button, ButtonGroup, Form, Input, InputLabel, Typography } from '@src/shared/ui';
import { useDispatch } from '@src/store';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';

import { personalFields } from '../../constants/reiceiverFields';
import { PersonalFormSchema } from '../../lib/PersonalFormSchema';
import { decrementStep, incrementStep } from '../../store';

export const PersonalForm = ({
	onSubmit,
	defaultValues,
}: {
	onSubmit: (value: Person) => void;
	defaultValues: Person;
}) => {
	const [continueIsClicked, setContinueIsClicked] = useState(false);

	const dispatch = useDispatch();

	const { Field, Subscribe, handleSubmit } = useForm<Person>({
		defaultValues: {
			firstname: defaultValues?.firstname ?? '',
			lastname: defaultValues?.lastname ?? '',
			middlename: defaultValues?.middlename ?? '',
			phone: defaultValues?.phone ?? '',
		},
		onSubmit: ({ value }) => {
			onSubmit({ ...value, phone: stripNonDigits(value.phone) });
			dispatch(incrementStep());
		},
		validators: {
			onChange: PersonalFormSchema,
		},
	});

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
		>
			{personalFields.map(({ label, name, placeholder }) => (
				<Field
					key={name}
					children={({ state, handleChange }) => {
						const error = state.meta.errors[0]?.toString().split(', ')[0];
						const errorIsShown = continueIsClicked && !!error;

						return (
							<InputLabel>
								<Typography variant="p_14_regular" color={errorIsShown ? 'error' : 'primary'}>
									{label}
								</Typography>
								{name === 'phone' ? (
									<PhoneInput
										value={state.value}
										hasError={errorIsShown}
										onChange={(event) => {
											handleChange(event.target.value);
										}}
										placeholder={placeholder}
									/>
								) : (
									<Input
										value={state.value}
										hasError={errorIsShown}
										onChange={(event) => {
											handleChange(event.target.value);
										}}
										placeholder={placeholder}
									/>
								)}
								{continueIsClicked && !!state.meta.errors.length && (
									<Typography variant="p_14_regular" color="error">
										{error}
									</Typography>
								)}
							</InputLabel>
						);
					}}
					name={name}
				/>
			))}
			<ButtonGroup>
				<Button variant="outlined" onClick={() => dispatch(decrementStep())}>
					Назад
				</Button>
				<Subscribe
					children={() => {
						return (
							<Button type="submit" onClick={() => setContinueIsClicked(true)}>
								Продолжить
							</Button>
						);
					}}
					selector={(state) => state}
				/>
			</ButtonGroup>
		</Form>
	);
};
