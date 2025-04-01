import { Calculator, Time, User } from '@src/shared/components/Icons';
import { ROUTES } from '@src/shared/constants';
import { Typography } from '@src/shared/ui';
import clsx from 'clsx';
import { NavLink } from 'react-router';

import styles from './styles.module.scss';

export const BottomNavigation = () => {
	return (
		<>
			<nav className={styles.navigation}>
				<NavLink
					className={({ isActive }) => clsx(styles.button, isActive && styles.active)}
					to={'/'}
				>
					<Calculator />
					<Typography className={styles.paragraph} variant="p_12_regular">
						Расчет
					</Typography>
				</NavLink>

				<NavLink
					className={({ isActive }) => clsx(styles.button, isActive && styles.active)}
					to={ROUTES.ORDER_HISTORY}
				>
					<Time />
					<Typography className={styles.paragraph} variant="p_12_regular">
						История
					</Typography>
				</NavLink>

				<NavLink
					className={({ isActive }) => clsx(styles.button, isActive && styles.active)}
					to={ROUTES.PROFILE}
				>
					<User />
					<Typography className={styles.paragraph} variant="p_12_regular">
						Профиль
					</Typography>
				</NavLink>
			</nav>
			<div className={styles.height} />
		</>
	);
};
