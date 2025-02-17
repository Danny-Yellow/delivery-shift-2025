import type { ComponentProps } from 'react';

import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { Check } from '@src/shared/components';
import clsx from 'clsx';

import styles from './styles.module.scss';

export const RadioGroup = ({
	className,
	...props
}: ComponentProps<typeof RadixRadioGroup.Root>) => (
	<RadixRadioGroup.Root className={clsx(className, styles.root)} {...props} />
);

export const RadioItem = ({ className, ...props }: ComponentProps<typeof RadixRadioGroup.Item>) => (
	<RadixRadioGroup.Item className={clsx(className, styles.item)} {...props}>
		<RadixRadioGroup.Indicator>
			<Check />
		</RadixRadioGroup.Indicator>
	</RadixRadioGroup.Item>
);

export const RadioLabel = ({
	className,
	children,
	...props
}: ComponentProps<typeof RadixRadioGroup.Item>) => (
	<label className={clsx(className, styles.label)}>
		<RadioItem {...props} />
		{children}
	</label>
);
