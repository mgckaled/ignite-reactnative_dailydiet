import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
	title: string
}

export function Button({ title, ...rest }: Props) {
	return (
		<ButtonNativeBase
			w="full"
			h={12}
			bg="gray.600"
			borderWidth={1}
			borderColor="gray.700"
			rounded="md"
			justifyItems="center"
			_pressed={{
				bg: 'gray.500'
			}}
			{...rest}
		>
			<Text color="white" fontFamily="heading" fontSize="sm">
				{title}
			</Text>
		</ButtonNativeBase>
	)
}
