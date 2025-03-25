import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

interface CardProps extends ComponentProps<'div'> {
	color?: 'primary' | 'transparent';
	outlined?: boolean;
}

export const Card = ({
	className,
	color = 'transparent',
	outlined = false,
	...props
}: CardProps) => {
	return (
		<div
			className={clsx(className, styles.card, styles[color], outlined && styles.outlined)}
			{...props}
		/>
	);
};
