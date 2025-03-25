import type { ComponentProps } from 'react';

import * as RadixProgress from '@radix-ui/react-progress';
import clsx from 'clsx';

import styles from './styles.module.scss';

export const Progress = ({
	className,
	value,
	max = 100,
	...props
}: ComponentProps<typeof RadixProgress.Root>) => (
	<RadixProgress.Root className={clsx(className, styles.root)} max={max} value={value} {...props}>
		<RadixProgress.Indicator
			className={clsx(className, styles.indicator)}
			style={{ transform: `translateX(-${100 - (value / max) * 100}%)` }}
			{...props}
		/>
	</RadixProgress.Root>
);
