import { PhoneInput } from '@src/shared/components';
import { Button, ButtonGroup, Form, Typography } from '@src/shared/ui';

export const Auth = () => {
	return (
		<Form>
			<Typography variant="h2">Авторизация</Typography>
			<Typography variant="p_16_regular">
				Введите номер телефона для входа в личный кабинет
			</Typography>
			<PhoneInput />
			<ButtonGroup>
				<Button size="lg">Продолжить</Button>
			</ButtonGroup>
		</Form>
	);
};
