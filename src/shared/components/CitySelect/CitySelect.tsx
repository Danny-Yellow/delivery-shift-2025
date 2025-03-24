import type { Point } from '@src/shared/types';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectViewport,
} from '@src/shared/ui';

import { Location, Travel } from '../Icons';

import styles from './styles.module.scss';

type Icon = 'empty' | 'receiver' | 'sender';

interface CitySelectProps {
	icon?: Icon;
	points: Point[];
	triggerPadding?: 'base' | 'xl';
	value: string;
	onChange: (value: Point) => void;
}

export const CitySelect = ({
	value,
	onChange,
	points,
	icon = 'empty',
	triggerPadding = 'base',
}: CitySelectProps) => {
	const startIcon = {
		empty: <></>,
		receiver: <Travel />,
		sender: <Location />,
	};

	return (
		<Select
			value={value}
			onValueChange={(name) => onChange(points.find((point) => point.name === name))}
		>
			<SelectTrigger padding={triggerPadding} startIcon={startIcon[icon]}>
				<SelectValue placeholder="Выберите город" />
			</SelectTrigger>
			<SelectContent className={styles.cities_content}>
				<SelectViewport className={styles.cities_viewport}>
					{points.map((point) => (
						<SelectItem key={point.id} value={point.name}>
							{point.name}
						</SelectItem>
					))}
				</SelectViewport>
			</SelectContent>
		</Select>
	);
};
