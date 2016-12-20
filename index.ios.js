/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import {
  FormInput,
  Icon,
  List,
  ListItem
} from 'react-native-elements';

const listData = [
  {id: 0, text: 'Rivi 1'},
  {id: 1, text: 'Rivi 2'},
  {id: 2, text: 'Rivi 3'},
  {id: 3, text: 'Rivi 4'},
  {id: 4, text: 'Rivi 5'},
  {id: 5, text: 'Rivi 6'},
  {id: 6, text: 'Rivi 7'},
  {id: 7, text: 'Rivi 8'},
  {id: 8, text: 'Rivi 9'},
  {id: 9, text: 'Rivi 10'},
  {id: 10, text: 'Rivi 11'},
  {id: 11, text: 'Rivi 12'},
  {id: 0, text: 'Rivi 1'},
  {id: 1, text: 'Rivi 2'},
  {id: 2, text: 'Rivi 3'},
  {id: 3, text: 'Rivi 4'},
  {id: 4, text: 'Rivi 5'},
  {id: 5, text: 'Rivi 6'},
  {id: 6, text: 'Rivi 7'},
  {id: 7, text: 'Rivi 8'},
  {id: 8, text: 'Rivi 9'},
  {id: 9, text: 'Rivi 10'},
  {id: 10, text: 'Rivi 11'},
  {id: 11, text: 'Rivi 12'}
];

// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id;

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged});

export default class RNShoppingList extends Component {

  state = {
    dataSource: ds.cloneWithRows(listData)
  };

  renderRow(rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        title={rowData.text}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topArea}>
          <FormInput
            placeholder='Lisää rivi...'
          />
        </View>
        <View style={styles.listArea}>
          <List>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
            />
          </List>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  topArea: {
    paddingTop: 25
  }
});

AppRegistry.registerComponent('RNShoppingList', () => RNShoppingList);
