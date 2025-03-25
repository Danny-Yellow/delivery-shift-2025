import { DeliveryIcon, Exit, Time, User } from '@src/shared/components/Icons';
import { ROUTES } from '@src/shared/constants';
import { Container, Link } from '@src/shared/ui/index';

import styles from './styles.module.scss';

export const TopNavigation = ({ isAuth, logout }: { isAuth: boolean; logout: () => void }) => {
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
							<Link startIcon={<Time />} to={ROUTES.ORDER_HISTORY}>
								История
							</Link>
						</div>
						{isAuth ? (
							<Link onClick={() => logout()} startIcon={<Exit />} to={''}>
								Выйти
							</Link>
						) : (
							<Link to={ROUTES.AUTH}>Войти</Link>
						)}
					</div>
				</Container>
			</div>
		</div>
	);
};
