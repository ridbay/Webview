import React, { Component } from 'react'
import { View, WebView, StyleSheet }

from 'react-native'
const WebViewSite = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://www.testingelearn.co.uk/e/' }}
         
         />
      </View>
   )
}
export default WebViewSite;

const styles = StyleSheet.create({
   container: {
      flex: 1
   }
})