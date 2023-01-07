import { FormControl, IInputProps, Input as NativeBaseInput } from 'native-base'

type Props = IInputProps & {
	errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
	const invalid = !!errorMessage || isInvalid

	return (
		<FormControl isInvalid={invalid} mb={4}>
			<NativeBaseInput
				bg="gray.100"
				h={12}
				px={4}
				borderWidth={1}
				fontSize="md"
				color="gray.700"
				fontFamily="body"
				isInvalid={invalid}
				_invalid={{
					borderWidth: 1,
					borderColor: 'red.700'
				}}
				_focus={{
					bgColor: 'white',
					borderWidth: 1,
					borderColor: 'green.400'
				}}
				{...rest}
			/>

			<FormControl.ErrorMessage _text={{ color: 'red.700' }}>
				{errorMessage}
			</FormControl.ErrorMessage>
		</FormControl>
	)
}
