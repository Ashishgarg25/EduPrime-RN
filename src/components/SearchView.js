import React from 'react'
import { View, Image, StyleSheet, TextInput } from 'react-native'
import SvgIcon from 'react-native-svg-icon';
import svgs from '../utilities/assets/svg';
import LinearGradient from 'react-native-linear-gradient';
const IKON = (props) => <SvgIcon {...props} svgs={svgs} />
import Styles from '../utilities/constants/Styles'
import { ColorsGradient } from '../utilities/constants/Styles'
const SearchView = ({ navigation, title, leftIcon, rightIcon }) => {
    return (
        <LinearGradient
            colors={ColorsGradient}
            style={[styles.container, Styles.shadowView]}>
            <View style={styles.searchView}>
                <View style={styles.leftView}>
                    {leftIcon && <IKON name={leftIcon} width={20} height={20} />}
                </View>
                <View style={styles.centerView}>
                    <TextInput
                        style={{ flex: 1 }}
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder={title}
                        // placeholderTextColor={Colors.themeLightGrayPurpleColor}
                        // value={email}
                        onChangeText={(text) => {
                        }}
                    />
                </View>
                {rightIcon && <View style={styles.rightView}>
                    <IKON name={rightIcon} width={20} height={20} style={styles.ikonStyle} />
                </View>
                }
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 4,
    },
    leftView: {
        flex: 0.1,
    },
    searchView: {
        margin: 1.5,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    centerView: {
        flex: 0.8
    },
    rightView: {
        right: 15,
        position: 'absolute',
    }

})

export default SearchView;