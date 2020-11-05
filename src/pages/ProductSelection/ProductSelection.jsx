import React from "react";
import { Card, Section } from "../../components";
import * as S from "./ProductSelection.style";
import products from "../../utils/products";

function ProductSelection() {
  return (
    <>
      <Section>
        <h1>Please select your preference:</h1>
        <S.TwoGridDesktop>
          {products.map((product) => (
            <S.CardWrapper key={product.id}>
              <Card
                title={product.title}
                image={product.image}
                handleClick={() => alert(product.title)}
              />
            </S.CardWrapper>
          ))}
        </S.TwoGridDesktop>
      </Section>
    </>
  );
}

export default ProductSelection;
