app.component("photo-item", {
  props: {
    photo: Object,
  },
  template:
  /*html */`
  <div class="container flex flex-col items-center px-5 py-3 mx-auto lg:px-20 lg:py-20 md:flex-row">
        <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img :src="photo.url" class="object-cover object-center rounded" style="height: 720px; width: 600px"
            @click="bigPicture(photo)" />
        </div>
        <div
          class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h2 class="mb-1 text-xs font-medium tracking-widest text-blue-500 title-font">
            {{photo.title}}
          </h2>
          <h1
            class="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-5xl title-font">
            {{photo.description}}
          </h1>

          <!-- Liked Icon -->
          <div class="flex justify-center">
            <p v-show="!photo.liked" @click="toggleLike(photo)"
              class="inline-flex items-center font-semibold text-5xl text-pink-400 md:mb-2 lg:mb-0 hover:text-pink-300 cursor-pointer material-icons">
              favorite_border
            </p>
            <p v-show="photo.liked" @click="toggleLike(photo)"
              class="inline-flex items-center font-semibold text-5xl text-pink-400 md:mb-2 lg:mb-0 hover:text-pink-300 cursor-pointer material-icons">
              favorite
            </p>
          </div>
        </div>
      </div>
  `,
  methods: {
    bigPicture(photo) {
      console.log(photo)
      this.$emit('big-picture', photo)
    },
    toggleLike(photo) {
      this.$emit('like-picture', photo)
    }
  },
})