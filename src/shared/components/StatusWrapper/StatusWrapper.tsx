import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const StatusWrapper = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, styles.wrapper)} {...props} />
);
