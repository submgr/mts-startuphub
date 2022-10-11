<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Startup at Meta</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Startup at Meta <ion-icon id="open-modal" expand="block" style="margin-bottom: -1.5%; font-weight: 200;" :icon="helpCircleOutline" /></ion-title>
          </ion-toolbar>
        </ion-header>
        <div style="white-space: nowrap;">
          <div style="display: inline-block;" class="gamebar"><span class="energy_amount">0/5</span><br><span class="energy_subtext">энергии</span></div>
          <div style="display: inline-block; margin-left: 0.5%;" class="gamebar gamebar2"><span class="energy_amount">x1.4</span><br><span class="energy_subtext">множитель</span></div>
        </div>
        <img class="building small">
        <div class="card-alfa">
            <ion-icon class="text-a1" ></ion-icon>
            <div class="text-a1">Уровень развития: Идея<br>Репутация CEO: Незнакомец<br>Стратегические отношения: Нет<br>Текущие клиенты: 2<br>Прибыль приблизительно: 62$/квартал</div>
        </div>
        <ion-modal
          trigger="open-modal"
          :initial-breakpoint="0.65"
          :breakpoints="[0, 0.25, 0.5, 0.75]"
          handle-behavior="cycle"
          >
          <ion-content class="ion-padding">
            <div class="ion-margin-top">
              <ion-label><b>Добро пожаловать в игру «Startup at Meta»!</b><br><br>Это — игра в формате симулятора, с помощью которой Вы сможете попробовать себя на месте создателя (CEO) перспективного стартапа.<br><br>По ходу игры, мы будем рассказывать Вам больше о мире предпринимательства и стартапов, а так же о том, как именно Вам сможет помочь сообщество MTS Startup Hub. Полученные знания Вы сможете попробовать на собственном мета стартапе!<br><br>Периодически Вы будете получать энергию, которую можно потратить на действия со своим стартапом. Однако, будьте внимательны: энергия ограничена, поэтому выбирайте с умом. Ваши действия будут влиять на показатели стартапа и его рост.</ion-label>
            </div>
          </ion-content>
        </ion-modal>
      </ion-content>

      
    </ion-page>
  </template>

  <style scoped>
    .gamebar{
      margin-left: 4%;
      margin-right: 4%;
      width: 40%;
      padding-top: 2.2%;
      border-radius: 17px;
      margin-top: 4vh;
      height: 8vh;
      background-image: linear-gradient(120deg, #91d55d73 0%, #4caf00e7 100%);
      text-align: center;
    }

    .gamebar2{
      background-image: linear-gradient(120deg, #e36aa58d 0%, #ff00e6e4 100%);
    }
    .energy_amount{
      text-align: center;
      margin-left: 3%;
      margin-right: 3%;
      font-size: 23px;
      font-weight: 700;
    }
    .energy_subtext{
      text-align: center;
      margin-left: 3%;
      margin-right: 3%;
      font-size: 17px;
      font-weight: 500;
    }
    .building{
        margin-top: 7%;
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
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonModal } from '@ionic/vue';

  import { helpCircleOutline } from 'ionicons/icons';
  
  export default  defineComponent({
    name: 'Tab1Page',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonModal },
    setup() {
        return{
            helpCircleOutline
        }
    }
  });
  </script>
  