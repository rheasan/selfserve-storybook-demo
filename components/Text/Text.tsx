import { Text } from "react-native";
import clsx from "clsx";

export enum TextType {
	Info,
	InfoBold,
	Title,
	TitleDark,
	TitleSmall,
	TitleSmallSolid,
	TitleSmallAction,
	Title1,
	Title1White,
	Title1Prime,
	ExtraLarge,
	ExtraLargeWhite,
	Large,
	LargeWhite,
	Heading1,
	Heading1Link,
	Heading1Solid,
	Heading1Blue,
	Heading1Light,
	Heading2,
	Heading2Accent,
	Paragraph1,
	Paragraph1Solid,
	Paragraph2,
	Paragraph3,
}

export interface TextProps {
	text: string;
	type: TextType;
	extraClassName?: string;
}

function CustomText({ text, type, extraClassName }: TextProps) {
	return (
		<Text className={getTextClassName(type, extraClassName)}>{text}</Text>
	)
}

function getTextClassName(type: TextType, extraClassName?: string): string {
	switch(type) {
		case TextType.Info:
			return "text-[14px] text-orange-500 bg-yellow-100";
		case TextType.InfoBold:
			return clsx(getTextClassName(TextType.Info), " font-bold");
		case TextType.Title:
			return "text-2xl text-black";
		case TextType.TitleDark:
			return "text-2xl text-black";
		case TextType.TitleSmall:
			return "text-lg text-black";
		case TextType.TitleSmallSolid:
			return "text-lg text-white";
		case TextType.TitleSmallAction:
			return "text-lg text-blue-500";
		case TextType.Title1:
			return "text-xl text-black";
		case TextType.Title1White:
			return "text-xl text-white";
		case TextType.Title1Prime:
			return "text-xl text-purple-600";
		case TextType.ExtraLarge:
			return "text-4xl text-black";
		case TextType.ExtraLargeWhite:
			return "text-4xl text-white";
		case TextType.Large:
			return "text-3xl text-black";
		case TextType.LargeWhite:
			return "text-3xl text-white";
		case TextType.Heading1:
			return "text-2xl text-black";
		case TextType.Heading1Link:
			return "text-2xl text-blue-500 underline";
		case TextType.Heading1Solid:
			return "text-2xl text-white";
		case TextType.Heading1Blue:
			return "text-2xl text-blue-500";
		case TextType.Heading1Light:
			return "text-2xl text-gray-300";
		case TextType.Heading2:
			return "text-xl text-black";
		case TextType.Heading2Accent:
			return "text-xl text-blue-500";
		case TextType.Paragraph1:
			return "text-base text-black";
		case TextType.Paragraph1Solid:
			return "text-base text-white";
		case TextType.Paragraph2:
			return "text-sm text-black";
		case TextType.Paragraph3:
			return "text-xs text-black";
		default:
			return "text-base text-black";
	}
}

export default CustomText;