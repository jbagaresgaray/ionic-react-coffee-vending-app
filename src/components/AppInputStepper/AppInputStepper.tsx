import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";
import React, { useState } from "react";

import "./AppInputStepper.scss";

interface Props {
  value: string | number;
  min: string | number;
  max?: string | number | null;
  step?: string | number;
  style?: any;
  onChange?: (value: any) => void;
}

const defaultProps: Props = {
  value: 0,
  min: 0,
  max: null,
  step: 1,
};

const AppInputStepper: React.FC<Props> = ({
  value,
  min,
  max,
  style,
  step,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const increment = () => {
    if (typeof max === "number" && inputValue >= max) return;
    const value = Number(inputValue) + Number(step);
    setInputValue(value);
    return onChange && onChange(value);
  };

  const decrement = () => {
    if (typeof min === "number" && inputValue <= min) return;
    const value = Number(inputValue) - Number(step);
    setInputValue(value);
    return onChange && onChange(value);
  };

  return (
    <div className="input-number" style={style}>
      <button type="button" onClick={decrement}>
        <IonIcon icon={removeOutline} />
      </button>
      <span>{inputValue}</span>
      <button type="button" onClick={increment}>
        <IonIcon icon={addOutline} />
      </button>
    </div>
  );
};

AppInputStepper.defaultProps = defaultProps;

export default AppInputStepper;
