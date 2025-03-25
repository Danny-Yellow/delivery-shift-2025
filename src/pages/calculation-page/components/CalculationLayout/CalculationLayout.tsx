import { AuthTopNavigation } from '@src/modules/session';
import { Container } from '@src/shared/ui/index';
import clsx from 'clsx';
import { Outlet } from 'react-router';

import styles from './styles.module.scss';

export const CalculationLayout = () => {
	return (
		<>
			<header>
				<AuthTopNavigation />
			</header>
			<main className={clsx(styles.main)}>
				<Container>
					<Outlet />
				</Container>
			</main>
		</>
	);
};
