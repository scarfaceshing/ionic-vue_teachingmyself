<template>
<ion-page>
 <ion-header>
  <ion-toolbar>
   <ion-title>QR code scanner</ion-title>
  </ion-toolbar>
 </ion-header>
 <ion-content>
  <ion-button @click="scan()">Click</ion-button>
 </ion-content>
</ion-page>
</template>

<script>

import {
 IonPage,
 IonContent,
 IonButton,
 IonHeader,
 IonTitle,
 IonToolbar
} from '@ionic/vue';
import {
 defineComponent,
 ref
} from 'vue';

export default defineComponent({
 name: "qrscanner",
 components: {
  IonPage,
  IonContent,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar
 },
 setup() {

  async function scan() {
   console.log("scan");
  }

  return {
   scan
  }
 }
})
</script>

<style>

</style>
