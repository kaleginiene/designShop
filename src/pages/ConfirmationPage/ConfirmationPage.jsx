import React from "react";
import * as S from "./ConfirmationPage.style";
import Section from "../../components/Section/Section";
import { UserContext } from "../../context/user.context";

function ConfirmationPage() {
  const user = React.useContext(UserContext);
  const order = user.state;
  return (
    <S.Confirm>
      <Section>
        <h2>Your order is completed.</h2>
        <h3>Your order id: {order.data.id}</h3>
      </Section>
    </S.Confirm>
  );
}

export default ConfirmationPage;
