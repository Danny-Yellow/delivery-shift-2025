import type { OrderStatus } from '@src/shared/types';
import type { ComponentProps } from 'react';

import { InfoItem, StatusWrapper } from '@src/shared/components';
import { STATUS_CODE, STATUS_INDICATOR } from '@src/shared/constants/status';
import { Card, Indicator } from '@src/shared/ui';

import styles from './styles.module.scss';

interface OrderCardProps extends ComponentProps<typeof Card> {
	_id?: string;
	house?: string;
	point?: string;
	status?: OrderStatus;
	street?: string;
	type?: string;
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
			{_id && <InfoItem label="Номер заказа">{_id}</InfoItem>}
			{status && (
				<InfoItem asChild label="Статус">
					<StatusWrapper>
						<Indicator color={STATUS_INDICATOR[status]} />
						<span>{STATUS_CODE[status]}</span>
					</StatusWrapper>
				</InfoItem>
			)}
			{point && (
				<InfoItem label="Адрес доставки">
					Россия, г. {point}, {street}, {house}
				</InfoItem>
			)}
			{type && <InfoItem label="Тип доставки">{type}</InfoItem>}
			{children}
		</Card>
	);
};
