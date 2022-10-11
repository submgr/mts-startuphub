<template>
    
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Потратить баллы</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Потратить баллы</ion-title>
          </ion-toolbar>
        </ion-header>
        <div class="card-alfa">
            <ion-icon class="text-a1" ></ion-icon>
            <div class="text-a1">10 баллов</div>
        </div>
        <div style="margin-left: 4%; padding-top: 6%; overflow:scroll; white-space: nowrap;">
            <div class="card-alfa custom-swiper bg-i1 suggestion-block bg-1" style="margin-left: 0% !important;">
                <div>
                    <div class="text-a1 suggestion-text">Набор мерча<br>MTS Startup Hub</div>
                </div>
            </div>
            <div class="card-alfa custom-swiper bg-i1 suggestion-block bg-2" style="margin-left: 0% !important;">
                <div class="suggestion-text-wrapper">
                    <div class="text-a1 suggestion-text">Книга о предпринимательстве на выбор</div>
                </div>
            </div>
            <div class="card-alfa custom-swiper bg-i2 suggestion-block bg-3" style="margin-left: 0% !important;">
                <div>
                    <div class="text-a1 suggestion-text">Индивидуальная сессия с экспертом</div>
                </div>
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
    }

    .bg-1{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://images.unsplash.com/photo-1616006897093-5e4635c0de35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80') !important;
    }

    .bg-2{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80') !important;
    }

    .bg-3{
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgb(11, 11, 11)), url('https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80') !important;
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
        font-size: 29px;
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
        bottom: 10%;
        
        right: 5%;
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
