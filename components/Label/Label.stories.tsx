import { Meta, StoryObj } from '@storybook/react';
import CustomLabel, { LabelType } from './Label';
import { View } from 'react-native';

type Story = StoryObj<typeof CustomLabel>;
const meta: Meta<typeof CustomLabel> = {
	component: CustomLabel,
	decorators: [
		Story => (
			<View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 300 }}>
				<Story />
			</View>
		),
	],
}

export default meta;

export const Base: Story = {
	args: {
		text: "Base Label",
		type: LabelType.Base,
	}
}

export const Success: Story = {
	args: {
		text: "Success Label",
		type: LabelType.Success,
	}
}
export const SuccessBold: Story = {
	args: {
		text: "Success Bold Label",
		type: LabelType.SuccessBold,
	}
}

export const Active: Story = {
	args: {
		text: "Active Label",
		type: LabelType.Active,
	}
}
export const Expired: Story = {
	args: {
		text: "Expired Label",
		type: LabelType.Expired,
	}
}

export const ActiveBold: Story = {
	args: {
		text: "Active Bold Label",
		type: LabelType.ActiveBold,
	}
}
export const ExpiredBold: Story = {
	args: {
		text: "Expired Bold Label",
		type: LabelType.ExpiredBold,
	}
}
export const Custom: Story = {
	args: {
		text: "Custom Label",
		type: LabelType.Base,
		additionalClassName: "text-red-500 bg-yellow-100"
	}
}

