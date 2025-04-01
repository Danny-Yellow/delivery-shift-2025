import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const InfoPanel = ({ className, ...props }: ComponentProps<'div'>) => {
	return <div className={clsx(className, styles.panel)} {...props} />;
};

export const InfoGroup = ({
	className,
	children,
	...props
}: ComponentProps<'div'> & { label?: string }) => {
	return (
		<div className={clsx(className, styles.group)} {...props}>
			{children}
		</div>
	);
};

export const InfoTitle = ({
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

export const InfoItem = ({
	className,
	label,
	children,
	asChild = false,
	size = 'full',
	...props
}: ComponentProps<'div'> & { label?: string; asChild?: boolean; size?: 'full' | 'md' }) => {
	return (
		<div className={clsx(className, styles.item, styles[`item_${size}`])} {...props}>
			{label && <p className={styles.label}>{label}</p>}
			{asChild ? children : <p className={styles.item_content}>{children}</p>}
		</div>
	);
};
