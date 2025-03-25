import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const Table = ({ className, ...props }: ComponentProps<'table'>) => (
	<table className={clsx(className, styles.table)} {...props} />
);

export const TableHeader = ({ className, ...props }: ComponentProps<'thead'>) => (
	<thead className={clsx(className, styles.header)} {...props} />
);

export const TableHead = ({ className, ...props }: ComponentProps<'th'>) => (
	<th className={clsx(className, styles.head)} {...props} />
);

export const TableBody = (props: ComponentProps<'tbody'>) => <tbody {...props} />;

export const TableRow = (props: ComponentProps<'tr'>) => <tr {...props} />;

export const TableCell = ({ className, ...props }: ComponentProps<'td'>) => (
	<td className={clsx(className, styles.cell)} {...props} />
);
