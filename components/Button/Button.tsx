import clsx from "clsx";
import { Text, Pressable } from "react-native";
interface ButtonProps {
	text: string;
	type: ButtonType,
	trailingIcon?: React.ReactNode;
	leadingIcon?: React.ReactNode;
	onClick: () => void;
}

export enum ButtonType {
	Prime,
	Solid,
	PrimeDisabled,
	SolidDisabled,
	Raised,
	RaisedDisabled
}

function CustomButton({ text, type, trailingIcon, leadingIcon, onClick }: ButtonProps) {
	return (
		<Pressable
			onPress={onClick}
			className={getButtonClassName(type)}
			disabled={type === ButtonType.PrimeDisabled || type === ButtonType.SolidDisabled || type === ButtonType.RaisedDisabled}
			>
			{leadingIcon}
			<Text className={getButtonTextClassName(type)}>{text}</Text>
			{trailingIcon}
		</Pressable>
	);
}

function getButtonClassName(type: ButtonType) {
	return clsx(
		"flex flex-row items-center justify-center h-10 px-3 rounded-md gap-1",
		{
			[ButtonType.Prime]: "bg-purple-600",
			[ButtonType.PrimeDisabled]: "bg-gray-200",

			[ButtonType.Solid]: "bg-blue-500",
			[ButtonType.SolidDisabled]: "bg-gray-200",

			[ButtonType.Raised]: "bg-white border border-blue-500",
			[ButtonType.RaisedDisabled]: "bg-gray-200 border border-gray-500",
		}[type] || "bg-purple-600"
	);
}

function getButtonTextClassName(type: ButtonType) {
	return clsx(
		"text-base font-roboto",
		{
			[ButtonType.Prime]: "text-white",
			[ButtonType.PrimeDisabled]: "text-gray-600",

			[ButtonType.Solid]: "text-white",
			[ButtonType.SolidDisabled]: "text-gray-600",

			[ButtonType.Raised]: "text-blue-500",
			[ButtonType.RaisedDisabled]: "text-gray-600",
		}[type] || "text-white"
	);
}

export default CustomButton;