import { Email, Location, Travel } from '@src/shared/components';
import {
	Label,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectViewport,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@src/shared/ui';
import { Button } from '@src/shared/ui/Button/Button';
import { Typography } from '@src/shared/ui/Typography/Typography';
import { useSelector } from '@src/store';

import { getPointsSelector } from '../../store';

import styles from './styles.module.scss';

export const CalculateDeliveryForm = () => {
	const { data: points } = useSelector(getPointsSelector);

	return (
		<form className={styles.form}>
			<div className={styles.header}>
				<Typography variant="h2">Рассчитать доставку</Typography>
			</div>
			<div className={styles.content}>
				<Label>
					<Typography variant="p_14_medium">Размер посылки</Typography>
					<Select>
						<SelectTrigger startIcon={<Email />}>
							<SelectValue placeholder="Конверт" />
						</SelectTrigger>
						<SelectContent>
							<SelectViewport>
								<Tabs defaultValue="approximate">
									<TabsList>
										<TabsTrigger value="approximate">Примерные</TabsTrigger>
										<TabsTrigger value="exact">Точные</TabsTrigger>
									</TabsList>
									<TabsContent value="approximate">Контент точных размеров</TabsContent>
									<TabsContent value="exact">Контент примерных размеров</TabsContent>
								</Tabs>
							</SelectViewport>
						</SelectContent>
					</Select>
				</Label>

				<Label>
					<Typography variant="p_14_medium">Город отправки</Typography>
					<Select>
						<SelectTrigger startIcon={<Location />}>
							<SelectValue placeholder="Выберите город" />
						</SelectTrigger>
						<SelectContent className={styles.cities_content}>
							<SelectViewport className={styles.cities_viewport}>
								{points.map((point) => (
									<SelectItem key={point.id} value={point.id}>
										{point.name}
									</SelectItem>
								))}
							</SelectViewport>
						</SelectContent>
					</Select>
				</Label>

				<Label>
					<Typography variant="p_14_medium">Город назначения</Typography>
					<Select>
						<SelectTrigger startIcon={<Travel />}>
							<SelectValue placeholder="Выберите город" />
						</SelectTrigger>
						<SelectContent className={styles.cities_content}>
							<SelectViewport className={styles.cities_viewport}>
								{points.map((point) => (
									<SelectItem key={point.id} value={point.id}>
										{point.name}
									</SelectItem>
								))}
							</SelectViewport>
						</SelectContent>
					</Select>
				</Label>
				<Button>Рассчитать</Button>
			</div>
		</form>
	);
};
