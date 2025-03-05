import type { OrderStatus } from '@src/shared/types';
import type { ComponentProps } from 'react';

import { StatusWrapper } from '@src/shared/components';
import { STATUS_CODE, STATUS_INDICATOR } from '@src/shared/constants/status';
import { Card, Indicator, InfoRow } from '@src/shared/ui';

import styles from './styles.module.scss';

interface OrderCardProps extends ComponentProps<typeof Card> {
	_id: string;
	house: string;
	point: string;
	status: OrderStatus;
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
			<InfoRow label="Статус">
				<StatusWrapper>
					<Indicator color={STATUS_INDICATOR[status]} />
					<span>{STATUS_CODE[status]}</span>
				</StatusWrapper>
			</InfoRow>
			<InfoRow label="Адрес доставки">
				Россия, г. {point}, {street}, {house}
			</InfoRow>
			<InfoRow label="Тип доставки">{type}</InfoRow>
			{children}
		</Card>
	);
};
