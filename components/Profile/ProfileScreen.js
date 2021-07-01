import React, { Component, Fragment, useState } from "react";
import { Button, Image, Text, View } from "react-native";
import imageStyler from "../../assets/css/image.js";
import formatStyler from "../../assets/css/format.js";

import diet from "../../health_labels.json";
import SearchableDropdown from "react-native-searchable-dropdown";

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      userDiet: true,
    };
  }

  componentDidMount() {
    //check for user diet in the database
    this.setState({
      selectedItems: [
        {
          id: 5,
          name: "dairy-free",
          definition: "No dairy; no lactose",
        },
      ],
    });
  }

  renderDiet() {
    return this.state.selectedItems.map((item, index) => (
      <Text key={index}>{item.name}</Text>
    ));
  }

  render() {
    const actions = {
      changeDiet: (value) => () => this.setState({ userDiet: value }),
    };

    return (
      <View>
        {this.state.userDiet ? (
          <View style={formatStyler.center}>
            <Image
              style={imageStyler.smallImage}
              source={{
                uri: "http://www.research.uci.edu/zotmail/staff-assembly/placeholder.jpg",
              }}
            />
            <Text>Placeholder Joe</Text>
            <Text>placedholder@amazon.com</Text>
            <Text>Pierre's Dietary Restrictions</Text>
            {this.state.selectedItems.length ? (
              this.renderDiet()
            ) : (
              <Text>None</Text>
            )}
            <Button
              onPress={actions.changeDiet(false)}
              title="Edit Diet"
            ></Button>
          </View>
        ) : (
          <View style={formatStyler.card}>
            <Button onPress={actions.changeDiet(true)} title="Save Diet" />
            <SearchableDropdown
              multi={true}
              selectedItems={this.state.selectedItems}
              onItemSelect={(item) => {
                const items = this.state.selectedItems;
                items.push(item);
                this.setState({ selectedItems: items });
              }}
              containerStyle={{ padding: 5 }}
              onRemoveItem={(item, index) => {
                const items = this.state.selectedItems.filter(
                  (sitem) => sitem.id !== item.id,
                );
                this.setState({ selectedItems: items });
              }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: "#ddd",
                borderColor: "#bbb",
                borderWidth: 1,
                borderRadius: 5,
              }}
              itemTextStyle={{ color: "#222" }}
              itemsContainerStyle={{ maxHeight: 300 }}
              items={diet}
              defaultIndex={2}
              chip={true}
              resetValue={false}
              textInputProps={{
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                  padding: 12,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 5,
                },
              }}
              listProps={{
                nestedScrollEnabled: true,
              }}
            />
          </View>
        )}
      </View>
    );
  }
}
export default ProfileScreen;
