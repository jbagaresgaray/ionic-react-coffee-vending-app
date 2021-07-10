import { IonAvatar } from "@ionic/react";
import React, { useState } from "react";
import Slider from "react-rangeslider";
import "./MilkSlider.scss";
import milkImg from "../../assets/Milk.png";

interface Props {
  value: number;
  onChange?: (value: any) => void;
}

const defaultProps: Props = {
  value: 0,
};

const MilkSlider: React.FC<Props> = ({ value, onChange }) => {
  const [volume, setVolume] = useState(value);

  const formatPercent = (p: any) => p + "%";

  const handleOnChange = (value: number) => {
    setVolume(value);
    return onChange && onChange(value);
  };

  return (
    <div className="MilkSlider">
      <div className="MilkSlider_Container">
        <IonAvatar>
          <img src={milkImg} alt="" />
        </IonAvatar>
        <h2 className="MilkSlider_Container_Caption">Milk</h2>
      </div>
      <div className="MilkSlider_RangeContainer">
        <Slider
          min={0}
          max={100}
          value={volume}
          handleLabel={String(volume)}
          format={formatPercent}
          orientation="vertical"
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

MilkSlider.defaultProps = defaultProps;

export default MilkSlider;
