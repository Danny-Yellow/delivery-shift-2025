import type { ComponentProps } from 'react';

import * as RadixToast from '@radix-ui/react-toast';
import clsx from 'clsx';

import type { Variant } from './types';

import styles from './styles.module.scss';

export const ToastProvider = ({
	children,
	...props
}: ComponentProps<typeof RadixToast.Provider>) => (
	<RadixToast.Provider duration={4000} swipeDirection="right" {...props}>
		{children}
		<RadixToast.Viewport className={styles.viewport} />
	</RadixToast.Provider>
);

export const Toast = ({
	className,
	children,
	variant,
	...props
}: ComponentProps<typeof RadixToast.Root> & { variant: Variant }) => (
	<RadixToast.Root className={styles.root} {...props}>
		<div className={clsx(styles.indicator, styles[variant])} />
		<div className={styles.content}>{children}</div>
	</RadixToast.Root>
);

// export const ToastTitle = ({ className, ...props }: ComponentProps<typeof RadixToast.Title>) => (
// 	<RadixToast.Title className={styles.title} {...props} />
// );
