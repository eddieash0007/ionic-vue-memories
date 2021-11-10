<template>
    <ion-card>
        <ion-img :src="image" :alt="title"></ion-img>
        <ion-card-header>
            <ion-card-title>{{ title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            {{ description }}
        </ion-card-content>
  </ion-card>
  
</template>

<script>
import { IonCard, IonCardHeader, IonCardContent, IonImg } from '@ionic/vue';

export default {
    props: ['title','image','description'],
    components:{
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonImg
    }
}
</script>

