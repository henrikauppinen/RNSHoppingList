/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
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

import { ListEntryInput } from './app/ListEntryInput';

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
    dataSource: ds.cloneWithRows(listData),
    text: 'empty'
  };

  renderRow(rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        title={rowData.text}
      />
    );
  }

  onAddListItem = (text) => {
    // const {oldtext} = this.state.text;

    this.setState({
      text: text,
    })
  }

  addNewListItem = (inputText) =>  {
    this.setState({
      text: inputText
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topArea}>
          <ListEntryInput submitHandler={this.addNewListItem} />
          <Text>{this.state.text}</Text>
        </View>

        <View style={styles.listArea}>

          <List>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
            />
          </List>

        </View>

        <View style={styles.listBottomPadding} />

        <View style={styles.bottomArea}>

          <Icon
            reverse
            name='add'
            color='#4bd648'
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topArea: {
    paddingTop: 25
  },
  listArea: {
    flex: 0.8
  },
  listBottomPadding: {
    backgroundColor: '#ffffff',
    height: 50
  },
  bottomArea: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 70
  }
});

AppRegistry.registerComponent('RNShoppingList', () => RNShoppingList);
