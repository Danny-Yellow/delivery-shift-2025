import { DeliveryIcon, Exit, Time, User } from '@src/components/Icons';
import { Container } from '@src/ui/Container/Container';
import { Link } from '@src/ui/index';

import styles from './styles.module.scss';

export const TopNavigation = () => {
	return (
		<div className={styles.navigation}>
			<Container>
				<div className={styles.content}>
					<div className={styles.links}>
						<Link to={'/'}>
							<DeliveryIcon />
						</Link>
						<Link startIcon={<User />} to={''}>
							Профиль
						</Link>
						<Link startIcon={<Time />} to={''}>
							История
						</Link>
					</div>
					<Link startIcon={<Exit />} to={''}>
						Выйти
					</Link>
				</div>
			</Container>
		</div>
	);
};
