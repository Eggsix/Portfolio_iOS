import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ListView, 
  TouchableOpacity,
  Text        
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';
  skills = [
  {skill: "Ruby", description: "A social media image viewer displaying all of the delights Seattle has to offer.", stack: "Ruby on Rails", projects: "Seattlites"},
  {skill: "Ruby", description: "Supporting locally grown agriculture, Local Organics searches for all nearby farmers markets by zip code. Users can leave reviews and ratings. By sharing their experience this application will attract a larger audience. With Local Organics you can buy fresh and buy local!", stack: "Ruby on Rails", projects: "Local Organics"},
  {skill: "PHP", description: "Three-person project creating a storefront website where customers could login, view products and add them to a shopping cart and checkout using stripe API. Also included Admin functionality to add/update/delete products, view customer orders and update the status.", stack: "CodeIgniter", projects: "iStock"},
  {skill: "Swift", description: "FitHubb brings people together who share a similar goal of getting fit based on their location, and makes setting it up as simple as possible. Getting fit alone is a thing of the past!", stack: "xCode", projects: "fitHub"},
  {skill: "Javascript", description: "IOS resume application that can be uploaded to any phone", stack: "React Native", projects: "Portfolio"}
  ]

class ProfileScreen extends Component {

  constructor(props) {
    super(props)

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { 
      skills: ds.cloneWithRows(skills)
    }
  }
  _renderExperienceRow(experience) {
    return(
      <TouchableOpacity style={styles.Row} onPress={(event) => this._navigateToExperienceShow(experience)}>
        <Text style={styles.Title}>{experience.projects}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" size={15} style={styles.experienceMoreIcon} />
      </TouchableOpacity>
    )
  }

  _navigateToExperienceShow(experience) {
    this.props.navigator.push({
      ident: "ExperienceShow",
      experience: experience
    })
  }

  render() {
    return (
      <View style={styles.Profile}>
        <View style={{flex: 1, alignItems: 'center', justifyContent:"flex-end"}}>
          <Image source={require('../../assets/images/linkedIn.png')} style={styles.ImageStyle}/>
        </View>
        <View style={styles.Info}>
          <ListView
            dataSource={this.state.skills}
            renderRow={(experience) => {return this._renderExperienceRow(experience)}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ImageStyle: {
    borderWidth: 5, 
    borderColor:'white', 
    borderRadius: 75, 
    width:150, 
    height: 150
  },
  Profile: {
    flex: 1,
  },
  Title: {
    marginLeft: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  Row:{
    backgroundColor: 'rgba(36, 54, 42, 0.3)',
    marginBottom: 3,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
  },
  experienceMoreIcon: {
    color: "white",
    height: 15,
    width: 15,
    marginRight: 25
  },
  Info: {
    flex: 2,
  }
})

module.exports = ProfileScreen;