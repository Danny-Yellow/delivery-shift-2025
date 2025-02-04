import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
	size?: 'full';
}

export const Input = ({ className, size = 'full', ...props }: InputProps) => (
	<input className={clsx(styles.input, styles[size], className)} type="text" {...props} />
);
