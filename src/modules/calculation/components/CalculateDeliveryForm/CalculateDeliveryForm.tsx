import type { Point } from '@src/shared/types';

import { Email } from '@src/shared/components';
import { CitySelect } from '@src/shared/components/CitySelect/CitySelect';
import {
	InputLabel,
	Select,
	SelectButton,
	SelectButtonGroup,
	SelectContent,
	SelectTrigger,
	Spinner,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@src/shared/ui';
import { Button } from '@src/shared/ui/Button/Button';
import { Typography } from '@src/shared/ui/Typography/Typography';
import { useSelector } from '@src/store';

import { useCalculateDeliveryForm } from '../../hooks/useCalculateDeliveryForm';
import { selectPackageTypes } from '../../store';
import { ApproximatePackageSizeList } from '../ApproximatePackageSizeList/ApproximatePackageSizeList';
import { ExactPackageSizeForm } from '../ExactPackageSizeForm/ExactPackageSizeForm';

import styles from './styles.module.scss';

export const CalculateDeliveryForm = ({
	points,
	isLoading,
}: {
	points: Point[];
	isLoading: boolean;
}) => {
	const { data: packageTypes } = useSelector(selectPackageTypes);

	const {
		isOpenPackageType,
		selectedPackageType,
		selectedPoints,
		deliveryOptions,
		handleSenderPointSelect,
		handleReiceiverPointSelect,
		handlePackageTypeSelect,
		handlePackageTypeOpenChange,
		handleCalculateDeliverySubmit,
	} = useCalculateDeliveryForm();

	const buttonIsDisabled = [
		selectedPackageType,
		selectedPoints.receiverPoint,
		selectedPoints.senderPoint,
	].includes(null);

	return (
		<form className={styles.form} onSubmit={handleCalculateDeliverySubmit}>
			<div className={styles.header}>
				<Typography variant="h2">Рассчитать доставку</Typography>
			</div>
			<div className={styles.content}>
				{isLoading ? (
					<Spinner />
				) : (
					<>
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
							<CitySelect
								value={selectedPoints.senderPoint?.name}
								icon="sender"
								onChange={handleSenderPointSelect}
								points={points}
							/>
							<SelectButtonGroup>
								{points.slice(0, 3).map((point) => (
									<SelectButton
										key={point.id}
										value={point.id}
										onClick={() => handleSenderPointSelect(point)}
									>
										{point.name}
									</SelectButton>
								))}
							</SelectButtonGroup>
						</InputLabel>
						<InputLabel>
							<Typography variant="p_14_medium">Город назначения</Typography>
							<CitySelect
								value={selectedPoints.receiverPoint?.name}
								icon="receiver"
								onChange={handleReiceiverPointSelect}
								points={points}
							/>
							<SelectButtonGroup>
								{points.slice(0, 3).map((point) => (
									<SelectButton
										key={point.id}
										value={point.id}
										onClick={() => handleReiceiverPointSelect(point)}
									>
										{point.name}
									</SelectButton>
								))}
							</SelectButtonGroup>
						</InputLabel>
						<Button disabled={buttonIsDisabled} type="submit" isLoading={deliveryOptions.isLoading}>
							Рассчитать
						</Button>
					</>
				)}
			</div>
		</form>
	);
};
