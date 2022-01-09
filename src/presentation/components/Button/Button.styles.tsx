import styled from 'styled-components'
import tw from 'twin.macro'

export interface IButtonStyledProps {
  variant: 'primary' | 'secondary' | 'disabled'
  full?: boolean
  onClick?: () => void
}

export const ButtonStyled = styled.button(
  ({ variant, full = true }: IButtonStyledProps) => [
    tw`px-6 py-3 rounded-lg border-b-4 transition-all ease-in-out duration-100 font-bold`,
    variant === 'primary' &&
      tw`bg-red-600 border-b-red-400 text-white hover:bg-red-500`,
    variant === 'secondary' &&
      tw`bg-yellow-500 border-b-yellow-300 text-white hover:bg-yellow-400`,
    variant === 'disabled' &&
      tw`bg-gray-500 border-b-gray-300 text-white hover:bg-gray-400`,
    full && tw`w-full`
  ]
)
