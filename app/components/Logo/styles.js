import { Dimensions } from 'react-native';
import EstyleSheet from 'react-native-extended-stylesheet';

const ImageWidth = Dimensions.get('window').width / 2;

export default EstyleSheet.create({
	$largeContainerSize: ImageWidth,
	$largeContainerSizeHeight: ImageWidth+30,
	$largeImageSize: ImageWidth/2,
	$smallContainerSize: ImageWidth / 2,
	$smallContainerSizeHeight: (ImageWidth/2)+15,
	$smallImageSize: ImageWidth / 4,
	container: {
		alignItems: 'center',
	},
	containerImage: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '$largeContainerSize',
		height: '$largeContainerSizeHeight',
	},
	image: {
		width: '$largeImageSize'
	},
	text: {
		fontWeight: '600',
		fontSize: 28,
		letterSpacing: -0.5,
		marginTop: 15,
		color: '$white'
	}
});