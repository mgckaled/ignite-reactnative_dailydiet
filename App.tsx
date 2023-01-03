import { Box, NativeBaseProvider, Text } from 'native-base'
import { StatusBar } from 'react-native'

import { THEME } from 'src/theme'

export default function App() {
	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			<Box>
				<Text>Hello World</Text>
			</Box>
		</NativeBaseProvider>
	)
}
