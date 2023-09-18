<template>
  <div class="home">

    <h1>New Book</h1>
    <div>
      Title: <input type="text" v-model="newBookTitle" />
      Author: <input type="text" v-model="newBookAuthor" />
      Pages: <input type="text" v-model="newBookPages" />
      <button v-on:click="createPhoto()">Create Book</button>
    </div>

    <h1>{{ message }}</h1>
    <!-- <button v-on:click="getBooks">get books</button> -->
    <p v-for="book in books" :key="book.id">
  <p>{{ book.title }}</p>
  
   <p> {{ book.author }}</p>
    
  <p>{{ book.pages }}</p>
  <button v-on:click="showBook(book)">More info</button>
  <hr>

</p>
<dialog id="book-details">
      <form method="dialog">
        <h1>Book info</h1>
        <p>Title: {{ book.title }}</p>
        <p>Author: {{ book.author }}</p>
        <p>Pages: {{ book.pages }}</p>
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios"
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      books: [],
      newPhotoName: "",
      newPhotoWidth: "",
      newPhotoHeight: "",
      book: {}
    };
  },
  created: function() {this.getBooks()},
  methods: {
    getBooks() {
      axios.get("/books.json").then(response => {
        this.books = response.data
      })
    },
    createPhoto: function() {
      let params = {
        title: this.newBookTitle,
        author: this.newBookAuthor,
        pages: this.newBookPages,
      };
      axios
        .post("/books.json", params)
        .then(response => {
          console.log("books create", response);
          this.books.push(response.data);
          this.newBookTitle = "";
          this.newBookAuthor = "";
          this.newBookPages = "";
        })
        .catch(error => {
          console.log("books create error", error.response);
        });
    },
    showBook: function(book) {
      this.book = book;
      document.querySelector("#book-details").showModal();
    },
  }
};
</script>

