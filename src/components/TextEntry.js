/**
  Name: TextEntry.jsx

  Description: A 'dumb' component screen for text entry.

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";

import { Container, Content, H3, Item, Input } from "native-base";

import { updateLi } from '../modules/settings/SettingsState';


class TextEntry extends Component {
  // static propTypes = {
  //   onUpdate: PropTypes.func.isRequired,
  //   content: PropTypes.string.isRequired
  // };

  render() {
    const { onUpdate } = this.props.navigation.state.params;
    const { content } = this.props;

    return (
        <View style={{ backgroundColor: 'transparent', padding: 25 }}>
          <H3>Enter your Life's Intentions here, one per line:</H3>
          <TextInput
            style={{
              height: '100%',
              borderColor: '#373737',
              borderWidth: 4,
              padding: 5,

              fontSize: 18,
            }}
            multiline
            autoFocus
            onChangeText={text => onUpdate(text)}
            value={content}
          />
        </View>
    );
  }
}

// Currently this component is specific to life's intentions. Is there a way
// "Dumb" it down - or generalize it?
export default connect(
  state => ({
    content: state.settings.liList,
  })
)(TextEntry);
