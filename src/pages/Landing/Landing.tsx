import React from "react";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import "./Landing.scss";
import AppButton from "../../components/AppButton/AppButton";

const LandingPage: React.FC = () => {
  const router = useIonRouter();

  const loginAccount = () => {
    router.push("/login");
  };

  return (
    <IonPage className="LandingPage">
      <IonContent fullscreen className="LandingPage_Content">
        <div className="LandingPage_Header">START YOUR DAY FRESH</div>

        <div className="LandingPage_Footer">
          <div className="LandingPage_Footer_Container">
            <AppButton
              label="Log in with your account"
              color="white"
              onClick={loginAccount}
            />
            <AppButton label="Connect with facebook" color="facebook" />
          </div>
          <div className="LandingPage_Footer_Container">
            <div className="LandingPage_Footer_Container_Text">
              Don't you have an account?
            </div>
            <AppButton label="Sign Up" fill="outline" color="white" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
