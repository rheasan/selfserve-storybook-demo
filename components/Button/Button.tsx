import { Text, Pressable, StyleSheet } from "react-native";
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
			style={getButtonStyle(type)}
			>
			{leadingIcon}
			<Text style={getButtonTextStyle(type)}>{text}</Text>
			{trailingIcon}
		</Pressable>
	);
}

function getButtonStyle(type: ButtonType) {
	switch (type) {
		case ButtonType.Prime:
			return StyleSheet.flatten({...ButtonStyle.button, ...ButtonStyle.prime});
		case ButtonType.Solid:
			return StyleSheet.flatten({...ButtonStyle.button, ...ButtonStyle.solid});
		case ButtonType.PrimeDisabled:
			return StyleSheet.flatten({...ButtonStyle.button, ...ButtonStyle.prime, ...ButtonStyle.disabled});
		case ButtonType.SolidDisabled:
			return StyleSheet.flatten({...ButtonStyle.button, ...ButtonStyle.solid, ...ButtonStyle.disabled});
		case ButtonType.Raised:
			return StyleSheet.flatten({...ButtonStyle.button, ...ButtonStyle.raised});
		case ButtonType.RaisedDisabled:
			return StyleSheet.flatten({...ButtonStyle.button, ...ButtonStyle.raised, ...ButtonStyle.disabled});
		default:
			return StyleSheet.flatten({...ButtonStyle.button, ...ButtonStyle.prime});
	}
}

function getButtonTextStyle(type: ButtonType) {
	switch (type) {
		case ButtonType.Prime:
			return StyleSheet.flatten({...ButtonTextStyle.button, ...ButtonTextStyle.prime});
		case ButtonType.Solid:
			return StyleSheet.flatten({...ButtonTextStyle.button, ...ButtonTextStyle.solid});
		case ButtonType.PrimeDisabled:
			return StyleSheet.flatten({...ButtonTextStyle.button, ...ButtonTextStyle.prime, ...ButtonTextStyle.disabled});
		case ButtonType.SolidDisabled:	
			return StyleSheet.flatten({...ButtonTextStyle.button, ...ButtonTextStyle.solid, ...ButtonTextStyle.disabled});
		case ButtonType.Raised:
			return StyleSheet.flatten({...ButtonTextStyle.button, ...ButtonTextStyle.raised});
		case ButtonType.RaisedDisabled:
			return StyleSheet.flatten({...ButtonTextStyle.button, ...ButtonTextStyle.raised, ...ButtonTextStyle.disabled});
		default:
			return StyleSheet.flatten({...ButtonTextStyle.button, ...ButtonTextStyle.prime});
	}
}

const ButtonTextStyle = StyleSheet.create({
	button: {
		fontSize: 16,
		fontFamily: "Roboto",
	},
	prime: {
		color: "white",
	},
	solid: {
		color: "white",
	},
	raised: {
		color: "#199FD9",
	},
	disabled: {
		color: "gray",
	}
});

const ButtonStyle = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		height: 40,
		borderRadius: 4,
		padding: 8,
		display: "flex",
		flexDirection: "row",
		gap: 4
	},
	prime: {
		backgroundColor: "purple",
		borderRadius: 4
	},
	solid: {
		backgroundColor: "#199FD9",
	},
	raised: {
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "#199FD9",
	},
	disabled: {
		backgroundColor: "lightgray",
		borderWidth: 1,
		borderColor: "gray",
	}
});
export default CustomButton;