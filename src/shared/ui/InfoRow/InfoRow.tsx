import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const InfoRow = ({
	className,
	label,
	children,
	asChild = false,
	size = 'full',
	...props
}: ComponentProps<'div'> & { label?: string; asChild?: boolean; size?: 'full' | 'md' }) => {
	return (
		<div className={clsx(className, styles.element, styles[size])} {...props}>
			{label && <p className={styles.label}>{label}</p>}
			{asChild ? children : <p className={styles.content}>{children}</p>}
		</div>
	);
};
