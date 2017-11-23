import React, { Component } from 'react';
import {
	View,
	Image,
	Text,
	ImageBackground,
	Keyboard,
	Animated
} from 'react-native';
import styles from './styles';

class Logo extends Component {
	
	componentDidMount() {
		this.keyboardShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardShow);
		this.keyboardHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHide);
	}

	componentWillUnmount() {
		this.keyboardShowListener.remove();
		this.keyboardHideListener.remove();
	}

	keyboardShow = () => {
		console.log('keyboard did show');
	};

	keyboardHide = () => {
		console.log('keyboard did hide');
	};

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Animated.ImageBackground
						source={require('./images/hexagon.png')}
						style={styles.containerImage}
					>
						<Animated.Image
							source={require('./images/cash.png')}
							resizeMode="contain"
							style={styles.image}
						/>
					</Animated.ImageBackground>
					
				</View>
				<Text style={styles.text}>Currency Converter</Text>
			</View>
		)
	}
}

export default Logo;