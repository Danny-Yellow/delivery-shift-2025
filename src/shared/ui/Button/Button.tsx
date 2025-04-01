import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
	isLoading?: boolean;
	size?: 'full' | 'lg' | 'sm';
	variant?: 'contained' | 'outlined';
}

export const Button = ({
	className,
	type = 'button',
	variant = 'contained',
	size = 'full',
	isLoading = false,
	children,
	...props
}: ButtonProps) => (
	<button
		className={clsx(
			className,
			styles[variant],
			styles[size],
			styles.button,
			isLoading && styles.loading,
		)}
		type={type}
		{...props}
	>
		<div className={styles.spinner} />
		{children}
	</button>
);

export const ButtonGroup = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, styles.group)} {...props} />
);
