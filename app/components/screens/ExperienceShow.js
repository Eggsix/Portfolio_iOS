import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class ExperienceShow extends Component {
	constructor(props) {
		super(props)
	}
	getImage(expProps) {
		switch(expProps.projects) {
			case 'Seattlites':
				return require('../../assets/images/Seattlites.png');
			case 'Local Organics':
				return require('../../assets/images/local_organics.png');
			case 'iStock':
				return require('../../assets/images/iStock.png');
			case 'Portfolio':
				return require('../../assets/images/portfolio.png');
			case 'fitHub':
				return require('../../assets/images/hipster_street.jpg');
		}
	}
	render() {
		return (
			<View style={styles.ViewPort}>
				<Text style={styles.Title}>{this.props.experience.projects}</Text>
				<Image style={styles.ImageStyle} source={this.getImage(this.props.experience)} />
				<Text>{this.props.experience.description}</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	ViewPort: {
		flex:1,
		justifyContent:'flex-start',
		alignItems: 'center',
		backgroundColor: 'white',
		margin: 20,
		borderRadius: 5,
		padding: 20

	},
	ImageStyle: {
		height: 200,
		width: 300,
		resizeMode: 'contain'
	},
	Title: {
		fontWeight: 'bold',
		fontSize: 20
	}
})
module.exports = ExperienceShow;