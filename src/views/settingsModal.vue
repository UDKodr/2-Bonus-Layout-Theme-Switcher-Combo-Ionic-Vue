<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-card mode="md">
      <ion-card-header>
        <ion-card-title>Themes</ion-card-title>
      </ion-card-header>
    </ion-card>
    <ion-card
      ><ion-accordion-group>
        <ion-accordion value="Dark Themes">
          <ion-item slot="header">
            <ion-label>Theme Selection</ion-label>
          </ion-item>
          <ion-list slot="content">
            <ion-card>
              <ion-radio-group v-model="theme">
                <ion-item style="--background: #d50000">
                  <ion-label>Red</ion-label>
                  <ion-radio
                    style="--color-checked: white; --color: white"
                    value="darkRed"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item disabled style="--background: #c51162; opacity: 1">
                  <ion-label>Pink</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: white; --color: white"
                    value="darkPink"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item style="--background: #aa00ff; opacity: 1">
                  <ion-label>Purple</ion-label>
                  <ion-radio
                    style="--color-checked: white; --color: white"
                    value="darkPurple"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item disabled style="--background: #6200ea; opacity: 1">
                  <ion-label>Deep Purple</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: white; --color: white"
                    value="darkDarkPurple"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item disabled style="--background: #304ffe; opacity: 1">
                  <ion-label>Indigo</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: white; --color: white"
                    value="darkIndigo"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item style="--background: #2962ff">
                  <ion-label>Blue</ion-label>
                  <ion-radio
                    style="--color-checked: white; --color: white"
                    value="darkBlue"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item disabled style="--background: #0091ea; opacity: 1">
                  <ion-label>Light Blue</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: white; --color: white"
                    value="darkLightBlue"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item
                  disabled
                  style="--background: #00b8d4; color: black; opacity: 1"
                >
                  <ion-label>Cyan</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: black; --color: black"
                    value="darkCyan"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item
                  disabled
                  style="--background: #00bfa5; color: black; opacity: 1"
                >
                  <ion-label>Teal</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: black; --color: black"
                    value="darkTeal"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item disabled style="--background: #00c853; opacity: 1">
                  <ion-label>Green</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: black; --color: black"
                    value="darkGreen"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item style="--background: #64dd17; color: black">
                  <ion-label>Light Green</ion-label>
                  <ion-radio
                    style="--color-checked: black; --color: black"
                    value="darkLightGreen"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item
                  disabled
                  style="--background: #aeea00; color: black; opacity: 1"
                >
                  <ion-label>Lime</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: black; --color: black"
                    value="darkLime"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item
                  disabled
                  style="--background: #ffd600; color: black; opacity: 1"
                >
                  <ion-label>Yellow</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: black; --color: black"
                    value="darkYellow"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item
                  disabled
                  style="--background: #ffab00; color: black; opacity: 1"
                >
                  <ion-label>Amber</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: black; --color: black"
                    value="darkAmber"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item
                  disabled
                  style="--background: #ff6d00; color: black; opacity: 1"
                >
                  <ion-label>Orange</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: black; --color: black"
                    value="darkOrange"
                    slot="end"
                  ></ion-radio>
                </ion-item>
                <ion-item disabled style="--background: #dd2c00; opacity: 1">
                  <ion-label>Deep Orange</ion-label>
                  <ion-label slot="end">(Pro Color)</ion-label>
                  <ion-radio
                    style="--color-checked: white; --color: white"
                    value="darkDarkOrange"
                    slot="end"
                  ></ion-radio>
                </ion-item>
              </ion-radio-group>
            </ion-card>
          </ion-list> </ion-accordion></ion-accordion-group
    ></ion-card>
    <ion-card mode="md">
      <ion-card-header>
        <ion-card-title>Layouts</ion-card-title>
      </ion-card-header>
    </ion-card>
    <ion-card>
      <ion-accordion-group>
        <ion-accordion value="mainScreen">
          <ion-item slot="header">
            <ion-label>Main Screen</ion-label>
          </ion-item>
          <ion-list slot="content">
            <ion-card>
              <ion-radio-group v-model="mainScreenLayout"
                ><ion-item>
                  <ion-icon slot="start" :icon="cardSharp"></ion-icon>
                  <ion-label>Card</ion-label>
                  <ion-radio value="Card" slot="end"> </ion-radio></ion-item
                ><ion-item>
                  <ion-icon slot="start" :icon="gridSharp"></ion-icon>
                  <ion-label>Grid</ion-label>
                  <ion-radio value="Grid" slot="end"> </ion-radio
                ></ion-item>
                <ion-item>
                  <ion-icon slot="start" :icon="listSharp"></ion-icon>
                  <ion-label>List</ion-label>
                  <ion-radio value="List" slot="end"> </ion-radio
                ></ion-item>
              </ion-radio-group>
            </ion-card>
          </ion-list>
        </ion-accordion>

        <ion-accordion value="listScreens">
          <ion-item slot="header">
            <ion-label>List Screens</ion-label>
          </ion-item>

          <ion-list slot="content">
            <ion-card
              ><ion-radio-group v-model="listScreenLayout"
                ><ion-item>
                  <ion-icon slot="start" :icon="listSharp"></ion-icon>
                  <ion-label>Basic Details List</ion-label>
                  <ion-radio value="BasicList" slot="end">
                  </ion-radio></ion-item
                ><ion-item>
                  <ion-icon slot="start" :icon="expandSharp"></ion-icon>
                  <ion-label>Expanded Details List</ion-label>
                  <ion-radio value="ExpandedList" slot="end"> </ion-radio
                ></ion-item>
              </ion-radio-group>
            </ion-card>
          </ion-list>
        </ion-accordion> </ion-accordion-group></ion-card
    ><ion-card>
      <ion-toolbar>
        <ion-segment>
          <ion-segment-button @click="dismiss()">
            <ion-icon :icon="closeSharp"></ion-icon>
            <ion-label>Cancel</ion-label></ion-segment-button
          >
          <ion-segment-button @click="setTheme()">
            <ion-icon :icon="saveSharp"></ion-icon>
            <ion-label>Save</ion-label></ion-segment-button
          ></ion-segment
        >
      </ion-toolbar></ion-card
    >
  </ion-content>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  IonAccordionGroup,
  IonAccordion,
  IonCard,
  IonItem,
  IonList,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import {
  closeSharp,
  saveSharp,
  cardSharp,
  gridSharp,
  listSharp,
  expandSharp,
} from "ionicons/icons";
import { store } from "@/theme/theme";
export default defineComponent({
  data() {
    return {
      theme: localStorage.getItem("themeSet"),
      mainScreenLayout: localStorage.getItem("mainScreenLayout"),
      listScreenLayout: localStorage.getItem("listScreenLayout"),
    };
  },
  name: "settingsModal",
  props: {
    title: { type: String, default: "Theme Settings" },
  },
  components: {
    IonContent,
    IonHeader,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
    IonAccordionGroup,
    IonAccordion,
    IonCard,
    IonItem,
    IonList,
    IonLabel,
    IonRadio,
    IonRadioGroup,
  },
  methods: {
    setTheme() {
      // @ts-ignore: Object is possibly 'null'.
      localStorage.setItem("themeSet", this.theme);
      // @ts-ignore: Object is possibly 'null'.
      localStorage.setItem("mainScreenLayout", this.mainScreenLayout);
      // @ts-ignore: Object is possibly 'null'.
      localStorage.setItem("listScreenLayout", this.listScreenLayout);
      store.setLayouts();
      store.setItem();
      this.dismiss();
    },
    dismiss() {
      modalController.dismiss();
      this.$forceUpdate();
    },
  },
  setup() {
    return {
      closeSharp,
      saveSharp,
      cardSharp,
      gridSharp,
      listSharp,
      expandSharp,
    };
  },
});
</script>
