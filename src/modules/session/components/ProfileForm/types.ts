import type { FieldState, Updater } from '@tanstack/react-form';

export interface FieldInputProps {
	errorIsShown: boolean;
	name: string;
	placeholder: string;
	state: FieldState<string>;
	handleChange: (updater: Updater<string>) => void;
}
