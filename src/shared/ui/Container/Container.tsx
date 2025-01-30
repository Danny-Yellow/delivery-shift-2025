import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const Container = ({ children, className }: ComponentProps<'div'>) => (
	<div className={clsx(styles.container, className)}>{children}</div>
);
