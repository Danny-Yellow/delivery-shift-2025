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
import { Typography } from '@src/shared/ui/Typography/Typography';

import styles from './styles.module.scss';

export const CalculateDeliveryCard = () => {
	return (
		<form className={styles.card}>
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
							<SelectValue placeholder="Москва" />
						</SelectTrigger>
						<SelectContent>
							<SelectViewport className={styles.cities_viewport}>
								<SelectItem value="moscow">Москва</SelectItem>
								<SelectItem value="spb">Санкт-Петербург</SelectItem>
								<SelectItem value="nsk">Новосибирск</SelectItem>
							</SelectViewport>
						</SelectContent>
					</Select>
				</Label>

				<Label>
					<Typography variant="p_14_medium">Город назначения</Typography>
					<Select>
						<SelectTrigger startIcon={<Travel />}>
							<SelectValue placeholder="Москва" />
						</SelectTrigger>
						<SelectContent>
							<SelectViewport className={styles.cities_viewport}>
								<SelectItem value="moscow">Москва</SelectItem>
								<SelectItem value="spb">Санкт-Петербург</SelectItem>
								<SelectItem value="nsk">Новосибирск</SelectItem>
							</SelectViewport>
						</SelectContent>
					</Select>
				</Label>
			</div>
		</form>
	);
};
