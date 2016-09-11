import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class ContactScreen extends Component {
	render() {
		return(
			<View style={styles.Contact}>
				<Text>Phone: 206-817-2293</Text>
				<Text>Email: plphan206@hotmail.com</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	Contact: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "white",
		alignItems: "center",
		margin: 20
	}
})
module.exports = ContactScreen;