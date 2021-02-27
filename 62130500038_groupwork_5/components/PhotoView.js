app.component('photo-view', {
  props: {
    zoom: Object,
  },
  template:
    /*html */
    `
  <div class="h-96 w-screen bg-black flex justify-center mt-10">
    <img :src="zoom.bigPictureSrc">
    <div @click="closeBigPicture" class="w-10 h-10 absolute bg-red-400 right-3.5 mt-3.5" />
  </div>
  `,
  methods: {
    closeBigPicture() {
      console.log(this.zoom.bigPictureSrc)
      this.$emit('close-picture')
    }
  },
})