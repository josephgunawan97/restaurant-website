<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 md3 v-for="item in menu" :key="item.text">
        <v-img :gradient="aboutGradient" aspect-rasio=1 class="menu-box" :style="{ 'background-color': item.color}" dark>
            <v-container class="headline white--text menu-canteen">
              {{item.text}}
            </v-container >
        </v-img>
      </v-flex>
      
      
    </v-layout>
  </v-container>
</template>


<script>
// @ is an alias to /src

export default {
  data () {
    return { 
      menu: [
        { text: 'Dallas Chicken', color: 'green'},
        { text: 'Bakmi QQ', color: 'blue' },
        { text: 'Bakmi Kuotie', color: 'red' },
        { text: 'Kurnia', color: 'cyan' },
        { text: 'Bento', color: 'chocolate' },
        { text: 'Dapur Keke', color: 'orange' }
      ],
      aboutGradient: 'to bottom, rgba(20,20,20, 0.4), rgba(0, 0, 0, .5), rgba(0, 0, 0, .9)'
    }
  }
}
</script>

<style>
.menu-canteen {
  padding-top: 25%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.menu-box {
  height: 300px;
}
</style>
