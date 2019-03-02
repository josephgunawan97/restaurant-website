<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md5 lg5>
        <div >
          <GmapMap
          class="google-map"
          :center="{lat:-6.2286782, lng:106.6097212}"
          :zoom="18"
          map-type-id="terrain"
        >
          <GmapMarker
          :position="{lat:-6.2286782, lng:106.6097212}"
          :draggable="false"
          />
        </GmapMap>
        </div>
      </v-flex>
      <v-flex md2 lg2/>
      <v-flex xs12 md5 lg5>
        <div class="address-box">
          <span>
            <b>Address</b> :<br/> Jl. MH. Thamrin Boulevard 1100, Klp. Dua, Karawaci, Tangerang, Banten 15811
          </span>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
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
.google-map {
  width: 450pt; 
  height: 300pt;
}
.address-box {
  border-left: 2px white solid;
  border-right: 2px white solid;
  color: white;
  padding-left: 20px;
  margin-top: 75px;
  vertical-align: middle;
  font-size: 3vh;
  text-align: left;
}
@media only screen and (min-width: 300px){
.google-map {
  width: 40vh;
  height: 60vh;
}
  
}
@media only screen and (min-width: 1024px){
.google-map {
  width: 350pt; 
  height: 300pt;
}
}
</style>
