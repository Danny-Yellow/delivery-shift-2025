import { Email, Location, Travel } from '@src/shared/components';
import {
	InputLabel,
	Select,
	SelectButton,
	SelectButtonGroup,
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

import { useCalculateDeliveryForm } from '../../hooks/useCalculateDeliveryForm';
import { getPackageTypesSelector, getPointsSelector } from '../../store';
import { ApproximatePackageSizeList } from '../ApproximatePackageSizeList/ApproximatePackageSizeList';
import { ExactPackageSizeForm } from '../ExactPackageSizeForm/ExactPackageSizeForm';

import styles from './styles.module.scss';

export const CalculateDeliveryForm = () => {
	const { data: points } = useSelector(getPointsSelector);
	const { data: packageTypes } = useSelector(getPackageTypesSelector);

	const {
		isOpenPackageType,
		selectedPackageType,
		selectedPoints,
		handleSenderPointSelect,
		handleReiceiverPointSelect,
		handlePackageTypeSelect,
		handlePackageTypeOpenChange,
		handleCalculateDeliverySubmit,
	} = useCalculateDeliveryForm();

	const buttonIsDisabled = [
		selectedPackageType,
		selectedPoints.reiceiverPoint,
		selectedPoints.senderPoint,
	].includes(null);

	return (
		<form className={styles.form} onSubmit={handleCalculateDeliverySubmit}>
			<div className={styles.header}>
				<Typography variant="h2">Рассчитать доставку</Typography>
			</div>
			<div className={styles.content}>
				<InputLabel>
					<Typography variant="p_14_medium">Размер посылки</Typography>
					<Select
						value={selectedPackageType?.id}
						onOpenChange={(isOpen) => handlePackageTypeOpenChange(isOpen)}
						onValueChange={handlePackageTypeSelect}
						open={isOpenPackageType}
					>
						<SelectTrigger startIcon={<Email />}>
							{selectedPackageType?.name ?? 'Выберите размер'}
						</SelectTrigger>
						<SelectContent>
							<Tabs defaultValue="approximate">
								<TabsList className={styles.tabs_list}>
									<TabsTrigger value="approximate">Примерные</TabsTrigger>
									<TabsTrigger value="exact">Точные</TabsTrigger>
								</TabsList>
								<TabsContent className={styles.tabs_content} value="approximate">
									<ApproximatePackageSizeList packageTypes={packageTypes} />
								</TabsContent>
								<TabsContent className={styles.tabs_content} value="exact">
									<ExactPackageSizeForm onSubmit={() => handlePackageTypeOpenChange(false)} />
								</TabsContent>
							</Tabs>
						</SelectContent>
					</Select>
				</InputLabel>
				<InputLabel>
					<Typography variant="p_14_medium">Город отправки</Typography>
					<Select value={selectedPoints.senderPoint?.id} onValueChange={handleSenderPointSelect}>
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
					<SelectButtonGroup>
						{points.slice(0, 3).map((point) => (
							<SelectButton
								key={point.id}
								value={point.id}
								onClick={() => handleSenderPointSelect(point.id)}
							>
								{point.name}
							</SelectButton>
						))}
					</SelectButtonGroup>
				</InputLabel>
				<InputLabel>
					<Typography variant="p_14_medium">Город назначения</Typography>
					<Select
						value={selectedPoints.reiceiverPoint?.id}
						onValueChange={handleReiceiverPointSelect}
					>
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
					<SelectButtonGroup>
						{points.slice(0, 3).map((point) => (
							<SelectButton
								key={point.id}
								value={point.id}
								onClick={() => handleReiceiverPointSelect(point.id)}
							>
								{point.name}
							</SelectButton>
						))}
					</SelectButtonGroup>
				</InputLabel>
				<Button disabled={buttonIsDisabled} type="submit">
					Рассчитать
				</Button>
			</div>
		</form>
	);
};
