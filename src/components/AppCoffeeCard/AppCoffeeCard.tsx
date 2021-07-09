import { IonCard, IonCardHeader, IonCardSubtitle } from "@ionic/react";
import React from "react";
import "./AppCoffeeCard.scss";

interface Props {
  label?: string;
  image?: string | any;
}

const AppCoffeeCard: React.FC<Props> = ({ label, image }) => {
  return (
    <IonCard className="AppCoffeeCard">
      <IonCardHeader>
        <IonCardSubtitle>{label}</IonCardSubtitle>
      </IonCardHeader>
      <div className="image-container">
        <img src={image} alt="" />
      </div>
    </IonCard>
  );
};

export default AppCoffeeCard;
