<template>
    <ion-page>
        <div
            v-if="showStory"
            style="position: absolute; height: 100vh; width: 100vw; background: black; top: 0rem !important;"
            >
            <div style="position: fixed; z-index: 2; padding-top: 1.5rem; right: 0; padding-right: 1rem;">
                <ion-icon :icon="closeOutline" style="color: white; font-size: 2rem;" @click="toggleStory"></ion-icon>
            </div>
            <section class="justify-center" style="position: flex; align-items: center; justify-content: center;">
                <Stories
                v-if="showStory"
                :stories="items" :interval="8000"
                style="position: absolute; top: 0rem !important; height: 100%; width: 100%;"
                />
            </section>
        </div>
      <ion-header>
        <ion-toolbar>
          <ion-title>Подборка</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Подборка</ion-title>
          </ion-toolbar>
        </ion-header>
        <div style="padding: 20px; padding-top: 25px; overflow:scroll; white-space: nowrap; overflow-x: hidden !important;" @click="toggleStory">
            <div class="user-stories-avatar1" style="height: 70px; width: 70px; border-radius: 50%; display: inline-block; margin-right: 3%;"></div>
            <div class="user-stories-avatar2" style="height: 70px; width: 70px; background-color: red; border-radius: 50%; display: inline-block; margin-right: 3%;"></div>
            <div class="user-stories-avatar3" style="height: 70px; width: 70px; background-color: red; border-radius: 50%; display: inline-block; margin-right: 3%;"></div>
            <div class="user-stories-avatar4" style="height: 70px; width: 70px; background-color: red; border-radius: 50%; display: inline-block; margin-right: 3%;"></div>
            <div class="user-stories-avatar5" style="height: 70px; width: 70px; background-color: red; border-radius: 50%; display: inline-block; margin-right: 3%;"></div>
        </div>
        <content class="page">
            <router-link to="/tabs/livemeeting">
                <div class="card-alfa event-image" style="margin-left: 4%; margin-right: 4%;">
                    <div class="text-a1">Митап: MTS Startup Hub `23</div>
                </div>
            </router-link>
            <div style="margin-left: 4%; padding-top: 11%; overflow:scroll; white-space: nowrap;">
                <div class="card-alfa custom-swiper bg-i1" style="margin-left: 0% !important;">
                    <div class="text-a1">Расскажите о своем стартапе инвесторам</div>
                </div>
                <div class="card-alfa custom-swiper bg-i2">
                    <div class="text-a1">Встречаем экспертов этого сезона — `23</div>
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
        margin-top: 4%;
    }
    .card-alfa {
        position: relative;
        border-radius: 26px;
        height: 30vh;
        width: auto;
        background-size:     cover;
        background-repeat:   no-repeat;
    }

    .event-image{
        background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
        background-repeat: no-repeat;
        background-position: center;
        background-size:     cover;
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

    .event-image .text-a{
        bottom: 6% !important;
    }

    .bg-i1{
        background-image: none;
        background-image: linear-gradient(to right, #d5937dbc 0%, #bc9292e4 100%);
    }

    .bg-i2{
        background-image: none;
        background-image: linear-gradient(to right, #412a62c6 0%, #61196994 100%);
    }

    .user-stories-avatar1{
        background-image: url('../assets/people/ok-so-you-were-saying-dot-dot-dot.jpg');
        background-size:     350%;
        background-repeat:   no-repeat;
        background-position: -70px -20px;
    }

    .user-stories-avatar2{
        background-image: url('../assets/people/portrait-of-a-female-chef-in-a-modern-restaurant.jpg');
        background-size:     185%;
        background-repeat:   no-repeat;
        background-position: 94% 35%;
    }

    .user-stories-avatar3{
        background-image: url('../assets/people/portrait-of-a-skeptic-african-american-woman.jpg');
        background-size:     cover;
        background-repeat:   no-repeat;
        background-position: 0px -5px;
    }

    .user-stories-avatar4{
        background-image: url('../assets/people/retro-styled-portrait-of-a-manful-gentleman-from-20s.jpg');
        background-size:     cover;
        background-repeat:   no-repeat;
        background-position: 0% 10%;
    }

    .user-stories-avatar5{
        background-image: url('../assets/people/front-view-of-a-bossy-female-rocker-looking-at-camera.jpg');
        background-size:     240%;
        background-repeat:   no-repeat;
        background-position: 48% 34.5%;
    }
  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

  import { closeOutline } from 'ionicons/icons';

  import { Stories } from "vue-insta-stories";
  
  export default  defineComponent({
    name: 'SpecialPage',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, Stories },
    setup() {
        return {
            closeOutline
        }
    },
    watch: {
        showStory: function (val) {
            if(this.showStory){
                const tabsEl = document.querySelector('ion-tab-bar');
                if (tabsEl) {
                    tabsEl.hidden = true;
                    tabsEl.style.height = "1";
                }
            }else{
                const tabsEl = document.querySelector('ion-tab-bar');
                if (tabsEl) {
                    tabsEl.hidden = false;
                    tabsEl.style.height = "1";
                }
            }
            
        }
    },
    mounted() {
        const tabsEl = document.querySelector('ion-tab-bar');
        if (tabsEl) {
            tabsEl.hidden = false;
            tabsEl.style.height = "1";
        }
    },
    methods: {
        toggleStory() {
            this.showStory = !this.showStory
        },
    },
    data: () => ({
        showStory: false,
        items: [
        require("../assets/photos/digital-mobile.jpg"),
        require("../assets/photos/worktogether-mobile.jpg"),
        {
            url: "https://test.deqstudio.com/pexels-tima-miroshnichenko-5716900.mp4",
            type: "video",
        },
        ]
    }),
  });
  </script>
  