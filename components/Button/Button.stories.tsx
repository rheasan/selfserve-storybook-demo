import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import CustomButton, { ButtonType }  from "./Button";

const meta: Meta<typeof CustomButton> = {
	component : CustomButton,
	decorators: [
		Story => (
			<View style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 300 }}>
				<Story />
			</View>
		)
	],
}

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Prime: Story = {
	args: {
		text: "Prime button",
		onClick: () => {},
		type: ButtonType.Prime,
	}
}

export const PrimeDisabled: Story = {
	args: {
		text: "Prime Button Disabled",
		type: ButtonType.PrimeDisabled,
		onClick: () => {},
	}
}

export const Solid: Story = {
	args: {
		text: "Solid Button",
		type: ButtonType.Solid,
		onClick: () => {},
	}
}

export const SolidDisabled: Story = {
	args: {
		text: "Solid Button Disabled",
		type: ButtonType.SolidDisabled,
		onClick: () => {},
	}
}

export const Raised: Story = {
	args: {
		text: "Raised Button",
		type: ButtonType.Raised,
		onClick: () => {},
	}
}

export const RaisedDisabled: Story = {
	args: {
		text: "Raised Button Disabled",
		type: ButtonType.RaisedDisabled,
		onClick: () => {},
	}
}
