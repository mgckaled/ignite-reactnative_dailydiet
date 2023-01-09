import { IPressableProps, Image, Pressable, Text } from 'native-base'

type Props = IPressableProps & {
	name: string
	isActive: boolean
	imageColor: string
	bgSelectorColor: string
}

export function SelectionBox({
	name,
	isActive,
	imageColor,
	bgSelectorColor,
	...rest
}: Props) {
	return (
		<Pressable
			w={40}
			h={12}
			bg="gray.200"
			rounded={3}
			flexDir="row"
			justifyContent="center"
			alignContent="center"
			alignItems="center"
			overflow="hidden"
			isPressed={isActive}
			_pressed={{
				borderColor: imageColor,
				borderWidth: 1,
				backgroundColor: bgSelectorColor
			}}
			{...rest}
		>
			<Image
				mr={3}
				w={3}
				h={3}
				rounded="full"
				backgroundColor={imageColor}
				alt="cor do tipo da dieta"
			/>
			<Text color="gray.700" fontSize="sm" fontFamily="heading">
				{name}
			</Text>
		</Pressable>
	)
}
