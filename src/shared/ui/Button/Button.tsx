import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
	size?: 'full';
	variant?: 'contained' | 'outlined';
}

export const Button = ({
	className,
	type = 'button',
	variant = 'contained',
	size,
	...props
}: ButtonProps) => (
	<button
		className={clsx(className, styles[variant], styles[size], styles.button)}
		type={type}
		{...props}
	/>
);
