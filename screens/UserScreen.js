import { View, Text, Button, StyleSheet } from 'react-native';

function UserScreen({navigation}) {
  // uncomment for the button to open drawer menu
  // const openDrawerNavigation = () => {
  //   navigation.toggleDrawer();
  // }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      {/* Uncomment to have a button that opens the drawer menu */}
      {/* <Button title="Open drawer navigation" onPress={openDrawerNavigation} /> */}
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
