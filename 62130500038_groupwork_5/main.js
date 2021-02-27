const app = Vue.createApp({
  data() {
    return {
      photos: [
        {
          no: '1',
          url: "images/pineapple.jpg",
          title: "Pineapple",
          description: "This is the picture of Pineapple",
          liked: true,
        },
        {
          no: '2',
          url: "images/lion.jpg",
          title: "Lion",
          description: "This is the picture of Lion",
          liked: false,
        },
        {
          no: '3',
          url: "images/surface.jpg",
          title: "Microsoft Surface",
          description: "This is the picture of Microsoft Surface",
          liked: false,
        },
        {
          no: '4',
          url: "images/bangkok-landscape.jpg",
          title: "Bangkok",
          description: "This is the picture of Bangkok",
          liked: true,
        }
      ],
      form: {
        searchText: '',
      },
      zoom: {
        bigPictureSrc: '',
      },
      isBigPicture: false,
      textSearch: '',
    };
  },
  methods: {
    toggleLike(photo) {
      for (let i = 0; i < this.photos.length; i++) {
        if (photo.no == this.photos[i].no) {
          this.photos[i].liked = !this.photos[i].liked
        }
      }
    },
    bigPicture(photo) {
      console.log(photo)
      for (let i = 0; i < this.photos.length; i++) {
        if (photo.no == this.photos[i].no) {
          this.zoom.bigPictureSrc = this.photos[i].url
          this.isBigPicture = true
          console.log(this.zoom.bigPictureSrc)
        }
      }
      console.log(this.zoom.bigPictureSrc)
    },
    closeBigPicture() {
      this.isBigPicture = false
    },
    search() {
      this.textSearch = this.form.searchText
    }

  },
  computed: {
    countLike() {
      return this.photos.filter(t => t.liked).length
    },
    searched() {
      return this.photos.filter((photo) => {
        return photo.title.toLowerCase().includes(this.textSearch.toLowerCase());
      })
    }
  },
});
