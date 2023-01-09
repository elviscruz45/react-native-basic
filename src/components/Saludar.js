import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  //   const { firstName = "sss", lastName = "ee" } = props;
  const { firstName, lastName } = props;

  return (
    <Text>
      {" "}
      Hola {firstName}, {lastName}{" "}
    </Text>
  );
}

// Saludar.defaultProps = {
//   firstName: "Elvissss",
//   lastName: "Cruzzzzzzz",
// };

// Saludar.PropTypes = {
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string,
// };
