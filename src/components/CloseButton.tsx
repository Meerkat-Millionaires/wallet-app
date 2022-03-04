/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react'
import Close from '@assets/images/closeModal.svg'
import TouchableOpacityBox, {
  TouchableOpacityBoxProps,
} from './TouchableOpacityBox'
import { useColors } from '../theme/themeHooks'

const CloseButton = (props: TouchableOpacityBoxProps) => {
  const { white } = useColors()
  return (
    <TouchableOpacityBox padding="xs" {...props}>
      <Close color={white} />
    </TouchableOpacityBox>
  )
}

export default memo(CloseButton)