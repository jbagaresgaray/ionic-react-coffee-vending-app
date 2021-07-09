import { IonButton } from "@ionic/react";
import React from "react";

import "./AppButton.scss";

interface Props {
  color?: "white" | "facebook" | "coffee" | "gradient";
  fill?: "clear" | "default" | "outline" | "solid" | undefined;
  label?: string;
  onClick?: () => void | Promise<void>;
}

const AppButton: React.FC<Props> = ({ color, fill, label, onClick }) => {
  if (color === "gradient") {
    return (
      <IonButton
        className="AppButton AppButtonCoffee"
        expand="block"
        shape="round"
        fill={fill}
        onClick={onClick}
      >
        {label}
      </IonButton>
    );
  } else {
    return (
      <IonButton
        className="AppButton"
        expand="block"
        shape="round"
        color={color}
        fill={fill}
        onClick={onClick}
      >
        {label}
      </IonButton>
    );
  }
};

export default AppButton;
