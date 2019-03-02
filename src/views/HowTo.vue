<template>
    <v-layout row wrap>
      <v-flex md5 xs12
          class="timeline-border">
        <v-timeline
          align-top
          dense
          dark
        >
          <v-timeline-item
            color="#d32f2f"
            large
            v-for="step in steps"
            :key="step.no"
            :hide-dot="step.no === 0"
          >
          <template v-slot:icon >
            <span class="timeline-icon">{{step.no}}</span>
          </template>
          <v-layout justify-space-between>
            <v-card xs7 class="timeline-text" v-if="step.no !== 0">
              <v-card-title class="font-weight-bold">{{step.text}}</v-card-title>
            </v-card>
            <span v-if="step.no === 0" class="font-weight-bold timeline-title">{{step.text}}</span>
          </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
      <v-flex md6 xs12>
        <v-img class="phone-image" :src="require('@/assets/phone.png')"/>
      </v-flex>
    </v-layout>
</template>


<script>
// @ is an alias to /src

export default {
  data () {
    return { 
      aboutGradient: 'to bottom, rgba(20,20,20, 0.9), rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)',
      steps: [
        { no: 0, text: 'How To'},
        { no: 1, text: 'Search for desired food or beverages'},
        { no: 2, text: 'Select your place of choice'},
        { no: 3, text: 'Create your order'},
        { no: 4, text: 'Wait for order to come by keep doing your task'},
        { no: 5, text: 'Pay your order when it`s arrive'},
      ]
    }
  }
}
</script>

<style>
.timeline-icon{
  color: white;
}
.timeline-text{
  text-align: left;
  color: white;
  font-size: 15px;
}
.phone-image {
  max-height: 400px;
  border-bottom: 5px white solid;
  border-right: 5px white solid;
  padding: -10px
}
.timeline-title {
  color: white;
  font-size: 5vh;
}
.timeline-border{
  /* border-left: 5px white solid;
  border-top: 5px white solid; */
  padding-left: 15px;

}
</style>
