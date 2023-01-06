import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
	title: string
	variant?: 'solid' | 'outline'
	widthSize?: 'full' | '85%'
}

export function Button({
	title,
	variant = 'solid',
	widthSize = 'full',
	...rest
}: Props) {
	return (
		<ButtonNativeBase
			w={widthSize}
			h={12}
			bg={variant === 'outline' ? 'gray.100' : 'gray.600'}
			borderWidth={1}
			borderColor="gray.700"
			rounded="md"
			justifyItems="center"
			_pressed={{
				bg: variant === 'outline' ? 'white' : 'gray.500'
			}}
			{...rest}
		>
			<Text
				color={variant === 'outline' ? 'gray.700' : 'white'}
				fontFamily="heading"
				fontSize="sm"
			>
				{title}
			</Text>
		</ButtonNativeBase>
	)
}
