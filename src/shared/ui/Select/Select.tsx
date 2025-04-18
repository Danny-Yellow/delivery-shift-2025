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
	padding = 'base',
	asChild = false,
	...props
}: ComponentProps<typeof RadixSelect.Trigger> & {
	withChevron?: boolean;
	startIcon?: ReactNode;
	padding?: 'base' | 'xl';
	asChild?: boolean;
}) => (
	<RadixSelect.Trigger
		className={clsx(className, styles.trigger, styles[`trigger_padding_${padding}`])}
		{...props}
	>
		<div className={styles.trigger_content}>
			{startIcon}
			{asChild ? children : <p className={styles.trigger_p}>{children}</p>}
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
	className,
	...props
}: ComponentProps<typeof RadixSelect.Content>) => (
	<RadixSelect.Portal>
		<RadixSelect.Content
			className={clsx(styles.content, className)}
			position={position}
			{...props}
		/>
	</RadixSelect.Portal>
);

export const SelectViewport = RadixSelect.Viewport;

export const SelectItem = ({
	children,
	className,
	...props
}: ComponentProps<typeof RadixSelect.Item>) => (
	<RadixSelect.Item className={clsx(className, styles.item)} {...props}>
		<RadixSelect.ItemText>{children}</RadixSelect.ItemText>
	</RadixSelect.Item>
);

export const SelectButtonGroup = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, styles.button_group)} {...props} />
);

export const SelectButton = ({
	className,
	value,
	type = 'button',
	...props
}: ComponentProps<'button'>) => (
	<button className={clsx(className, styles.button)} type={type} {...props} />
);
