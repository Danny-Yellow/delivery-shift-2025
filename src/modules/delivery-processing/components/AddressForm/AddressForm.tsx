import type { Address } from '@src/shared/types';
import type { ReactNode } from 'react';

import { handleOnlyNumbers } from '@src/shared/helpers';
import { Button, ButtonGroup, Form, InputLabel, InputWithPrefix, Typography } from '@src/shared/ui';
import { useDispatch } from '@src/store';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';

import { addressFields } from '../../constants/addressFields';
import { AddressFormSchema } from '../../lib/AddressFormSchema';
import { decrementStep, incrementStep } from '../../store';

export const AddressForm = ({
	onSubmit,
	defaultValues,
	children,
}: {
	onSubmit: (value: Address) => void;
	defaultValues: Address;
	children?: ReactNode;
}) => {
	const [continueIsClicked, setContinueIsClicked] = useState(false);

	const dispatch = useDispatch();

	const { Field, Subscribe, handleSubmit } = useForm({
		defaultValues: {
			apartment: defaultValues?.apartment ?? '',
			comment: defaultValues?.comment ?? '',
			house: defaultValues?.house ?? '',
			street: defaultValues?.street ?? '',
		},
		onSubmit: ({ value }) => {
			onSubmit(value);
			dispatch(incrementStep());
		},
		validators: {
			onChange: AddressFormSchema,
		},
	});

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
		>
			{addressFields.map(({ label, name, placeholder, format }) => (
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
										const valueWithoutPrefix = event.target.value.split(' ')[1] ?? '';
										handleOnlyNumbers(valueWithoutPrefix, () => handleChange(event.target.value));
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
