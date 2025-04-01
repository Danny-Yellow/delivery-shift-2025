import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface SpinnerProps extends ComponentProps<'div'> {
	size?: 'lg' | 'md' | 'sm';
}

export const Spinner = ({ size = 'md', className, ...props }: SpinnerProps) => {
	return (
		<div className={clsx(styles.spinner, className)} {...props}>
			<div className={clsx(styles.circle, styles[size])} />
		</div>
	);
};
