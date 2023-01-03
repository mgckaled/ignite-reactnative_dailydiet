import { Box, NativeBaseProvider, Text } from 'native-base'
import { StatusBar } from 'react-native'

export default function App() {
	return (
		<NativeBaseProvider>
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
