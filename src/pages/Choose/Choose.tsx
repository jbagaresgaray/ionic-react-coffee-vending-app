import React, { useState } from "react";
import {
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { Stepper, Step } from "react-form-stepper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Choose.scss";
import AppButton from "../../components/AppButton/AppButton";
import FlavorSlider from "../../components/FlavorSlider/FlavorSlider";
import MilkSlider from "../../components/MilkSlider/MilkSlider";
import FoamSlider from "../../components/FoamSlider/FoamSlider";

const ChoosePage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [flavor, setFlavor] = useState<any>({});
  const [milkValue, setMilkValue] = useState(0);
  const [foamValue, setFoamValue] = useState(0);

  const [slider, setSlider] = useState<any>(null);
  const router = useIonRouter();

  const onFlavorChange = (value: any) => {
    setFlavor(value);
  };

  const onMilkChange = (value: any) => {
    setMilkValue(value);
  };

  const onFoamValue = (value: any) => {
    setFoamValue(value);
  };

  const stepsArr = [
    { label: "Caramel", component: <FlavorSlider onChange={onFlavorChange} /> },
    {
      label: "Milk",
      component: <MilkSlider value={milkValue} onChange={onMilkChange} />,
    },
    {
      label: "Foam",
      component: <FoamSlider value={foamValue} onChange={onFoamValue} />,
    },
    { label: "Checkout" },
  ];

  const onBackStep = () => {
    if (!slider.isBeginning) {
      slider.slidePrev();
    } else {
      router.push("/home", "back", "pop");
    }
  };

  const onNextStep = () => {
    if (!slider.isEnd) {
      if (slider.activeIndex === 2) {
        router.push("/checkout");
      } else {
        slider.slideNext();
      }
    } else {
      router.push("/checkout");
    }
  };

  const onSlideChange = () => {
    const index = slider.activeIndex;
    setActiveStep(index);
  };

  return (
    <IonPage className="ChoosePage">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ChoosePage_Content">
        <div className="ChoosePage_Header">CHOOSE YOUR FLAVOR</div>
        <div className="ChoosePage_Stepper">
          <Stepper
            className="ChoosePage_Stepper_Container"
            connectorStateColors
            activeStep={activeStep}
          >
            <Step label={flavor.name} />
            <Step label={`${milkValue}%`} />
            <Step label={`${foamValue}%`} />
            <Step label="" />
          </Stepper>
        </div>
        <Swiper
          className="ChoosePage_Swiper"
          observer
          observeParents
          allowTouchMove={false}
          onSlideChange={onSlideChange}
          onSwiper={(swiper) => {
            setSlider(swiper);
          }}
        >
          {stepsArr.map((item, index) => (
            <SwiperSlide key={index}>{item.component}</SwiperSlide>
          ))}
        </Swiper>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <AppButton
                label="Back"
                color="coffee"
                fill="outline"
                onClick={onBackStep}
              />
            </IonCol>
            <IonCol size="6">
              <AppButton label="Next" color="gradient" onClick={onNextStep} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default ChoosePage;
