/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS
} from 'react-native';
import AppNavigator from './app/components/navigation/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';

class Preston_Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "tab1"
    }
  }
  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "tab1"}
          title={`Projects`}
          iconName="user"
          onPress={() => this.setState({selectedTab: "tab1"})}>

          <AppNavigator
            initialRoute={{ident: "PeopleIndex"}} />

        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "tab2"}
          title={`contact`}
          iconName="phone"
          onPress={() => this.setState({selectedTab: "tab2"})}>

          <AppNavigator
            initialRoute={{ident: "ContactScreen"}} />
        </Icon.TabBarItemIOS>

      </TabBarIOS>
    );
  }
}


AppRegistry.registerComponent('Preston_Portfolio', () => Preston_Portfolio);
