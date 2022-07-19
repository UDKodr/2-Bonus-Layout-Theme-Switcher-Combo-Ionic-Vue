<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Layout & Theme Switcher</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div v-if="store.mainScreenLayout === 'Card'">
        <ion-card mode="md">
          <img
            src="http://cdn.pixabay.com/photo/2019/11/11/21/32/neon-4619558_960_720.jpg"
          />
          <ion-card-header>
            <ion-card-title>My Item 1</ion-card-title>
          </ion-card-header>
        </ion-card>
        <ion-card>
          <img
            src="http://cdn.pixabay.com/photo/2018/01/26/21/38/two-3109835_960_720.jpg"
          />
          <ion-card-header>
            <ion-card-title>My Item 2</ion-card-title>
          </ion-card-header>
        </ion-card>
        <ion-card>
          <img
            src="http://cdn.pixabay.com/photo/2016/09/06/23/05/number-1650467_960_720.jpg"
          />
          <ion-card-header>
            <ion-card-title>My Item 3</ion-card-title>
          </ion-card-header>
        </ion-card>
      </div>
      <div v-if="store.mainScreenLayout === 'Grid'">
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-card mode="md">
                <img
                  src="http://cdn.pixabay.com/photo/2019/11/11/21/32/neon-4619558_960_720.jpg"
                />
                <ion-card-header>
                  <ion-card-title>Item 1</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card>
                <img
                  src="http://cdn.pixabay.com/photo/2018/01/26/21/38/two-3109835_960_720.jpg"
                />
                <ion-card-header>
                  <ion-card-title>Item 2</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card>
                <img
                  src="http://cdn.pixabay.com/photo/2016/09/06/23/05/number-1650467_960_720.jpg"
                />
                <ion-card-header>
                  <ion-card-title>Item 3</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
            <ion-col size="6"></ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div v-if="store.mainScreenLayout === 'List'">
        <ion-list>
          <ion-item detail="true">
            <ion-label>My Item 1</ion-label>
            <ion-icon
              :icon="newspaperSharp"
              style="color: white"
              slot="start"
            ></ion-icon>
          </ion-item>

          <ion-item detail="true">
            <ion-label>My Item 2</ion-label>
            <ion-icon
              :icon="schoolSharp"
              style="color: lightblue"
              slot="start"
            ></ion-icon>
          </ion-item>

          <ion-item detail="true">
            <ion-label>My Item 3</ion-label>
            <ion-icon
              :icon="trophySharp"
              style="color: gold"
              slot="start"
            ></ion-icon>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonIcon,
  IonCardTitle,
  IonLabel,
} from "@ionic/vue";
import {
  newspaperSharp,
  schoolSharp,
  trophySharp,
  ribbonSharp,
} from "ionicons/icons";
import { store } from "../theme/theme";

export default defineComponent({
  name: "FolderPage",
  data() {
    return {
      store,
    };
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonIcon,
    IonCardTitle,
    IonLabel,
  },
  setup() {
    return {
      newspaperSharp,
      schoolSharp,
      trophySharp,
      ribbonSharp,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
