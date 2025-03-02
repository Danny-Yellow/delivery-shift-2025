import {
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

export const OrderHistory = () => {
	return (
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
					<TableRow>
						<TableCell>123456789123</TableCell>
						<TableCell>Россия, г. Новосибирск, ул. Кирова, д. 86</TableCell>
						<TableCell>Вручен</TableCell>
						<TableCell>
							<Link to="">
								<Typography underline variant="p_12_regular" color="tertiary">
									Подробнее
								</Typography>
							</Link>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>123456789123</TableCell>
						<TableCell>Россия, г. Новосибирск, ул. Кирова, д. 86</TableCell>
						<TableCell>Вручен</TableCell>
						<TableCell>
							<Link to="">
								<Typography underline variant="p_12_regular" color="tertiary">
									Подробнее
								</Typography>
							</Link>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</>
	);
};
