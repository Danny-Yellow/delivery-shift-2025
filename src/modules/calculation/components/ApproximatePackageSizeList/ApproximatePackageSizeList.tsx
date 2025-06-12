import type { PackageType, PackageTypeId } from '@src/shared/types';

import { SelectItem, SelectItemText } from '@radix-ui/react-select';
import { envelope, packageL, packageM, packageS } from '@src/assets/images/packages';
import { Typography } from '@src/shared/ui/Typography/Typography';

import styles from './styles.module.scss';

const packageImg: Record<PackageTypeId, string> = {
	envelope,
	'box-s': packageS,
	'box-m': packageM,
	'box-l': packageL,
	'box-xl': packageL,
	bag: packageL,
	pallet: packageL,
};

interface ApproximatePackageSizeListProps {
	packageTypes: PackageType[];
}

export const ApproximatePackageSizeList = ({ packageTypes }: ApproximatePackageSizeListProps) => {
	return (
		<ul className={styles.list}>
			{packageTypes.map((packageType) => {
				return (
					<SelectItem key={packageType.id} className={styles.item} value={packageType.id}>
						<img alt={packageType.name} src={packageImg[packageType.id]} />
						<div className={styles.info}>
							<Typography tag="h3" variant="h3">
								<SelectItemText>{packageType.name}</SelectItemText>
							</Typography>
							<Typography variant="p_12_regular" color="tertiary">
								{packageType.length}х{packageType.width}х{packageType.height} см
							</Typography>
						</div>
					</SelectItem>
				);
			})}
		</ul>
	);
};
