import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type TypographyVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'p_12_regular'
	| 'p_16_medium'
	| 'p_16_regular'
	| 'p_24_light';

type TypographyProps<Tag extends TypographyTag> = ComponentProps<Tag> & {
	color?: 'primary' | 'secondary' | 'tertiary';
	tag?: TypographyTag;
	variant: TypographyVariant;
};

export const Typography = <Tag extends TypographyTag = 'p'>({
	tag = 'p',
	variant,
	color = 'primary',
	children,
}: TypographyProps<Tag>) => {
	const Component = tag;

	return <Component className={clsx(styles[variant], styles[color])}>{children}</Component>;
};
