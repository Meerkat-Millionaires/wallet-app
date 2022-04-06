/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'
import { BoxProps } from '@shopify/restyle'
import { useTranslation } from 'react-i18next'
import Text from './Text'
import { Color, Spacing, Theme } from '../theme/theme'
import BackArrow from '../assets/images/backArrow.svg'
import TouchableOpacityBox from './TouchableOpacityBox'
import { useColors } from '../theme/themeHooks'

type Props = BoxProps<Theme> & {
  color?: Color
  fontSize?: number
  onPress?: () => void
  paddingHorizontal?: Spacing
}

const BackButton = ({
  color = 'primaryText',
  fontSize = 19,
  onPress,
  paddingHorizontal = 'lx',
  ...props
}: Props) => {
  const { t } = useTranslation()
  const colors = useColors()
  const arrowSize = useMemo(() => (16 / 22) * fontSize, [fontSize])

  return (
    <TouchableOpacityBox
      onPress={onPress}
      alignSelf="flex-start"
      paddingVertical="s"
      paddingHorizontal={paddingHorizontal}
      alignItems="center"
      flexDirection="row"
      {...props}
    >
      <BackArrow height={arrowSize} width={arrowSize} color={colors[color]} />
      <Text
        marginLeft="xs"
        color={color}
        variant="medium"
        fontSize={fontSize}
        maxFontSizeMultiplier={1.1}
      >
        {t('generic.back')}
      </Text>
    </TouchableOpacityBox>
  )
}

export default BackButton
