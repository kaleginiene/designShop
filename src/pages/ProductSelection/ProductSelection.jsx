import React, { useState } from "react";
import { Card, Section } from "../../components";
import * as S from "./ProductSelection.style";
import products from "../../utils/products";
import { UserContext } from "../../context/user.context";
import { useHistory } from "react-router-dom";

function createOrder(userID, item) {
  fetch("http://localhost:8080/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userID, item }),
  });
}

function ProductSelection() {
  const user = React.useContext(UserContext);
  let userID = user.state;
  userID = userID.data.id;

  const [item, setItem] = useState("");
  const history = useHistory();

  return (
    <S.ProductSelection>
      <Section>
        <h1>Please select your preference:</h1>
        <S.TwoGridDesktop>
          {products.map((product) => (
            <S.CardWrapper key={product.id}>
              <Card
                title={product.title}
                image={product.image}
                handleClick={() => {
                  setItem(product.title);
                  createOrder(userID, item);
                  history.push("/confirm");
                }}
              />
            </S.CardWrapper>
          ))}
        </S.TwoGridDesktop>
      </Section>
    </S.ProductSelection>
  );
}

export default ProductSelection;
