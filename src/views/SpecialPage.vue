<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Специальное</ion-title>
          </ion-toolbar>
        </ion-header>
        <content class="page">
            <div class="card-alfa" style="margin-left: 4%; margin-right: 4%; box-shadow: -0.2lpx 0.2px #ff484871;">
                <div class="text-a1">Митап: "MTS Startup Hub"</div>
            </div>
            <div style="margin-left: 4%; padding-top: 11%; overflow:scroll; white-space: nowrap;">
                <div class="card-alfa custom-swiper bg-i1" style="margin-left: 0% !important;">
                    <div class="text-a1">Расскажите о своем стартапе инвесторам</div>
                </div>
                <div class="card-alfa custom-swiper bg-i2">
                    <div class="text-a1">Познакомьтесь с экпертами сезона `23</div>
                </div>
            </div>
        </content>
      </ion-content>
    </ion-page>
  </template>

  <style scoped>

    @media (prefers-color-scheme: dark) {
        ion-content {
        --background: #000 url('../assets/abstract/black-and-noise-background.png') no-repeat center center / cover;
        box-shadow: 0 0 3px 0 var(--ion-color-medium);
        }
    }

    content{
        display: block;
        margin-top: 6%;
    }
    .card-alfa {
        position: relative;
        border-radius: 26px;
        height: 30vh;
        width: auto;
        background-image: url("../assets/photos/charlesdeluvio-wn7dOzUh3Rs-unsplash.jpg");
        background-size:     cover;
        background-repeat:   no-repeat;
    }

    .custom-swiper {
        display: inline-block;
        height: 20vh;
        width: 60vw !important;
        margin-left: 5%;
    }

    .text-a1{
        position: absolute;
        white-space: normal;
        word-wrap: break-word !important;
        color: white;
        bottom: 10%;
        left: 3%;
        right: 3%;
        font-size: 24px;
        font-weight: 500;
    }

    .custom-swiper .text-a1{
        left: 7%;
        font-size: 14px;
        font-weight: 600;
    }

    .bg-i1{
        background-image: none;
        background-color: #e10d1e !important;
    }

    .bg-i2{
        background-image: none;
        background-color: #204171 !important;
    }
  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  
  export default  defineComponent({
    name: 'SpecialPage',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
  });
  </script>
  