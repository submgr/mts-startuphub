<template>
<ion-page>
    <ion-content :fullscreen="true" >

        <img style="padding-top: 10rem; height: auto; width: 70%; max-width: 400px; margin-left: auto; margin-right: auto; display: block;" :src="natureEllipse">

        <p style="text-align: center;padding: 0px 18px 0px; margin-top: 2rem; margin-bottom: 0; transform-origin: left center; align-items: flex-end; min-width: 100%; font-size: 21px; font-weight: 400;">{{ natureText }}</p>
        <p style="text-align: center;padding: 0px 22px 0px; margin: 0; transform-origin: left center; align-items: flex-end; min-width: 100%; font-size: 24px; font-weight: 700;">Alexander!</p>
        
        <div id="outer" style="margin-top: 4rem; display: flex; justify-content: center;">
          <ion-spinner name="crescent"></ion-spinner>
        </div>
      </ion-content>
</ion-page>
</template>

<style scoped>

ion-spinner {
    width: 60px !important;
    height: 60px !important;
}
  *{
    font-family: Montserrat !important;
  }
  @media (prefers-color-scheme: light) {
    ion-content {
      --background: #fff url('../assets/abstract/relaxing-pinkbackground.jpg') no-repeat center center / cover;
    }
  }

  @media (prefers-color-scheme: dark) {
    ion-content {
      --background: #000 url('../assets/abstract/black-and-noise-background.png') no-repeat center center / cover;
    }
  }
  
</style>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import {
    IonPage,
    IonContent,
    IonSpinner
} from '@ionic/vue';

export default defineComponent({
    name: 'Tab2Page',
    components: {
        IonContent,
        IonPage,
        IonSpinner
    },
    mounted () {
      // eslint-disable-next-line
      const parent_this = this;

      setTimeout(function () {
        parent_this.$router.replace('/tabs/auth');
        if(localStorage.auth_token){
          parent_this.$router.replace('/tabs/home')
        }else{
          parent_this.$router.replace('/tabs/hello')
        }
      }, 5000);

      const tabsEl = document.querySelector('ion-tab-bar');
      if (tabsEl) {
        tabsEl.hidden = true;
        tabsEl.style.height = "1";
      }

      
    },
    setup () {

      function get_random (list) {
        return list[Math.floor((Math.random()*list.length))];
      }

      const d = new Date();

      const dayMinutes = d.getHours() * 60 +d.getMinutes();

      var natureEllipse_Image;

      function imageLookup(dayPeriod = "morning"){
        var image_local;
        if(!["morning", "afternoon", "evening", "night"].includes(dayPeriod)){
          image_local = "page-dead.png"
        }else{
          const dayPeriod_list = {
            morning: ["morning-ellipse.png", "morning-mountains-ellipse.png", "morning-highview-ellipse.png", "morning-work-onbeach-ellipse.png", "swimming-morning-ellipse.png", "morning-forest-ellipse.png", "morning-bedsheet-ellipse.png", "morning-vibes-ellipse.png"],
            afternoon: ["afternoon-sky-ellipse.png", "day-city-ellipse.png", "man-onrocks-waterfall-ellipse.png", "forest-afternoon-ellipse.png", "creative-office-afternoon-ellipse.png", "afternoon-citybridge-ellipse.png", "afternoon-beach-ellipse.png", "daytime-beach-ellipse.png"],
            evening: ["evening-desert-mountains-ellipse.png", "evening-construction-ellipse.png", "evening-nature.png", "evening-newyork-ellipse.png", "evening-subway-ellipse.png", "evening-hotel-veranda-ellipse.png"],
            night: ["night-sky-1-ellipse.png", "night-view-ellipse.png", "night-houselife-ellipse.png", "mountains-at-night-ellipse.png", "night-city-ellipse.png", "man-understone-atnight-ellipse.png", "aurora-night-ellipse.png", "night-greennature-ellipse.png", "night-hotelroom-ellipse.png"]
          }
          image_local = dayPeriod_list[dayPeriod][Math.floor(Math.random() * dayPeriod_list[dayPeriod].length)]
        }
        return require("./../assets/graphics/" + image_local);
      }

      var natureEllipse_Text = "?ERR-0"

      switch (true) {
        case (300 <= dayMinutes &&  dayMinutes < 660):
          natureEllipse_Image = imageLookup("morning");
          natureEllipse_Text = get_random(["Good morning,", "Salute to a new day,", "Have a magical morning,", "Have a productive morning,", "Happy day,", "Happy new day,", "Wake up,", "Good luck,"])
          break;
        case (660 <= dayMinutes &&  dayMinutes < 1080):
          natureEllipse_Image = imageLookup("afternoon");
          natureEllipse_Text = get_random(["It's a beautiful day,", "You'll do fine,", "What a good day,", "Smiling is in fashion today,"])
          break;
        case (1080 <= dayMinutes && dayMinutes < 1260):
          natureEllipse_Image = imageLookup("evening");
          natureEllipse_Text = get_random(["Good evening,", "Time to rest,", "The day is just beginning,", "Sleep well,", "Sweet dreams,", "Nighty-night,", "You'll wake up easy tomorrow,", "Sleep well,"])
          break;
        case ((0 <= dayMinutes && dayMinutes < 300) || (1260 <= dayMinutes && dayMinutes < 9999)):
          natureEllipse_Image = imageLookup("night");
          natureEllipse_Text = get_random(["???????????????? ????????,", "?????????????????? ????????,"])
          break;
      }

      return {
        natureText: natureEllipse_Text,
        natureEllipse: natureEllipse_Image,
        pageStyle: {
          "--ion-background-color": "#F9F9F9",
          "--ion-font-family": "Roboto"
        },
        footer: "hide"
      }
      //
    }
});
</script>
