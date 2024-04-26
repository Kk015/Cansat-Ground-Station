import React from "react";
import { Provider } from "react-redux";
import store from "../app/store";
import ConnectButton from "../components/Serial/UI/ConnectButton";

export default {
  title: "Connect Button",
  component: ConnectButton,
};

export const Default = () => (
  <Provider store={store}>
    <ConnectButton />
  </Provider>
);
