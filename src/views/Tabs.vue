<template>
<ion-page>
 <ion-tabs>
  <ion-tab-bar slot="bottom">

   <ion-tab-button tab="qrscanner" href="/tabs/qrscanner">
    <ion-icon :icon="qrCode" />
    <ion-label>QRcode</ion-label>
   </ion-tab-button>

   <ion-tab-button tab="barcodescanner" href="/tabs/barcodescanner">
    <ion-icon :icon="barcode" />
    <ion-label>Barcode</ion-label>
   </ion-tab-button>

   
  <ion-tab-button tab="camera" href="/tabs/camera">
    <ion-icon :icon="camera" />
    <ion-label>Camera</ion-label>
   </ion-tab-button>

  </ion-tab-bar>
 </ion-tabs>
</ion-page>
</template>

<script lang="ts">
import {
 IonTabBar,
 IonTabButton,
 IonTabs,
 IonLabel,
 IonIcon,
 IonPage
} from '@ionic/vue';
import {
 qrCode,
 barcode,
 camera
} from 'ionicons/icons';

import { useRoute } from 'vue-router';
import { watch } from 'vue';

export default {
 name: 'Tabs',
 components: {
  IonLabel,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonPage
 },
 setup() {
  const route = useRoute();

  watch(route, (newVal, oldVal) => {
   console.log(newVal.path);
  })

  return {
   qrCode,
   barcode,
   camera
  }
 }
}
</script>
