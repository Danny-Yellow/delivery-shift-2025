import type { Adress } from '@src/shared/types';
import type { ReactNode } from 'react';

import { Button, ButtonGroup, Form, InputLabel, InputWithPrefix, Typography } from '@src/shared/ui';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { adressFields } from '../../constants/adressFields';
import { AdressFormSchema } from '../../lib/AdressFormSchema';
import { decrementStep, incrementStep } from '../../store';

export const AdressForm = ({
	onSubmit,
	children,
}: {
	onSubmit: (value: Adress) => void;
	children?: ReactNode;
}) => {
	const [continueIsClicked, setContinueIsClicked] = useState(false);

	const dispatch = useDispatch();

	const defaultValues = adressFields.reduce(
		(prevField, curField) => ({
			...prevField,
			[curField.name]: '',
		}),
		{} as Adress,
	);

	const { Field, Subscribe, handleSubmit } = useForm({
		defaultValues,
		onSubmit: ({ value }) => {
			onSubmit(value);
			dispatch(incrementStep());
		},
		validators: {
			onChange: AdressFormSchema,
		},
	});

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
		>
			{adressFields.map(({ label, name, placeholder, format }) => (
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
								<InputWithPrefix
									prefix={format ?? ''}
									value={state.value}
									onChange={(event) => {
										handleChange(event.target.value);
									}}
									placeholder={placeholder}
								/>
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
			{children}
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
