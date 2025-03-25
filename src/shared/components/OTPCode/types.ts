interface SlotProps {
	char: string | null;
	hasFakeCaret: boolean;
	isActive: boolean;
	placeholderChar: string | null;
}
interface RenderProps {
	isFocused: boolean;
	isHovering: boolean;
	slots: SlotProps[];
}
type OverrideProps<T, R> = Omit<T, keyof R> & R;
export type OTPInputBaseProps = OverrideProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	{
		value?: string;
		onChange?: (newValue: string) => unknown;
		maxLength?: number;
		textAlign?: 'center' | 'left' | 'right';
		onComplete?: (...args: any[]) => unknown;
		pushPasswordManagerStrategy?: 'increase-width' | 'none';
		pasteTransformer?: (pasted: string) => string;
		containerClassName?: string;
		noScriptCSSFallback?: string | null;
	}
>;
export type InputOTPRenderFn = (props: RenderProps) => React.ReactNode;

export type OTPInputProps = OTPInputBaseProps &
	(
		| {
				render?: InputOTPRenderFn;
				children?: never;
		  }
		| {
				render?: never;
				children: React.ReactNode;
		  }
	);
