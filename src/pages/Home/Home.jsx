import React, { useState } from "react";
import { Section, InputField, Button } from "../../components";
import * as S from "./Home.style";
import { useHistory } from "react-router-dom";

function Home() {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();

  const history = useHistory();

  return (
    <Section>
      <h1>To order, please fill in the form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(name, city, address);
          history.push("/order");
        }}
      >
        <S.InputWrapper>
          <InputField
            type="text"
            placeholder="Full name"
            handleChange={(e) => setName(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <InputField
            type="dropdown"
            options={[
              { id: 0, name: "Please select Your city" },
              { id: 1, name: "Vilnius", value: "vilnius" },
              { id: 2, name: "Kaunas", value: "kaunas" },
              { id: 3, name: "Klaipėda", value: "klaipėda" },
            ]}
            handleChange={(e) => setCity(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <InputField
            type="longtext"
            placeholder="Enter your address"
            handleChange={(e) => setAddress(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <Button type="submit" color="primary">
            Next: Select Outfit
          </Button>
        </S.InputWrapper>
      </form>
    </Section>
  );
}

export default Home;
