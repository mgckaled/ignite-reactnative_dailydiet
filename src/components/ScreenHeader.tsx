import { HStack, Heading, Icon } from 'native-base'
import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
	title: string
	headerBgColor: string
}

export function ScreenHeader({ title, headerBgColor, ...rest }: Props) {
	return (
		<HStack
			bg={headerBgColor}
			pt={3}
			pb={8}
			px={8}
			alignItems="center"
			safeAreaTop
		>
			<TouchableOpacity {...rest}>
				<Icon
					as={ArrowLeft}
					name="left-arrow"
					color="gray.600"
					size={8}
					mr={2}
				/>
			</TouchableOpacity>
			<Heading ml={20} color="gray.700" fontSize="lg" fontFamily="heading">
				{title}
			</Heading>
		</HStack>
	)
}
