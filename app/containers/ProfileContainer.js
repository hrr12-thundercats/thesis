var React = require('react-native');
var View = React.View;
var StyleSheet = React.StyleSheet;
var TouchableOpacity = React.TouchableOpacity;

var Profile = require('../components/Profile')

var ProfileContainer = React.createClass({
  getInitialState: function () {
    return {
    }
  },

  render: function () {
    return (
      <View style={styles.container}>
        <Profile />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 54,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
  },
});

module.exports = ProfileContainer;