import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import CustomText, { TextType } from './Text';

const meta: Meta<typeof CustomText> = {
	component: CustomText,
	decorators: [
		Story => (
			<View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 300 }}>
				<Story />
			</View>
		),
	]
}
export default meta;
type Story = StoryObj<typeof CustomText>;

export const Info: Story = {
	args: {
		text: "Info Text",
		type: TextType.Info,
	}
}
export const InfoBold: Story = {
	args: {
		text: "Info Bold Text",
		type: TextType.InfoBold,
	}
}
export const Title: Story = {
	args: {
		text: "Title Text",
		type: TextType.Title,
	}
}
export const TitleDark: Story = {
	args: {
		text: "Title Dark Text",
		type: TextType.TitleDark,
	}
}
export const TitleSmall: Story = {
	args: {
		text: "Title Small Text",
		type: TextType.TitleSmall,
	}
}
export const TitleSmallSolid: Story = {
	args: {
		text: "Title Small Solid Text",
		type: TextType.TitleSmallSolid,
	}
}
export const TitleSmallAction: Story = {
	args: {
		text: "Title Small Action Text",
		type: TextType.TitleSmallAction,
	}
}
export const Title1: Story = {
	args: {
		text: "Title 1 Text",
		type: TextType.Title1,
	}
}
export const Title1White: Story = {
	args: {
		text: "Title 1 White Text",
		type: TextType.Title1White,
	}
}
export const Title1Prime: Story = {
	args: {
		text: "Title 1 Prime Text",
		type: TextType.Title1Prime,
	}
}
export const ExtraLarge: Story = {
	args: {
		text: "Extra Large Text",
		type: TextType.ExtraLarge,
	}
}
export const ExtraLargeWhite: Story = {
	args: {
		text: "Extra Large White Text",
		type: TextType.ExtraLargeWhite,
	}
}
export const Large: Story = {
	args: {
		text: "Large Text",
		type: TextType.Large,
	}
}
export const LargeWhite: Story = {
	args: {
		text: "Large White Text",
		type: TextType.LargeWhite,
	}
}
export const Heading1: Story = {
	args: {
		text: "Heading 1 Text",
		type: TextType.Heading1,
	}
}
export const Heading1Link: Story = {
	args: {
		text: "Heading 1 Link Text",
		type: TextType.Heading1Link,
	}
}
export const Heading1Solid: Story = {
	args: {
		text: "Heading 1 Solid Text",
		type: TextType.Heading1Solid,
	}
}
export const Heading1Blue: Story = {
	args: {
		text: "Heading 1 Blue Text",
		type: TextType.Heading1Blue,
	}
}
export const Heading1Light: Story = {
	args: {
		text: "Heading 1 Light Text",
		type: TextType.Heading1Light,
	}
}