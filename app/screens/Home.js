import React, { Component } from 'react';
import {
	View,
	StatusBar,
	KeyboardAvoidingView
} from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.797;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {

	handlePressBaseCurrency = () => {
		console.log('press base');
	}

	handlePressQuoteCurrency = () => {
		console.log('press quote');
	}

	handleTextChange = (text) => {
		console.log('change text', text);
	}

	handleSwapCurrency = () => {
		console.log('press swap currency');
	}

	handleOptionPress = () => {
		console.log('press handle options');
	}

	render() {
		return(
			<Container>
				<StatusBar translucent={false} barStyle="light-content" />
				<Header
					onPress={this.handleOptionPress}
				/>
				<KeyboardAvoidingView behavior="padding">
					<Logo />
					<InputWithButton
						buttonText={TEMP_BASE_CURRENCY}
						onPress={this.handlePressBaseCurrency}
						defaultValue={TEMP_BASE_PRICE}
						keyboardType="numeric"
						onChangeText={this.handleTextChange}
					/>
					<InputWithButton
						buttonText={TEMP_QUOTE_CURRENCY}
						onPress={this.handlePressQuoteCurrency}
						editable={false}
						value={TEMP_QUOTE_PRICE}
					/>
					<LastConverted
						base={TEMP_BASE_CURRENCY}
						quote={TEMP_QUOTE_CURRENCY}
						date={TEMP_CONVERSION_DATE}
						conversationRate={TEMP_CONVERSION_RATE}
					/>
					<ClearButton
						text="Reverse Currencies"
						onPress={this.handleSwapCurrency}
					/>
				</KeyboardAvoidingView>
			</Container>
		)
	}
}

export default Home;