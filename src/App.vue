 <template>
  <div> 
    <body>
      <h1>Counter: {{ counter }}</h1>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="reset">Reset</button>
      <button @click="setValue">setValue</button>
    </body>
  </div> 
  </template>
  
  <script>
  export default { 
    
  computed: {
    counter() {
      return this.$store.getters.counter
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    decrement() {
      this.$store.dispatch('decrement')
    },
    reset() {
      this.$store.dispatch('reset')
    },
    setValue() {
      this.$store.dispatch('setValue')
    }
  }
  }
  </script>
  
  <style>
  body {
    background-color: pink;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #333;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 2em;
    font-weight: 300;
    margin: 0;
    padding: 0;
    text-align: center;
    color: palegreen;
  }
  button {
    background-color: rgb(94, 206, 206);
    border: 1px solid #ccc;
    border-radius: 3px;
    color: palegreen;
    cursor: pointer;
    font-size: 1em;
    font-weight: 300;
    margin: 0.5em;
    padding: 0.5em 1em;
  }
  button:hover {
    background-color: yellowgreen;
  }
  button:active {
    background-color: #ddd;
  }
  button:focus {
    outline: none;
  }
  button:disabled {
    background-color: #eee;
    border-color: #ccc;
    color: #999;
    cursor: not-allowed;
  }
  </style> 
