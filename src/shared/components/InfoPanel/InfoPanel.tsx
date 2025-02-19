import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const InfoPanel = ({ className, ...props }: ComponentProps<'div'>) => {
	return <div className={clsx(className, styles.panel)} {...props} />;
};

export const InfoPanelTitle = ({
	className,
	children,
	label,
	...props
}: ComponentProps<'div'> & { label?: string }) => {
	return (
		<div className={clsx(className, styles.title)} {...props}>
			{children}
		</div>
	);
};

export const InfoPanelElement = ({
	className,
	label,
	children,
	asChild = false,
	...props
}: ComponentProps<'div'> & { label?: string; asChild?: boolean }) => {
	return (
		<div className={clsx(className, styles.element)} {...props}>
			{label && <p className={styles.label}>{label}</p>}
			{asChild ? children : <p className={styles.content}>{children}</p>}
		</div>
	);
};
