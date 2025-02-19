import type { Person } from '@src/shared/types';

import { formatPhone } from '@src/shared/helpers';
import { Button, ButtonGroup, Form, Input, InputLabel, Typography } from '@src/shared/ui';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';

import { personalFields } from '../../constants/reiceiverFields';
import { PersonalFormSchema } from '../../lib/ReceiverFormSchema';
import { decrementStep, incrementStep } from '../../store';

export const PersonalForm = ({ onSubmit }: { onSubmit: (value: Person) => void }) => {
	const [continueIsClicked, setContinueIsClicked] = useState(false);

	const dispatch = useDispatch();

	const defaultValues = personalFields.reduce(
		(prevField, curField) => ({
			...prevField,
			[curField.name]: '',
		}),
		{} as Person,
	);

	const { Field, Subscribe, handleSubmit } = useForm({
		defaultValues,
		onSubmit: ({ value }) => {
			onSubmit({ ...value, phone: formatPhone(value.phone) });
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
									<PatternFormat
										mask="_"
										value={state.value}
										customInput={Input}
										format="+7 (###) ### ##-##"
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
