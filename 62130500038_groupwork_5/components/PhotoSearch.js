app.component('photo-search', {
  props: {
    form: Object
  },
  template:
    /*html */
    `
  <div id="search-bar">
      <span class="material-icons text-5xl cursor-pointer" v-show="!searchbutton" @click="searchBarToggle">search
      </span>
      <div v-show="searchbutton"><input type="text" placeholder="Search the photo" v-model="form.searchText"
          class="border border-black" @keyup.enter="search">
        <p>Photo : {{form.searchText}} </p> <button @click="searchBarToggle">Cancel</button>
      </div>
    </div>
  `,
  methods: {
    search() {
      this.$emit('search')
    },
    searchBarToggle() {
      this.searchbutton = !this.searchbutton;
      this.form.searchText = '';
    }
  },
  data() {
    return {
      searchbutton: false,
    }
  },
})