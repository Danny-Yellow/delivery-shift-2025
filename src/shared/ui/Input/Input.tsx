import type { Component, ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
	component?: Component;
	hasError?: boolean;
	size?: 'full';
}

export const Input = ({ className, size = 'full', hasError = false, ...props }: InputProps) => (
	<input
		className={clsx(styles.input, styles[size], hasError && styles.error, className)}
		type="text"
		{...props}
	/>
);
