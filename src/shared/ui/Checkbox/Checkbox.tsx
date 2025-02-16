import type { ComponentProps } from 'react';

import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from '@src/shared/components';
import clsx from 'clsx';

import styles from './styles.module.scss';

export const Checkbox = ({ className, ...props }: ComponentProps<typeof RadixCheckbox.Root>) => (
	<RadixCheckbox.Root defaultChecked className={clsx(className, styles.root)} {...props}>
		<RadixCheckbox.Indicator>
			<Check />
		</RadixCheckbox.Indicator>
	</RadixCheckbox.Root>
);

export const CheckboxLabel = ({ className, ...props }: ComponentProps<'label'>) => (
	<label className={clsx(className, styles.label)} {...props} />
);
