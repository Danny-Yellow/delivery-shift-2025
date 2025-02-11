import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const InputLabel = ({ className, ...props }: ComponentProps<'label'>) => (
	<label className={clsx(className, styles.label)} {...props} />
);
