<template>
    <ion-grid>
        <ion-row>
            <ion-col size="3">
                <div :v-if="final_avatar_url" class="avatar" :style="{ backgroundImage: `url(` + avatar_url + `)` }">
                </div>
            </ion-col>
            <ion-col>
                <div class="dataBody">
                    <span class="name">{{ name }}</span>
                </div>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<style scoped>

    ion-grid{
        margin-top: 1%;
    }
    .avatar{
        border-radius: 45px;
        height: 70px;
        width: 70px;
        background-color: red;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .dataBody{
        margin-top: 2%;
    }

    .name{
        font-weight: 500;
        font-size: 20px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: pre-wrap; 
        word-wrap: break-word;
    }

    .dataBody span{
        text-align: left !important;
        font-size: 23px;
        bottom: 14%;
        background-image: linear-gradient(to right, #ffffffc6 0%, #f7dcd3e2 100%);
    }
</style>

<script>
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';

export default {
    name: 'ChatListElement',
    props: [ 'name', 'avatar_url' ],
    components: { IonCol, IonGrid, IonRow },
}
</script>