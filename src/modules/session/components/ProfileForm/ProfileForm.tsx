import type { UpdateProfile } from '@src/shared/api';
import type { Point } from '@src/shared/types';

import { CitySelect, PhoneInput } from '@src/shared/components';
import { Button, ButtonGroup, Form, Input, InputLabel, Typography } from '@src/shared/ui';
import { useSelector } from '@src/store';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';

import type { FieldInputProps } from './types';

import { PROFILE_FIELDS } from '../../constants/profileForm';
import { ProfileFormSchema } from '../../lib/ProfileFormSchema';
import { selectUser } from '../../store';

import styles from './styles.module.scss';

export const ProfileForm = ({
	points,
	onSubmit,
}: {
	points: Point[];
	onSubmit: (profile: UpdateProfile) => void;
}) => {
	const user = useSelector(selectUser);

	const [updateIsClicked, setUpdateIsClicked] = useState(false);

	const { Field, Subscribe, handleSubmit } = useForm({
		defaultValues: user,
		onSubmit: ({ value }) => {
			const { phone, ...profile } = value;
			onSubmit({ phone, profile });
		},
		validators: {
			onChange: ProfileFormSchema,
		},
	});

	const renderFieldInput = ({
		name,
		placeholder,
		state,
		handleChange,
		errorIsShown,
	}: FieldInputProps) => {
		switch (name) {
			case 'phone':
				return (
					<PhoneInput
						disabled
						value={state.value}
						hasError={errorIsShown}
						onChange={(event) => handleChange(event.target.value)}
						placeholder={placeholder}
					/>
				);
			case 'city':
				return (
					<CitySelect
						triggerPadding="xl"
						value={state.value}
						onChange={(point) => handleChange(point.name)}
						points={points}
					/>
				);
			default:
				return (
					<Input
						value={state.value}
						hasError={errorIsShown}
						onChange={(event) => handleChange(event.target.value)}
						placeholder={placeholder}
					/>
				);
		}
	};

	return (
		<Form
			className={styles.form}
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
		>
			{PROFILE_FIELDS.map(({ label, name, placeholder }) => (
				<Field
					key={name}
					children={({ state, handleChange }) => {
						const error = state.meta.errors[0]?.toString().split(', ')[0];
						const errorIsShown = updateIsClicked && !!error;

						return (
							<InputLabel>
								<Typography variant="p_14_regular" color={errorIsShown ? 'error' : 'primary'}>
									{label}
								</Typography>
								{renderFieldInput({ name, placeholder, state, handleChange, errorIsShown })}
								{errorIsShown && (
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
			<Subscribe
				children={() => (
					<ButtonGroup>
						<Button type="submit" onClick={() => setUpdateIsClicked(true)}>
							Обновить данные
						</Button>
					</ButtonGroup>
				)}
			/>
		</Form>
	);
};
