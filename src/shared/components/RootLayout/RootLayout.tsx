import type { ReactNode } from 'react';

import { Container } from '@src/shared/ui/index';
import { Outlet } from 'react-router';

import styles from './styles.module.scss';

interface LayoutProps {
	header: ReactNode;
}

export const RootLayout = ({ header }: LayoutProps) => {
	return (
		<>
			<header>{header}</header>
			<main className={styles.main}>
				<Container>
					<Outlet />
				</Container>
			</main>
		</>
	);
};
