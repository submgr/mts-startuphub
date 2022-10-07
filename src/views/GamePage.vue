<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Play& Learn</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Startup at Meta <ion-icon style="margin-bottom: -1.5%; font-weight: 200;" :icon="helpCircleOutline" /></ion-title>
          </ion-toolbar>
        </ion-header>
        <img class="building small">
        <div class="card-alfa">
            <ion-icon class="text-a1" ></ion-icon>
            <div class="text-a1">Development stage of the product: Idea<br>CEO's reputation: Unknown<br>Strategic relationships: None<br>Current customers: 2<br>Estimated profit: 62$/year</div>
        </div>
      </ion-content>
    </ion-page>
  </template>

  <style scoped>
    .building{
        margin-top: 30%;
        height: 40vh;
        width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .small{
        content:url("../assets/game/skyscraper_small.svg");
    }

    .card-alfa {
        position: relative;
        border-radius: 25px;
        height: 16vh;
        width: auto;
        background-image: linear-gradient(110deg, #51585966 0%, #111010b2 100%);
        margin-top: 2.5%;
        margin-left: 4%;
        margin-right: 4%;
    }

    .text-a1{
        text-align: left;
        position: absolute;
        white-space: normal; 
        word-wrap: break-word !important;
        background-image: linear-gradient(45deg, #bea1a1d2 0%, #bea1a1 50%, #fbfcdb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        top: 13%;
        line-height: 1.3;
        left: 5%;
        font-size: 15px;
        font-weight: 500;
    }
  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

  import { helpCircleOutline } from 'ionicons/icons';
  
  export default  defineComponent({
    name: 'Tab1Page',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    setup() {
        return{
            helpCircleOutline
        }
    }
  });
  </script>
  