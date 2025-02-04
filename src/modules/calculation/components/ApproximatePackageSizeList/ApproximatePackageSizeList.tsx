import { Typography } from '@src/shared/ui/Typography/Typography';
import { useSelector } from 'react-redux';

import { getPackageTypesSelector } from '../../store';

import styles from './styles.module.scss';

const packageImg = [
	'/images/packages/envelope.svg',
	'/images/packages/packageS.svg',
	'/images/packages/packageM.svg',
	'/images/packages/packageL.svg',
	'/images/packages/packageL.svg',
];

export const ApproximatePackageSizeList = () => {
	const { data: packageTypes } = useSelector(getPackageTypesSelector);

	return (
		<ul className={styles.list}>
			{packageTypes.map((packageType) => (
				<li key={packageType.id} className={styles.item}>
					<img alt={packageType.name} src={packageImg[+packageType.id - 1]} />
					<div className={styles.info}>
						<Typography tag="h3" variant="h3">
							{packageType.name}
						</Typography>
						<Typography variant="p_12_regular" color="tertiary">
							{packageType.length}х{packageType.width}х{packageType.height} см
						</Typography>
					</div>
				</li>
			))}
		</ul>
	);
};
