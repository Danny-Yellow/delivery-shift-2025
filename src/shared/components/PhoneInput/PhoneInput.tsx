import type { ComponentProps } from 'react';

import { Input } from '@src/shared/ui';
import { PatternFormat, type PatternFormatProps } from 'react-number-format';

type CustomPatterFormatProps = Omit<PatternFormatProps, 'customInput' | 'format' | 'mask'> &
	ComponentProps<typeof Input>;

export const PhoneInput = ({ ...props }: CustomPatterFormatProps) => (
	<PatternFormat mask="_" customInput={Input} format="+7 (###) ### ##-##" {...props} />
);
