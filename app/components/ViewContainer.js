import React, { Component } from 'react';
import {
	View,
	Image,
	StyleSheet,
	StatusBar
} from 'react-native';

class ViewContainer extends Component {
	render() {
		return (
			<Image style={styles.ViewContainer} source={require('../assets/images/hipster_street.jpg')}>
					<StatusBar 
					barStyle="light-content"/>
					{this.props.children}
			</Image>
		);
	}
}
const styles = StyleSheet.create({
	ViewContainer: {
		flex:1,
		height: null,
		width: null,
		flexDirection:"column",
		justifyContent:"flex-start",
		alignItems:"stretch",
		resizeMode: "stretch"
	}
})
module.exports = ViewContainer;