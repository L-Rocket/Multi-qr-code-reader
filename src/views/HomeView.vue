<script setup lang="ts">
import ResultTable from '../components/ResultTable.vue'


import { useStore } from 'vuex';

const store = useStore();
const data = store.state.data;

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    
    <div class="greetings">
      <!-- <HelloWorld msg="QRcode Scanner" /> -->
      <h1 >QRcode  Scanner</h1>
      <br>
      <h1>--> <RouterLink to="/Scan">Start</RouterLink> </h1>
      <p></p>
      <p></p>
      
    </div>
    <p></p>
    
  </header>
  <main>
    <ResultTable />
   
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

 
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

</style>