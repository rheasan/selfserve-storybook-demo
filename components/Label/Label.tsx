import { Text, View } from "react-native";
import clsx from "clsx";
import { SuccessBold } from "./Label.stories";

interface CustomLabelProps {
	text: String,
	type: LabelType,
	additionalClassName?: String
}

export enum LabelType {
	Base,
	Success,
	SuccessBold,
	Active,
	ActiveBold,
	Expired,
	ExpiredBold,
}

function CustomLabel({ text, type, additionalClassName }: CustomLabelProps) {
	return (
		<View className={getViewClassName(type)}>
			<Text className={getLabelClassName(type, additionalClassName)}>{text}</Text>
		</View>
	);
}

function getLabelClassName(type: LabelType, additionalClassName: String | undefined) {
	return clsx(
		"text-base font-roboto p-4",
		{
			[LabelType.Base]: "text-black",
			[LabelType.Success]: "text-blue-500",
			[LabelType.SuccessBold]: "text-blue-500",
			[LabelType.Active]: "text-green-500",
			[LabelType.Expired]: "text-red-500",
			[LabelType.ActiveBold]: "text-green-500",
			[LabelType.ExpiredBold]: "text-red-500",
		}[type] || "text-black",
		additionalClassName
	);
}

function getViewClassName(type: LabelType) {
	return clsx(
		{
			[LabelType.Base]: "",
			[LabelType.Success]: "bg-blue-100",
			[LabelType.SuccessBold]: "bg-blue-100 font-bold",
			[LabelType.Active]: "bg-green-100",
			[LabelType.Expired]: "bg-red-100",
			[LabelType.ActiveBold]: "bg-green-100 font-bold",
			[LabelType.ExpiredBold]: "bg-red-100 font-bold",
		}[type] || "white"
	)
}

export default CustomLabel;