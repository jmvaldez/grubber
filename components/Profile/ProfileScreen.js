import React, { Component, Fragment, useState } from "react";
import { Button, Image, Text, View } from "react-native";

/* Vendor */
import SearchableDropdown from "react-native-searchable-dropdown";
import firebase from "firebase/app";

/* Custom CSS */
import imageStyler from "../../assets/css/image.js";
import formatStyler from "../../assets/css/format.js";

/* DataSet */
import diet from "../../health_labels.json";

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDiet: [],
      userDiet: true,
      userDetails: [],
      tester: false,
    };
  }

  componentDidMount() {
    //check for user diet in the database
    this.getData();
  }

  getData = () => {
    var currentUser = firebase.auth().currentUser;
    this.setState({ userDetails: currentUser });
    firebase
      .database()
      .ref("/users/" + currentUser.uid)
      .once("value")
      .then((snapshot) => {
        snapshot.child("diet").exists();
        this.setState({ selectedDiet: snapshot.val() });
        if (typeof this.state.selectedDiet.diet !== "undefined") {
          this.setState({ selectedDiet: this.state.selectedDiet.diet });
        } else {
          this.setState({ selectedDiet: [] });
        }
      });
  };

  setDiet = () => {
    //Redux would be great right about now
    var currentUser = firebase.auth().currentUser;
    var firstName = currentUser.displayName.split(" ")[0];
    var lastName = currentUser.displayName.split(" ")[1];

    firebase
      .database()
      .ref("/users/" + currentUser.uid)
      .set({
        gmail: currentUser.email,
        profile_picture: currentUser.photoURL,
        first_name: firstName,
        last_name: lastName,
        created_at: Date.now(),
        diet: this.state.selectedDiet,
      })
      .then(function (snapshot) {
        console.log("Snapshot", snapshot);
      });
    this.setState({ userDiet: true });
  };

  renderDiet = () => {
    return this.state.selectedDiet.map((item, index) => (
      <Text key={index}>{item.name}</Text>
    ));
  };

  changeDiet = () => {
    this.setState({ userDiet: false });
  };

  render() {
    return (
      <View>
        {this.state.userDiet ? (
          <View style={formatStyler.center}>
            <Image
              style={imageStyler.smallImage}
              source={{
                uri: this.state.userDetails.photoURL,
              }}
            />
            <Text>{this.state.userDetails.displayName}</Text>
            <Text>{this.state.userDetails.email + "\n"}</Text>
            <Text> Dietary Restrictions {"\n"}</Text>
            {this.state.selectedDiet.length ? (
              this.renderDiet()
            ) : (
              <Text style={{ fontStyle: "italic" }}>None</Text>
            )}
            <Button onPress={this.changeDiet} title="Edit Diet"></Button>
          </View>
        ) : (
          <View style={formatStyler.card}>
            <Button onPress={this.setDiet} title="Save Diet" />
            <SearchableDropdown
              multi={true}
              selectedItems={this.state.selectedDiet}
              onItemSelect={(item) => {
                const items = this.state.selectedDiet;
                items.push(item);
                this.setState({ selectedDiet: items });
              }}
              containerStyle={{ padding: 5 }}
              onRemoveItem={(item, index) => {
                const items = this.state.selectedDiet.filter(
                  (sitem) => sitem.id !== item.id,
                );
                this.setState({ selectedDiet: items });
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
                placeholder: "Type your diet",
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
