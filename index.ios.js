'use strict';
var React = require('react-native')
var AppRegistry = React.AppRegistry;
var TabBarIOS = React.TabBarIOS;
var View = React.View;
var Text = React.Text;
var Image = React.Image;
var Icon = require('react-native-vector-icons/FontAwesome');
var AppContainer = require('./app/containers/AppContainer');
var ProfileContainer = require('./app/containers/ProfileContainer')

var localServer = false;

if (localServer === true) {
  process.env.SERVER = 'http://localhost:3000'
} else {
  process.env.SERVER = 'http://better-habits.herokuapp.com'
}

var TabContainer = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: 'inbox',
    }
  },
  render: function () {
    var _this = this;
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'inbox'}
          title='Inbox'
          iconName='inbox'
          onPress={function () {
            _this.setState({
              selectedTab: 'inbox',
            });
          }}
        >
          <AppContainer />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'profile'}
          title='Profile'
          iconName='user'
          onPress={function () {
            _this.setState({
              selectedTab: 'profile',
            });
          }}
        >
          <ProfileContainer />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    )
  }
});

AppRegistry.registerComponent('thesis', function () {
  return TabContainer;
});
