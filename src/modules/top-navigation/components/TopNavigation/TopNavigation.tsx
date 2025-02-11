import { DeliveryIcon, Exit, Time, User } from '@src/shared/components/Icons';
import { ROUTES } from '@src/shared/constants';
import { Container, Link } from '@src/shared/ui/index';

import styles from './styles.module.scss';

export const TopNavigation = () => {
	return (
		<div className={styles.navigation}>
			<div className={styles.wrapper}>
				<Container>
					<div className={styles.content}>
						<div className={styles.links}>
							<Link to={'/'}>
								<DeliveryIcon />
							</Link>
							<Link startIcon={<User />} to={ROUTES.PROFILE}>
								Профиль
							</Link>
							<Link startIcon={<Time />} to={ROUTES.HISTORY}>
								История
							</Link>
						</div>
						<Link startIcon={<Exit />} to={ROUTES.SIGNIN}>
							Войти
						</Link>
					</div>
				</Container>
			</div>
		</div>
	);
};
