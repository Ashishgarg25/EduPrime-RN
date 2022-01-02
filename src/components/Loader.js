import React from 'react';

import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import Modal from "react-native-modal";
const Loader = ({loading,backgroundseen}) => {

  return (
    <Modal
      isVisible={loading}
      avoidKeyboard={true}
      // onRequestClose={() => {console.log('close modal')}}
      >
      {/* <View style={styles.modalBackground}> */}
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loading}
            color="#EF5E42"
            size="large"
             />
        </View>
      {/* </View> */}
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    position:'absolute'
  }
});

export default Loader;
