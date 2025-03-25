import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const IconButton = ({ className, ...props }: ComponentProps<'button'>) => {
	return <button className={clsx(className, styles.button)} {...props} />;
};
