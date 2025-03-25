import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
	size?: 'full' | 'lg' | 'sm';
	variant?: 'contained' | 'outlined';
}

export const Button = ({
	className,
	type = 'button',
	variant = 'contained',
	size = 'full',
	...props
}: ButtonProps) => (
	<button
		className={clsx(className, styles[variant], styles[size], styles.button)}
		type={type}
		{...props}
	/>
);

export const ButtonGroup = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, styles.group)} {...props} />
);
