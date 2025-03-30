import type { ComponentProps, ReactNode } from 'react';

import { clsx } from 'clsx';
import { Link as RouterLink } from 'react-router';

import styles from './styles.module.scss';

interface LinkProps extends ComponentProps<typeof RouterLink> {
	color?: 'primary' | 'secondary';
	isActive?: boolean;
	startIcon?: ReactNode;
}

export const Link = ({
	className,
	color = 'primary',
	children,
	startIcon,
	isActive,
	...props
}: LinkProps) => (
	<RouterLink
		{...props}
		className={clsx(className, styles.link, styles[color], isActive && styles.active)}
	>
		{startIcon}
		{children}
	</RouterLink>
);
