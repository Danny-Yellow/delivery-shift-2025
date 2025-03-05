import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export type IndicatorColor = 'attention' | 'error' | 'success';

interface IndicatorProps extends ComponentProps<'span'> {
	color: IndicatorColor;
}

export const Indicator = ({ className, color, ...props }: IndicatorProps) => {
	return <span className={clsx(className, styles.indicator, styles[color])} {...props} />;
};
