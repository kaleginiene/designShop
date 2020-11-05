import React from "react";
import { Section, InputField } from "../../components";

function Home() {
  return (
    <Section>
      <h1>To order, please fill in the form</h1>
      <InputField type="text" placeholder="Full name" />
      <InputField type="dropdown" options={[{ id: 0 }]} />
    </Section>
  );
}

export default Home;
