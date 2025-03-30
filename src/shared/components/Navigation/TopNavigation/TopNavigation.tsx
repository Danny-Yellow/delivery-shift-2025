import { DeliveryIcon, Exit, Time, User } from '@src/shared/components/Icons';
import { ROUTES } from '@src/shared/constants';
import { Container, Link } from '@src/shared/ui/index';
import { Link as RouterLink, useLocation } from 'react-router';

import styles from './styles.module.scss';

export const TopNavigation = ({ isAuth, logout }: { isAuth: boolean; logout: () => void }) => {
	const { pathname } = useLocation();

	return (
		<div className={styles.navigation}>
			<div className={styles.wrapper}>
				<Container>
					<div className={styles.content}>
						<div className={styles.links}>
							<RouterLink to={'/'}>
								<DeliveryIcon />
							</RouterLink>
							<Link
								className={styles.link}
								isActive={pathname === ROUTES.PROFILE}
								startIcon={<User />}
								to={ROUTES.PROFILE}
							>
								Профиль
							</Link>
							<Link
								className={styles.link}
								isActive={pathname === ROUTES.ORDER_HISTORY}
								startIcon={<Time />}
								to={ROUTES.ORDER_HISTORY}
							>
								История
							</Link>
						</div>
						{isAuth ? (
							<Link onClick={() => logout()} startIcon={<Exit />} to={''}>
								Выйти
							</Link>
						) : (
							<Link isActive={pathname === ROUTES.AUTH} to={ROUTES.AUTH}>
								Войти
							</Link>
						)}
					</div>
				</Container>
			</div>
		</div>
	);
};
