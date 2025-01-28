import type { ComponentProps, ReactNode } from 'react';

import { clsx } from 'clsx';
import { Link as RouterLink } from 'react-router';

import styles from './styles.module.scss';

interface LinkProps extends ComponentProps<typeof RouterLink> {
	color?: 'primary' | 'secondary';
	startIcon?: ReactNode;
}

export const Link = ({
	className,
	color = 'primary',
	children,
	startIcon,
	...props
}: LinkProps) => {
	return (
		<RouterLink {...props} className={clsx(className, styles.link, styles[color])}>
			{startIcon}
			{children}
		</RouterLink>
	);
};
