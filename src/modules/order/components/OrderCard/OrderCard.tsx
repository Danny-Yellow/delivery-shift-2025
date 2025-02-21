import type { ComponentProps } from 'react';

import { Card, InfoRow } from '@src/shared/ui';

import styles from './styles.module.scss';

interface OrderCardProps extends ComponentProps<typeof Card> {
	_id: string;
	house: string;
	point: string;
	status: string;
	street: string;
	type: string;
}

export const OrderCard = ({
	children,
	_id,
	house,
	point,
	status,
	street,
	type,
	...props
}: OrderCardProps) => {
	return (
		<Card className={styles.card} outlined {...props}>
			<InfoRow label="Номер заказа">{_id}</InfoRow>
			<InfoRow label="Статус">Создан</InfoRow>
			<InfoRow label="Адрес доставки">
				Россия, г. {point}, {street}, {house}
			</InfoRow>
			<InfoRow label="Тип доставки">{type}</InfoRow>
			{children}
		</Card>
	);
};
