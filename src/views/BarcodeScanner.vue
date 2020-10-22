<template>
<ion-page>
 <ion-header>
  <ion-toolbar>
   <ion-title>Barcode Scanner</ion-title>
  </ion-toolbar>
 </ion-header>
 <ion-content>
  <p>{{ codeData }}</p>
  <ion-button @click="scan()">Click</ion-button>
 </ion-content>
</ion-page>
</template>

<script>
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import {
 defineComponent,
 ref
} from 'vue';

import {
 IonPage,
 IonContent,
 IonButton,
 IonHeader,
 IonTitle,
 IonToolbar
} from '@ionic/vue';

export default defineComponent({
 name: 'barcodescanner',
 components: {
  IonPage,
  IonContent,
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar
 },
 setup() {

  const codeData = ref('');

  const scan = async () => {
   const data = await BarcodeScanner.scan();

   alert(data);
   codeData.value = JSON.stringify(data);
  }

  return {
   scan,
   codeData
  }
 }
})
</script>

<style>

</style>
