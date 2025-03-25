import type { PackageType } from '@src/shared/types';

import { SelectItem, SelectItemText } from '@radix-ui/react-select';
import { Typography } from '@src/shared/ui/Typography/Typography';

import styles from './styles.module.scss';

const packageImg = [
	'/images/packages/envelope.svg',
	'/images/packages/packageS.svg',
	'/images/packages/packageM.svg',
	'/images/packages/packageL.svg',
	'/images/packages/packageL.svg',
];

interface ApproximatePackageSizeListProps {
	packageTypes: PackageType[];
}

export const ApproximatePackageSizeList = ({ packageTypes }: ApproximatePackageSizeListProps) => {
	return (
		<ul className={styles.list}>
			{packageTypes.map((packageType) => (
				<SelectItem key={packageType.id} className={styles.item} value={packageType.id}>
					<img alt={packageType.name} src={packageImg[+packageType.id - 1]} />
					<div className={styles.info}>
						<Typography tag="h3" variant="h3">
							<SelectItemText>{packageType.name}</SelectItemText>
						</Typography>
						<Typography variant="p_12_regular" color="tertiary">
							{packageType.length}х{packageType.width}х{packageType.height} см
						</Typography>
					</div>
				</SelectItem>
			))}
		</ul>
	);
};
