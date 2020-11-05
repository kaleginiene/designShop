import React from "react";
import * as S from "./Card.style";

function Card({ title, image, loading, handleClick }) {
  title = title || "Fashion Item";
  if (loading) {
    return <S.LoadingCard>Loading...</S.LoadingCard>;
  } //jeigu funkcijoje pirmas returnas true, tuomet toliau nebejungia. Jei if'e yra return'as, else nebėra būtina

  return (
    <S.Card onClick={handleClick}>
      {image && <S.Image src={image} alt={title} />}
      <S.Title>{title}</S.Title>
    </S.Card>
  );
}

export default Card;
