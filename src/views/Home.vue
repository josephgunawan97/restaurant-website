<template>
  <div class="home">
    <v-container grid-list-md text-xs-center>
          <v-layout row wrap class="top-page">
            <v-flex xs12 md12>
              <div class="welcome-box">
                <span class="big-text font-weight-bold">
                  WELCOME
                </span>
                <br/>
                <span class="little-text text-uppercase">
                  business solution for buzy people
                </span>
              </div>
            </v-flex>
            
            <v-flex xs12 md12>
              <v-container grid-list-xl text-xs-center>
                <v-layout row wrap>
                  <v-flex xs6 md3 v-for="item in topPageIcon" :key="item.icon">
                    <v-icon size="80px" color="white"> {{ item.icon }} </v-icon>
                    <br/>
                    <span class="title">
                      {{ item.text }}
                    </span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  
  computed: {
    topPageIcon () {
      const icon = [
        { text:'People Helper', icon:'people' },
        { text:'Flexible Time', icon:'access_time' },
        { text:'Keep your Task', icon:'work' },
        { text:'No Worry', icon:'thumb_up_alt' },
      ]
      return icon
    },
  },
}
</script>

<style>
.big-text {
  font-size: 8vh;
}
.little-text {
  font-size: 2vh;
}
.welcome-box {
  color: white;
  background-color: rgba(211,47,47, 0.9);
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  padding: 20px;
  margin: auto;
  width: 45vh;
}
.top-page {
  color: white;
}
</style>