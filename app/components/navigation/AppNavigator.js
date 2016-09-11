import React, { Component } from 'react';
import {
	Navigator
} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';
import ContactScreen from '../screens/ContactScreen';
import ExperienceShow from '../screens/ExperienceShow';
import ViewContainer from '../ViewContainer';
class AppNavigator extends Component {
	_renderScene(route, navigator) {
    var globalNavigatorProps = { navigator };

    switch(route.ident) {
      case "ProfileScreen":
        return(
          <ProfileScreen 
            {...globalNavigatorProps}  />
        )
        
      case "ExperienceShow":
        return(
          <ExperienceShow 
            {...globalNavigatorProps}
            experience={route.experience}/>
        )
      case "ContactScreen":
        return(
          <ContactScreen
            {...globalNavigatorProps} />
        )
      default:
        return(
          <ProfileScreen 
            {...globalNavigatorProps} />
        )    
    }
  }
  render() {
  	return(
      <ViewContainer>
    		<Navigator
            initialRoute={this.props.initialRoute}
            ref="appNavigator"
            renderScene={this._renderScene}
            configureScene={(route) => ({
              ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
      </ViewContainer>
  	)
  }
}

module.exports = AppNavigator;