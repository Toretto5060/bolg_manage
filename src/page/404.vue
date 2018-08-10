<template>
   <div class="main-background-color">
        <div class="background-images-wrapper">
            <div class="clouds"></div>
        </div>

        <div class="background-big-text-wrapper animated">
            <h1 class="main-font main-foreground-color animated">404 error</h1>
        </div>

        <div class="elements-wrapper animated">
            <div id="monster">
                <img id="eye1" class="eye eye-left-animation" src="../assets/imgs/eye.png" alt="A monster eye">
                <img id="eye2" class="eye eye-right-animation" src="../assets/imgs/eye.png" alt="A monster eye">
            </div>
        </div>
        
        <div class="background-text-wrapper animated">
            <div class="background-small-text-wrapper animated">
                <h4 class="main-font main-foreground-color animated">Are you lost?<br><a id="homepage-link" href="http://www.isharebest.com">Back to home</a></h4>
            </div>
        </div>
        <!-- <script src="scripts/main.js"></script> -->
    </div>
</template>
<script>
  export default {
    data: function(){
      return {
        
      }
    },
    mounted(){
    	// this.$store.state.showMain = true;
 	  },
    methods: {

    }
  }
</script>
<style type="text/css" scope>
  @import '../assets/css/main.css';
  @import '../assets/css/normalize.min.css';
</style>