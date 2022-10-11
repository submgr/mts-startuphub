<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Чаты</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Чаты</ion-title>
          </ion-toolbar>
        </ion-header>
        <!--<router-link to="/tabs/auth">Auth Page</router-link>
        <router-link to="/tabs/onboarding">Onboarding Screen</router-link>-->
        <div class="chats_list">
          <div v-for="chat in chats" v-bind:key="chat">
            <ChatListElement :name="chat.name" :avatar_url="chat.avatar_url"></ChatListElement>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <style scoped>
  .chats_list{
    margin-top: 8%;
    margin-left: 2.5%;
  }
  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  
  import ChatListElement from '../components/ChatListElement.vue'
  
  export default  defineComponent({
    name: 'ChatsList',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, ChatListElement },
    data() {
        return {
            chats: [
              {
                name: 'Искусственный интеллект',
                avatar_url: "https://images.unsplash.com/photo-1636690581110-a512fed05fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              },
              {
                name: 'Дополненная реальность',
                avatar_url: "https://images.unsplash.com/photo-1605714048976-892f6b95320e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              },
              {
                name: 'Технологии в области образовании',
                avatar_url: "https://images.unsplash.com/photo-1583361703488-e3987b862ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              },
              {
                name: 'Большие данные,\t\nПО для B2B',
                avatar_url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              },
              {
                name: 'Технологии в здравоохранении',
                avatar_url: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              }
          ]
        }
    }
  });
  </script>
  