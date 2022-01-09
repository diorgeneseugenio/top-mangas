import styled from 'styled-components'
import tw from 'twin.macro'

export interface IButtonStyledProps {
  variant: 'primary' | 'secondary' | 'disabled'
}

export const ButtonStyled = styled.button(({ variant }: IButtonStyledProps) => [
  tw`px-6 py-3 rounded-lg border-b-4 hover:border-b-0 transition-all ease-in-out duration-100 font-bold`,
  variant === 'primary' && tw`bg-red-600 border-b-red-500 text-white`,
  variant === 'secondary' && tw`bg-yellow-500 border-b-yellow-400 text-white`,
  variant === 'disabled' && tw`bg-gray-500 border-b-gray-400 text-white`
])
