<template>
    <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label color="danger" position="floating">Title</ion-label>
        <ion-input  type="text" required v-model="enteredTitle"/>
      </ion-item>
      <ion-item>
        <ion-label color="danger" position="floating">Image</ion-label>
        <ion-input  type="url" required v-model="enteredImage"/>
      </ion-item>
      <ion-item>
        <ion-label color="danger" position="floating">Description</ion-label>
        <ion-textarea rows="5" type="url" required v-model="enteredDescription"/>
      </ion-item>    
    </ion-list>
     <ion-button type="submit" color="danger" expand="block" fill="solid">Save</ion-button>
  </form>
</template>

<script>
import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from '@ionic/vue'
export default {
    emits: ['save-memory'],
    components: {
        IonList, 
        IonItem, 
        IonLabel, 
        IonInput,
        IonTextarea,
        IonButton, 
    },
    data() {
        return {
            enteredTitle: '',
            enteredImage: '',
            enteredDescription: ''
        }
    },
    methods: {
        submitForm(){
            const memoryData = {
                title: this.enteredTitle,
                image: this.enteredImage,
                description: this.enteredDescription,
            };
            this.$emit('save-memory', memoryData);
        }
    }

}
</script>

<style>

</style>