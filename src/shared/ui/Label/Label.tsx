import type { ComponentProps } from 'react';

import styles from './styles.module.scss';

export const Label = ({ ...props }: ComponentProps<'label'>) => {
	return <label className={styles.label} {...props} />;
};
