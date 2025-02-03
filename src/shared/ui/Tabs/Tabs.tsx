import type { ComponentProps } from 'react';

import * as RadixTabs from '@radix-ui/react-tabs';
import clsx from 'clsx';

import styles from './styles.module.scss';

export const Tabs = ({ className, ...props }: ComponentProps<typeof RadixTabs.Root>) => {
	return <RadixTabs.Root className={clsx(className, styles.root)} {...props} />;
};

export const TabsList = ({ className, ...props }: ComponentProps<typeof RadixTabs.List>) => {
	return <RadixTabs.List className={clsx(className, styles.list)} {...props} />;
};

export const TabsTrigger = ({ className, ...props }: ComponentProps<typeof RadixTabs.Trigger>) => {
	return <RadixTabs.Trigger className={clsx(className, styles.trigger)} {...props} />;
};

export const TabsContent = ({ className, ...props }: ComponentProps<typeof RadixTabs.Content>) => {
	return <RadixTabs.Content className={clsx(className, styles.content)} {...props} />;
};
