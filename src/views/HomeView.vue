<template>
  <div class="home">
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
        <p>Name: {{ book.title }}</p>
        <p>Width: {{ book.author }}</p>
        <p>Height: {{ book.pages }}</p>
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
    booksShow() {
      console.log("working???")
      axios.get(`/books/1`).then(response => {
        console.log(response.data)
      })
    },
    showBook: function(book) {
      this.book = book;
      document.querySelector("#book-details").showModal();
    },
  }
};
</script>

