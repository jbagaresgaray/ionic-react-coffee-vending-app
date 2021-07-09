import React from "react";
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
} from "@ionic/react";
import Stepper from "react-stepper-horizontal"; 
import "./Choose.scss";
import AppButton from "../../components/AppButton/AppButton";
import FlavorSlider from "../../components/FlavorSlider/FlavorSlider";

const ChoosePage: React.FC = () => {
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
            steps={[
              { title: "" },
              { title: "" },
              { title: "" },
              { title: "" },
            ]}
            activeStep={1}
          />
        </div>
        <div className="ChoosePage_Swiper">
          <FlavorSlider />
        </div>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <AppButton label="Back" color="coffee" fill="outline" />
            </IonCol>
            <IonCol size="6">
              <AppButton label="Next" color="gradient" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default ChoosePage;
