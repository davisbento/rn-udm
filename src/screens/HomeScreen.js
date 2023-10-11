import React from 'react';
import { Button, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Button title='Go to Components Demo' onPress={() => navigation.navigate('Components')} />
			<Button title='Go to List Demo' onPress={() => navigation.navigate('List')} />
			<Button title='Go to Images Demo' onPress={() => navigation.navigate('Images')} />
		</View>
	);
};

export default HomeScreen;
