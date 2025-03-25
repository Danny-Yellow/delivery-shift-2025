import type { OrderWithStatus } from '@src/shared/types';

import { StatusWrapper } from '@src/shared/components';
import { ROUTES } from '@src/shared/constants';
import { STATUS_CODE, STATUS_INDICATOR } from '@src/shared/constants/status';
import {
	Indicator,
	Link,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Typography,
} from '@src/shared/ui';

import styles from './styles.module.scss';

export const OrderHistory = ({ orders }: { orders: OrderWithStatus[] }) => (
	<>
		<Typography tag="h2" variant="h2">
			История
		</Typography>
		<Table className={styles.table}>
			<TableHeader>
				<TableRow>
					<TableHead>Номер заказа</TableHead>
					<TableHead className={styles.address_td}>Адрес доставки</TableHead>
					<TableHead>Статус заказа</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{orders?.map((order) => (
					<TableRow key={order._id}>
						<TableCell>{order._id}</TableCell>
						<TableCell>
							Россия, г. {order.receiverPoint.name}, {order.receiverAddress.street},{' '}
							{order.receiverAddress.house}
						</TableCell>
						<TableCell>
							<StatusWrapper>
								<Indicator color={STATUS_INDICATOR[order.status]} />
								<span>{STATUS_CODE[order.status]}</span>
							</StatusWrapper>
						</TableCell>
						<TableCell>
							<Link to={ROUTES.ORDER_DETAILS.replace(':id', order._id)}>
								<Typography underline variant="p_12_regular" color="tertiary">
									Подробнее
								</Typography>
							</Link>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</>
);
