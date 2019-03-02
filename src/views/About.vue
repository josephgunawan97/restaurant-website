<template>
    <!-- <v-jumbotron color="rgba(211,47,47)" height=770px dark> -->
      <v-container text-xs-center class="about-page">
        <v-layout row wrap>
          <!-- <v-flex xs12 md12>
            <div>
              <span class="display-3 font-weight-bold">
                ABOUT
              </span>
            </div>
          </v-flex> -->
          <v-flex xs12 md8 text-xs-left>
            <div class="about-box-problem">
              <span class="headline font-weight-bold">
               About Sit 'n Shop <br/>
              </span>
              <span class="subheading font-weight-light">
                Sit 'n Shop is an application to provide both students and non-students community
                a <b class="about-text-bold">better experience</b>, where they can focus both on doing their <b class="about-text-bold"> tasks </b> and
                fulfill their <b class="about-text-bold"> hunger </b> by doing online food delivery services with a <b class="about-text-bold">little
                time consume </b>.
              </span>
            </div>
            <v-container>
              <p class="title font-weight-thin text-xs-center" >
                A lot of people have limited time event for something they urgently need such food
              </p>
            </v-container>
          </v-flex>
          <v-flex xs12 md4>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs6 md12>
                  <v-img :src="require('@/assets/queue1.png')"/>
                </v-flex>
                <v-flex xs6 md12>
                  <v-img :src="require('@/assets/queue2.png')"/>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          
         
        </v-layout>
      </v-container>
    <!-- </v-jumbotron> -->
</template>


<script>
// @ is an alias to /src

export default {
  data () {
    return { 
      aboutGradient: 'to bottom, rgba(255,00,00, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)'
    }
  }
}
</script>

<style>
.about-page {
  margin-top: -30px;
  color: white;
}
.about-box-problem {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* color: rgba(211,47,47);
  background-color: white; */
  border-left: 10px red solid;
  border-bottom: 9px red solid;
  padding: 20px 30px;
}
.about-text-bold {
  font-weight: 700;
}
</style>

