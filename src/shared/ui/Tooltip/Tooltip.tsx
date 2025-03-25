import type { ComponentProps } from 'react';

import * as RadixTooltip from '@radix-ui/react-tooltip';
import clsx from 'clsx';

import styles from './styles.module.scss';

export const Tooltip = (props: ComponentProps<typeof RadixTooltip.Root>) => (
	<RadixTooltip.Provider delayDuration={300}>
		<RadixTooltip.Root {...props} />
	</RadixTooltip.Provider>
);

export const TooltipTrigger = (props: ComponentProps<typeof RadixTooltip.Trigger>) => (
	<RadixTooltip.Trigger asChild {...props} />
);

export const TooltipContent = ({
	className,
	children,
	...props
}: ComponentProps<typeof RadixTooltip.Content>) => (
	<RadixTooltip.Portal>
		<RadixTooltip.Content className={clsx(className, styles.content)} {...props}>
			{children}
			<RadixTooltip.Arrow className={styles.arrow} />
		</RadixTooltip.Content>
	</RadixTooltip.Portal>
);

export const TooltipHeader = ({ className, ...props }: ComponentProps<'header'>) => (
	<header className={clsx(className, styles.header)} {...props} />
);

export const TooltipBody = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, styles.body)} {...props} />
);
