import { storiesOf } from "@storybook/react";
import React from "react";
import Card from "./Card";

storiesOf("Card", module)
  .add("Card with image and title", () => (
    <Card
      title="Hello"
      image="https://www.fbifashioncollege.com.au/wp-content/uploads/2019/11/1.jpg"
      handleClick={() => console.log("I was clicked")}
    />
  ))
  .add("Card with image and no text", () => (
    <Card
      image="https://www.fbifashioncollege.com.au/wp-content/uploads/2019/11/1.jpg"
      handleClick={() => console.log("I was clicked")}
    />
  ))
  .add("Card with no image and with text", () => (
    <Card title="Hello" handleClick={() => console.log("I was clicked")} />
  ))
  .add("Card loading", () => <Card loading />);
