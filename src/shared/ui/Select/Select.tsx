import type { ComponentProps, ReactNode } from 'react';

import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDown } from '@src/shared/components';
import clsx from 'clsx';

import styles from './styles.module.scss';

export const Select = RadixSelect.Root;

export const SelectValue = RadixSelect.Value;

export const SelectTrigger = ({
	className,
	withChevron = true,
	startIcon = null,
	children,
	...props
}: ComponentProps<typeof RadixSelect.Trigger> & {
	withChevron?: boolean;
	startIcon?: ReactNode;
}) => (
	<RadixSelect.Trigger className={clsx(className, styles.trigger)} {...props}>
		<div className={styles.trigger_content}>
			{startIcon}
			{children}
		</div>

		{withChevron && (
			<RadixSelect.Icon asChild>
				<ChevronDown />
			</RadixSelect.Icon>
		)}
	</RadixSelect.Trigger>
);

export const SelectContent = ({
	position = 'popper',
	...props
}: ComponentProps<typeof RadixSelect.Content>) => (
	<RadixSelect.Portal>
		<RadixSelect.Content className={styles.content} position={position} {...props} />
	</RadixSelect.Portal>
);

export const SelectViewport = ({
	className,
	...props
}: ComponentProps<typeof RadixSelect.Viewport>) => (
	<RadixSelect.Viewport className={clsx(styles.viewport, className)} {...props} />
);

export const SelectItem = ({ children, ...props }: ComponentProps<typeof RadixSelect.Item>) => (
	<RadixSelect.Item className={styles.item} {...props}>
		<RadixSelect.ItemText>{children}</RadixSelect.ItemText>
	</RadixSelect.Item>
);
