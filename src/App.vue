<template>
    <div>
      <app-header/>
      <div class="container"> 
          <div>
              <button @click=" compToRender = 'compHome' ">Home</button>
              <button @click=" compToRender = 'compAbout' ">About</button>
              <button @click=" compToRender = 'compContact' ">Contact</button>
          </div>
          <keep-alive>
                <component :is="compToRender"></component>
          </keep-alive>
             
      </div>
      <app-footer/>
    </div>
</template>

<script>
import compContact from './components/Contact';
import compHome from './components/Home';
import compAbout from './components/About';
export default {
    data() {
        return {
           compToRender: "compContact"
        }
    },
    components: {
        compContact,
        compHome,
        compAbout
    },
    methods: {
        submit() {
            console.log(this.formdatas);
            console.log( JSON.stringify( this.formdatas ) );
            
        }
    }
}
</script>

<style scoped>
  .container {
    min-height: 84vh;
    text-align: center;
  }
</style>
