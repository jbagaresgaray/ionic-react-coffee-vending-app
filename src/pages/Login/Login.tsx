import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { personOutline, lockClosedOutline } from "ionicons/icons";
import AppButton from "../../components/AppButton/AppButton";

import "./Login.scss";

const LoginPage: React.FC = () => {
  const router = useIonRouter();

  const login = () => {
    router.push("/home");
  };

  return (
    <IonPage className="LoginPage">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="LoginPage_Content">
        <div className="LoginPage_Header">Log In</div>
        <div className="LoginPage_Footer">
          <div className="LoginPage_Form">
            <IonItem lines="full">
              <IonIcon icon={personOutline} slot="start" />
              <IonInput
                placeholder="E-mail"
                clearInput
                color="white"
              ></IonInput>
            </IonItem>
            <IonItem lines="full">
              <IonIcon icon={lockClosedOutline} slot="start" />
              <IonInput
                placeholder="Password"
                clearInput
                color="white"
              ></IonInput>
            </IonItem>
            <div className="LoginPage_Form_Text">Forgot Password?</div>
          </div>
          <div className="LoginPage_Footer_Container">
            <AppButton label="Login" color="white" onClick={login} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
