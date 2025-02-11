import type { ReactNode } from 'react';

import { Container } from '@src/shared/ui/index';
import clsx from 'clsx';
import { Outlet } from 'react-router';

import styles from './styles.module.scss';

interface LayoutProps {
	background?: 'primary' | 'secondary';
	header: ReactNode;
}

export const RootLayout = ({ header, background = 'primary' }: LayoutProps) => {
	return (
		<>
			<header>{header}</header>
			<main className={clsx(styles.main, styles[background])}>
				<Container>
					<Outlet />
				</Container>
			</main>
		</>
	);
};
