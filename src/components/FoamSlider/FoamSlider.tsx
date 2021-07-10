import { IonAvatar } from "@ionic/react";
import React, { useState } from "react";
import Slider from "react-rangeslider";
import "./FoamSlider.scss";
import foamImg from "../../assets/Foam.png";

interface Props {
  value: number;
  onChange?: (value: any) => void;
}

const defaultProps: Props = {
  value: 0,
};

const FoamSlider: React.FC<Props> = ({ value, onChange }) => {
  const [volume, setVolume] = useState(value);

  const formatPercent = (p: any) => p + "%";

  const handleOnChange = (value: number) => {
    setVolume(value);
    return onChange && onChange(value);
  };

  return (
    <div className="FoamSlider">
      <div className="FoamSlider_Container">
        <IonAvatar>
          <img src={foamImg} alt="" />
        </IonAvatar>
        <h2 className="FoamSlider_Container_Caption">Foam</h2>
      </div>
      <div className="FoamSlider_RangeContainer">
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

FoamSlider.defaultProps = defaultProps;

export default FoamSlider;
