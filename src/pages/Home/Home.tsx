import {
  IonAvatar,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import AppButton from "../../components/AppButton/AppButton";

import userAvatar from "../../assets/avatar.png";
import imgBanner from "../../assets/Coffee.png";
import "./Home.scss";
import { COFFEES } from "../../constants/coffees";
import AppCoffeeCard from "../../components/AppCoffeeCard/AppCoffeeCard";

const Home: React.FC = () => {
  const coffeeArr: any[] = COFFEES;
  const slideOpts = {
    slidesPerView: 1,
    centeredSlides: true,
  };
  const router = useIonRouter();

  const logout = () => {
    router.push("/landing", "back", "pop");
  };

  const makeCoffee = () => {
    router.push("/choose");
  };

  return (
    <IonPage className="HomePage">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle></IonTitle>
          <IonAvatar slot="end" onClick={logout}>
            <img src={userAvatar} alt="" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="HomePage_Content">
        <div className="HomePage_Header">GET YOUR COFFEE NOW</div>
        <div className="HomePage_ImageBanner">
          <img src={imgBanner} alt="" />
        </div>
        <IonSlides pager options={slideOpts}>
          {coffeeArr.map((item, index) => (
            <IonSlide key={index}>
              <IonGrid>
                <IonRow>
                  {item.group.map((group: any, index2: number) => (
                    <IonCol size="6" key={index2}>
                      <AppCoffeeCard label={group.name} image={group.img} />
                    </IonCol>
                  ))}
                </IonRow>
              </IonGrid>
            </IonSlide>
          ))}
        </IonSlides>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <AppButton
            label="Make your own coffee"
            color="gradient"
            onClick={makeCoffee}
          />
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
