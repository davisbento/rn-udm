import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentScreen = () => {
	const name = 'Davi';

	return (
		<View>
			<Text style={styles.textStyle}>Getting started with React Native!</Text>
			<Text style={styles.subHeaderStyle}>My name is {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45
	},
	subHeaderStyle: {
		fontSize: 20
	}
});

export default ComponentScreen;
