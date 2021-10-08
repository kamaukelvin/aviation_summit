<template>
    <div>
      <Hero/>
      <About/>
      <Agenda/>
      <Speakers/>
      <div class="d-md-block">
     
      </div>
      <Venue/>
    </div>
</template>
<script>
import Hero from '../components/homepage/Hero';
import About from '../components/homepage/About';
import Agenda from '../components/homepage/Agenda';
import Speakers from '../components/homepage/Speakers';
import Venue from '../components/homepage/Venue';
export default {
	name: 'Homepage',
    components:{
Hero,
About,
Agenda,
Speakers,
Venue
    },
	
};
</script>
<style lang="scss">

</style>