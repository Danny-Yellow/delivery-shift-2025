import type { ReactNode } from 'react';

import { Container } from '@src/ui/index';
import { Outlet } from 'react-router';

interface LayoutProps {
	header: ReactNode;
}

export const Layout = ({ header }: LayoutProps) => {
	return (
		<>
			<header>{header}</header>
			<main>
				<Container>
					<Outlet />
				</Container>
			</main>
		</>
	);
};
