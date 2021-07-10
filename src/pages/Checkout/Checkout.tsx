import React, { useState } from "react";
import {
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import "./Checkout.scss";
import AppButton from "../../components/AppButton/AppButton";
import AppCoffeeCard from "../../components/AppCoffeeCard/AppCoffeeCard";
import { CUP_SIZES } from "../../constants/flavors";
import AppInputStepper from "../../components/AppInputStepper/AppInputStepper";

const CheckoutPage: React.FC = () => {
  const router = useIonRouter();

  const onBack = () => {
    router.goBack();
  };

  return (
    <IonPage className="CheckoutPage">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="CheckoutPage_Content">
        <div className="CheckoutPage_Header">Confirm your Order</div>
        <div className="CheckoutPage_Container">
          <AppCoffeeCard label="Cappuccino" image="../../assets/Group1.png" />
        </div>
        <IonList>
          <IonListHeader mode="ios">
            <IonLabel>Sizes</IonLabel>
          </IonListHeader>
          {CUP_SIZES.map((item, index) => (
            <IonItem key={index}>
              <IonLabel>{item.name}</IonLabel>
              <div slot="end">
                <AppInputStepper
                  max={10}
                  min={0}
                  step={1}
                  value={1}
                  onChange={(num: any) => console.log(num)}
                />
              </div>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <AppButton
                label="Back"
                color="coffee"
                fill="outline"
                onClick={onBack}
              />
            </IonCol>
            <IonCol size="6">
              <AppButton label="Add to Cart" color="gradient" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default CheckoutPage;
