import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ImageDetail = ({ title, score, imageSource }) => {
	return (
		<View>
			<Image source={imageSource} />
			<Text>{title}</Text>
			<Text>Image score - {score}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;
