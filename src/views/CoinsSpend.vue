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
            <ion-title size="large">Spend Coins</ion-title>
          </ion-toolbar>
        </ion-header>
        <div class="card-alfa">
            <ion-icon class="text-a1" ></ion-icon>
            <div class="text-a1">10 coins&nbsp;</div>
        </div>
        <div style="margin-left: 4%; padding-top: 11%; overflow:scroll; white-space: nowrap;">
            <div class="card-alfa custom-swiper bg-i1 suggestion-block" style="margin-left: 0% !important;">
                <div class="text-a1">MTS Startup Hub Merchandise</div>
            </div>
            <div class="card-alfa custom-swiper bg-i2 suggestion-block" style="margin-left: 0% !important;">
                <div class="text-a1">Meet season `23 featured experts</div>
            </div>
        </div>
    </ion-content>
</ion-page>
</template>


<style scoped>

    .suggestion-block{
        margin-top: 0 !important;
        margin-bottom: 5%;
        height: 48vh !important;
        background-color: rgba(255, 255, 255, 0.104) !important;
        background-image: none !important;
    }

    .suggestion-block .text-a1{
        margin-left: 4%;
        margin-right: 4%;
        text-align: left;
        position: absolute;
        white-space: normal; 
        word-wrap: break-word !important;
        background-image: linear-gradient(45deg, #797973 0%, #ffffff 50%, #fbfcdb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        bottom: 9%;
        left: 0% !important;
        font-size: 32px;
        font-weight: 500;
    }
    
    ion-page {
        --background: #111111;
    }

    .card-alfa {
        position: relative;
        border-radius: 25px;
        height: 18vh;
        width: auto;
        background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
        margin-top: 7%;
        margin-left: 4%;
        margin-right: 4%;
    }

    .small-card{
        height: 12vh;
    }

    .small-card-left{
        margin-right: 1%;
        background-color: rgba(255, 255, 255, 0.104) !important;
        background-image: none;
    }

    .small-card-right{
        background-color: rgba(255, 255, 255, 0.104) !important;
        background-image: none;
    }

    .text-a1{
        text-align: left;
        position: absolute;
        white-space: normal; 
        word-wrap: break-word !important;
        background-image: linear-gradient(45deg, #797973 0%, #020202 50%, #fbfcdb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        bottom: 9%;
        
        right: 10%;
        font-size: 35px;
        font-weight: 500;
    }

    .small-card .text-a1{
        left: 11% !important;
        font-size: 25px;
    }

    .small-card-right .text-a1{
        font-size: 25px;
        bottom: 14%;
        background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
    }

    .small-card-left .text-a1{
        text-align: left !important;
        font-size: 25px;
        bottom: 14%;
        background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    }
</style>

  
<script lang="ts">
import {
    defineComponent
} from 'vue';

import {
    IonPage,
    IonContent,
} from '@ionic/vue';

import { closeOutline, sparkles } from 'ionicons/icons';

export default defineComponent({
    name: 'CoinsSpend',
    components: {
        IonContent,
        IonPage,
    },
    setup() {
        return {
            closeOutline,
            sparkles
        }
    }
});
</script>
