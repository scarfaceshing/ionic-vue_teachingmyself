<template>
  <ion-page>
   <ion-header>
    <ion-toolbar>
     <ion-title>Camera</ion-title>
    </ion-toolbar>
   </ion-header>
   <ion-content>
    <ion-button @click="onCamera()">Click</ion-button>
    <ion-grid>
     <ion-row>
      <ion-col>
        {{ photos }} 
      </ion-col>
     </ion-row>
    </ion-grid>
    <ion-img :src="photos.webPath"></ion-img>
   </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { IonPage, IonToolbar, IonTitle, IonContent, IonImg, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { usePhotoGallery } from '@/plugins/hardware';
import { mapGetters } from 'vuex';
// import { Plugins } from "@capacitor/core";

export default defineComponent({
 name: 'camera',
 components: {
  IonPage, IonToolbar, IonTitle, IonContent, IonImg, IonGrid, IonRow, IonCol
 },
 computed: {
  ...mapGetters(["getCounter"]),
 },
 methods: {
  test() {
   console.log(this.getCounter);
  }
 },
 mounted() {
  this.test();
 },
 setup() {
  const { takePhoto } = usePhotoGallery();

  const state = reactive({
   photos: []
  })

  function onCamera() {
   takePhoto().then(res => {
    state.photos = res;
   })
  }

  return {
   ...toRefs(state),
   takePhoto,
   onCamera
  }
 }
})
</script>

<style>

</style>