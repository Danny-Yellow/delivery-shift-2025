import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const Form = ({ className, ...props }: ComponentProps<'form'>) => (
	<form className={clsx(className, styles.form)} {...props} />
);
