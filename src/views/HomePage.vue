<template>
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
<ion-page >
    
    <ion-content :fullscreen="true" >
        <div style="padding: 20px; padding-top: 42px; overflow:scroll; white-space: nowrap;" @click="toggleStory">
            <div class="user-stories-avatar1" style="height: 70px; width: 70px; border-radius: 50%; display: inline-block; margin-right: 3%;"></div>
            <div class="user-stories-avatar2" style="height: 70px; width: 70px; background-color: red; border-radius: 50%; display: inline-block; margin-right: 3%;"></div>
            <div class="user-stories-avatar3" style="height: 70px; width: 70px; background-color: red; border-radius: 50%; display: inline-block; margin-right: 3%;"></div>
            <div class="user-stories-avatar4" style="height: 70px; width: 70px; background-color: red; border-radius: 50%; display: inline-block; margin-right: 3%;"></div>
            <div class="user-stories-avatar5" style="height: 70px; width: 70px; background-color: red; border-radius: 50%; display: inline-block; margin-right: 3%;"></div>
        </div>
        <div style="padding-left: 2rem; padding-top: 2rem;">
            <h1 style="font-size: 34px;" >Test</h1>
        </div>
    </ion-content>
</ion-page>
</template>

<style scoped>
    /*ion-content {
        --background: #030303;
    }*/

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
import {
    defineComponent
} from 'vue';
import { Stories } from "vue-insta-stories";
import {
    IonPage,
    IonContent,
} from '@ionic/vue';

import { closeOutline } from 'ionicons/icons';

export default defineComponent({
    name: 'HomePage',
    components: {
        IonContent,
        IonPage,
        Stories
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
    setup() {
        return {
            closeOutline
        }
    }
});
</script>
