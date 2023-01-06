import {
	NunitoSans_400Regular,
	NunitoSans_700Bold,
	useFonts
} from '@expo-google-fonts/nunito-sans'
import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'react-native'

import { Loading } from '@components/Loading'
import { Routes } from '@routes/index'
import { THEME } from './src/theme/index'

export default function App() {
	const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
			{fontsLoaded ? <Routes /> : <Loading />}
		</NativeBaseProvider>
	)
}
