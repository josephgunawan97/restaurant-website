<template>
  <div id="app">
    <v-img :gradient="aboutGradient" height=770px dark>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12 md12>
            <div >
              <span class="white--text display-1 font-weight-bold">
                CONTACT US
              </span>
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="contact-1">
              <br/>
              <span class=" white--text title font-weight-bold">
                <v-icon dark class="brand-size">phone</v-icon> - 
                08136782346 <br/><br/>
                
                <v-icon dark class="brand-size">email</v-icon> - 
                admin@sitnshop.com
              </span>
              <br/>
              <br/>
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="contact-1">
              <br/>
              <span class=" white--text title font-weight-bold">
                <font-awesome-icon :icon="['fab', 'facebook-square']" class="brand-size"/> - 
                Sit'nShop Official <br/><br/>
                
                <font-awesome-icon :icon="['fab', 'instagram']" class="brand-size"/> - 
                Sitnshop_Official
              </span>
              <br/>
              <br/>
            </div>
          </v-flex>
          
         
        </v-layout>
      </v-container>
    </v-img>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  data () {
    return { 
      aboutGradient: 'to bottom, rgba(20,20,20, 0.9), rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)'
    }
  }
}
</script>

<style>
.contact-1 {
  text-align: left;
  margin: 0 25%;
  padding-left: 10px;
}
.brand-size {
  font-size: 36px;
  vertical-align: middle;
  /* margin-top: 25px; */
}
@media only screen and (max-width: 768px){
  
.contact-1 {
  border-left: 10px white solid;
  text-align: left;
  margin: 0 10%;
  padding-left: 10px;
}
}
</style>
