import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  mdTransitionAnimation,
  setupConfig,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import SwiperCore, {
  Controller,
  EffectCoverflow,
  EffectFade,
  Lazy,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
} from "swiper";

import Home from "./pages/Home/Home";
import LandingPage from "./pages/Landing/Landing";
import LoginPage from "./pages/Login/Login";
import ChoosePage from "./pages/Choose/Choose";

/* Theme variables */
import "./theme/shared.scss";
import "./theme/variables.scss";

setupConfig({
  backButtonIcon: arrowBackOutline,
  backButtonText: "",
  navAnimation: mdTransitionAnimation,
});

SwiperCore.use([
  Controller,
  Pagination,
  Scrollbar,
  Navigation,
  Thumbs,
  Lazy,
  EffectFade,
  EffectCoverflow,
  Parallax,
]);

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/landing">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/choose">
          <ChoosePage />
        </Route>
        <Route exact path="/">
          <Redirect to="/landing" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
