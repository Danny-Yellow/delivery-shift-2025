import type { ReactNode } from 'react';

import { useDeviceDetect } from '@src/shared/hooks';

import styles from './styles.module.scss';

export const AdaptivePageHeader = ({
	children,
	mobileButton,
}: {
	children?: ReactNode;
	mobileButton?: ReactNode;
}) => {
	const { isMobile } = useDeviceDetect();

	return (
		<header className={styles.header}>
			{isMobile && mobileButton}
			{children}
		</header>
	);
};
