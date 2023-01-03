import { extendTheme } from 'native-base'

export const THEME = extendTheme({
	colors: {
		gray: {
			700: '#1B1D1E',
			600: '#333638',
			500: '#5C6265',
			400: '#B9BBBC',
			300: '#DDDEDF',
			200: '#EFF0F0',
			100: '#FAFAFA'
		},
		green: {
			700: '#639339',
			400: '#CBE4B4',
			100: '#E5F0DB'
		},
		red: {
			700: '#BF3B44',
			400: '#F3BABD',
			100: '#F4E6E7'
		},
		white: '#FFFFFF'
	},
	fonts: {
		heading: 'NunitoSans_700Bold',
		body: 'NunitoSans_400Regular'
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 18,
		xl: 24,
		'2xl': 32
	}
})
