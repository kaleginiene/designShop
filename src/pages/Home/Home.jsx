import React, { useState } from "react";
import { Section, InputField, Button } from "../../components";
import * as S from "./Home.style";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user.context";

function createUser(name, city, address, history, user) {
  fetch("http://localhost:8080/add-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, city, address }),
  })
    .then((data) => data.json())
    .then((data) => {
      user.setState({ data });
      history.push("/order");
    })
    .catch((err) => console.log(err));
}

function Home() {
  const user = React.useContext(UserContext);
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();

  const history = useHistory();

  return (
    <S.Home>
      <Section>
        <h1>To order, please fill in the form</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createUser(name, city, address, history, user);
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
    </S.Home>
  );
}

export default Home;
