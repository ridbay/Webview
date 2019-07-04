import React, { Component } from 'react';
import {
  BackHandler,
  WebView,
} from 'react-native';

export default class App extends Component {

constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
}

componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton = ()=>{
   this.WEBVIEW_REF.current.goBack();
   return true;
}

onNavigationStateChange(navState) {
  this.setState({
    canGoBack: navState.canGoBack
  });
}

render(){
   return (
    <WebView
        source={{ uri: "https://testingelearn.co.uk/e" }}
        ref={this.WEBVIEW_REF}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
     />
    )
  }
}