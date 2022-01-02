import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

import Styles from '../utilities/constants/Styles'
import SvgIcon from 'react-native-svg-icon';
import svgs from '../utilities/assets/svg';
const IKON = (props) => <SvgIcon {...props} svgs={svgs} />
const Button = ({text, style, leftImage,viewStyle,rightImage, color, textStyle,onPress}) => {
    return(
        <TouchableOpacity style={[Styles.loginButton, viewStyle, color,textStyle]} 
        onPress={onPress}>
          {leftImage && <IKON name={leftImage} height = {4} width = {17}   />}
        <Text style={[Styles.loginButtonText, textStyle]}>{text}</Text>
        {rightImage && <IKON name={rightImage} height = {4} width = {17}   />}
      </TouchableOpacity>
    )
}

export default Button;