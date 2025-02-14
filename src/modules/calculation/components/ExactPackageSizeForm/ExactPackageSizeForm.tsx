import { Button } from '@src/shared/ui/Button/Button';
import { Input } from '@src/shared/ui/Input/Input';
import { Typography } from '@src/shared/ui/Typography/Typography';
import { useDispatch, useSelector } from '@src/store';
import { useForm } from '@tanstack/react-form';

import type { ExactPackageSizeField } from '../../types/ExactPackageSizeForm';

import { exactPackageSizeFields } from '../../constants/exactPackageSizeFields';
import { getSelectedPackageTypeSelector, setSelectedPackageType } from '../../store';

import styles from './styles.module.scss';

export const ExactPackageSizeForm = ({ onSubmit }: { onSubmit?: () => void }) => {
	const dispatch = useDispatch();

	const packageSize = useSelector(getSelectedPackageTypeSelector);

	const defaultValues = exactPackageSizeFields.reduce(
		(prevField, curField) => ({
			...prevField,
			[curField.name]: String(packageSize?.[curField.name] ?? ''),
		}),
		{} as Record<ExactPackageSizeField['name'], string>,
	);

	const { Field, Subscribe, handleSubmit } = useForm({
		defaultValues,
		onSubmit: ({ value }) => {
			dispatch(
				setSelectedPackageType({
					height: +value.height,
					weight: +value.weight,
					width: +value.width,
					length: +value.length,
					id: '',
					name: `${value.length}x${value.height}x${value.width}`,
				}),
			);
		},
	});

	return (
		<form
			className={styles.form}
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
				onSubmit();
			}}
		>
			{exactPackageSizeFields.map(({ label, placeholder, name }) => (
				<Field
					key={label}
					children={({ state, handleChange }) => (
						<label className={styles.label}>
							<Typography className={styles.description} variant="p_16_regular" color="secondary">
								{label}
							</Typography>
							<Input
								value={state.value}
								onChange={(event) => {
									const value = event.target.value;

									if (/^\d*$/.test(value)) handleChange(value);
								}}
								placeholder={placeholder}
							/>
						</label>
					)}
					name={name}
				/>
			))}
			<Subscribe
				children={({ values }) => {
					const hasEmptyFields = Object.values(values).some((value) => {
						return !value.length;
					});

					return (
						<Button disabled={hasEmptyFields} type="submit">
							Подтвердить
						</Button>
					);
				}}
				selector={(state) => state}
			/>
		</form>
	);
};
