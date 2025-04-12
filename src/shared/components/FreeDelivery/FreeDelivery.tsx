import type { ComponentProps } from 'react';

import { Typography } from '@src/shared/ui';
import clsx from 'clsx';

import styles from './styles.module.scss';

export const FreeDelivery = ({ className, ...props }: ComponentProps<'div'>) => {
	return (
		<div className={clsx(className, styles.banner)} {...props}>
			<div className={styles.text}>
				<Typography variant="h2" color="invert">
					1+1=3
				</Typography>
				<Typography className={styles.free} variant="p_14_medium" color="invert">
					3-я доставка в подарок!
				</Typography>
			</div>
			<div className={styles.gifts}>
				<img alt="gift" className={styles.gift_m} src="images/gifts/gift_m.svg" />
				<img alt="gift" className={styles.gift_xs} src="images/gifts/gift_xs.svg" />
			</div>
		</div>
	);
};
