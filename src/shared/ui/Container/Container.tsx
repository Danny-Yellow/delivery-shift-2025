import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const Container = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(styles.container, className)} {...props} />
);
