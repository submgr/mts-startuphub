<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="chatbubbleOutline " />
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/hello">
          <ion-icon :icon="bookOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/home">
          <ion-icon :icon="homeOutline" />
        </ion-tab-button>
        
        <ion-tab-button tab="tab4" href="/tabs/special">
          <ion-icon :icon="sparklesOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/game">
          <ion-icon :icon="gameControllerOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { bookOutline, flashOutline, happyOutline, chatbubbleOutline, homeOutline, sparklesOutline, gameControllerOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      bookOutline,
      flashOutline,
      happyOutline,
      chatbubbleOutline,
      homeOutline,
      sparklesOutline,
      gameControllerOutline,
      footer: "show"
    }
  }
});

export function hideTabs() {
  const tabsEl = document.querySelector('ion-tabs');
  if (tabsEl) {
    tabsEl.hidden = true;
  }
}

export function showTabs() {
  const tabsEl = document.querySelector('ion-tabs');
  if (tabsEl) {
    tabsEl.hidden = false;
  }
}
</script>
