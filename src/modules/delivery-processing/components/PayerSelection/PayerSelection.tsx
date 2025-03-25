import { Payer } from '@src/shared/types';
import { Button, ButtonGroup, Form, RadioGroup, RadioLabel } from '@src/shared/ui';
import { useDispatch } from '@src/store';
import { useForm } from '@tanstack/react-form';

import { decrementStep, incrementStep, setPayer } from '../../store';

export const PayerSelection = () => {
	const dispatch = useDispatch();

	const { Field, Subscribe, handleSubmit } = useForm<{ payer: Payer | null }>({
		defaultValues: {
			payer: null,
		},
		onSubmit: ({ value }) => {
			dispatch(setPayer(value.payer));
			dispatch(incrementStep());
		},
	});

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
		>
			<Field
				children={({ state, handleChange }) => (
					<RadioGroup onValueChange={(value) => handleChange(value as Payer)}>
						<RadioLabel checked={state.value === 'RECEIVER'} value={Payer.RECEIVER}>
							Получатель
						</RadioLabel>
						<RadioLabel checked={state.value === 'SENDER'} value={Payer.SENDER}>
							Отправитель
						</RadioLabel>
					</RadioGroup>
				)}
				name="payer"
			/>

			<ButtonGroup>
				<Button variant="outlined" onClick={() => dispatch(decrementStep())}>
					Назад
				</Button>
				<Subscribe
					children={({ values }) => (
						<Button disabled={!values.payer} type="submit">
							Продолжить
						</Button>
					)}
					selector={(state) => state}
				/>
			</ButtonGroup>
		</Form>
	);
};
