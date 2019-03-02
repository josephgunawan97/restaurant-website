<template>
  <div id="app">
    <v-app>
      <v-img :gradient="gradient" :src="require('@/assets/cover-page.webp')" dark>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs5 md5> 
              <v-container v-if="window.width > 720" grid-list-xs class="header-menu">
                <v-layout row>
                  <v-flex xs4 md4 class="menu-item"  v-for="(routerLeft, index) in routerListLeft" :key="index">
                    <router-link @click.native="moveView()" :to="routerLeft.link"> {{ routerLeft.text }} </router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
            <v-flex xs2 md2 > 
                <v-img class="middle-logo" aspect-ratio="1" :src="require('@/assets/logo.png')"/>
            </v-flex>
            <v-flex xs5 md5> 
              <v-container v-if="window.width > 720" grid-list-xs class="header-menu">
                <v-layout row>
                  <v-flex xs4 md4 class="menu-item" v-for="(routerRight, index) in routerListRight" :key="index">
                    <router-link :key="$route.name + ($route.params.path || '')" @click.native="moveView()" :to="routerRight.link"> {{ routerRight.text }} </router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container>
            <div id="router-view">
              <transition
                name="slide-fade"
                mode="out-in"
              >
                <router-view/>
              </transition>
            </div>
        </v-container>
      </v-img>
    </v-app>
     <template v-if="window.width <= 720">
       <div  class="toolbar-nav" >
        <v-btn color="white" dark flat @click="drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-btn>
       </div>
        <v-navigation-drawer
          dense
          v-model="drawer"
          clipped
          fixed
          dark
          width="200"
          app
        >
        <v-layout justify-space-between column fill-height class="nav-content">
        <v-list class="pa-0">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title style="text-align:center" class="headline nav-title">
                  <span class="font-weight-bold">Sit</span>
                  <span class="font-weight-thin"> 'n </span>
                  <span class="font-weight-bold">Shop</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <br>
            <v-list-group
              class="menu-dashboard"
              :key="menu.text"
              :append-icon="!menu.childMenus ? '' : 'keyboard_arrow_down'"
              :to="menu.link"
              v-for="menu in drawerItems"
            >
              <v-list-tile slot="activator"
                :to="menu.link"
                class="menu-title"
                >
                <v-list-tile-title class="menu-text">{{ menu.text }}</v-list-tile-title>
              </v-list-tile>
            </v-list-group>
        </v-list>
      </v-layout>
        </v-navigation-drawer>
      </template>
      <v-footer class="primary white--text pa-3">
        <v-spacer></v-spacer>
        <div>Sit'nShop &copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
  </div>
  
</template>

<script>
// @ is an alias to /src

export default {
  data () {
    return {
      home: this.$route.path === '/home',
      from: '',
      drawer: false,
      window: {
        width: 0,
        height: 0
      },
      drawerItems: [
        { text:'Home', link:'/home' },
        { text:'About', link:'/about' },
        { text:'How To', link:'/how-to' },
        { text:'Menu', link:'/menu' },
        { text:'Location', link:'/location' },
        { text:'Contact', link:'/contact' },
      ],
      gradient: 'to bottom, rgba(20,20,20, 0.9), rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)'
    }
  },
  computed: {
    routerListLeft () {
      const routerListLeft = [
        { text:'Home', link:'/home' },
        { text:'About', link:'/about' },
        { text:'How To', link:'/how-to' }
      ]
      return routerListLeft
    },
    routerListRight () {
      const routerListRight = [
        { text:'Menu', link:'/menu' },
        { text:'Location', link:'/location' },
        { text:'Contact', link:'/contact' },
      ]
      return routerListRight
    },
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
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  watch: {
    // '$route' (to, from) {
    //   this.home = to.path === '/home'
    //   this.from = from.path
    //   this.$forceUpdate()
    //   // react to route changes...
    //   var x = document.getElementsByClassName("router-link-exact-active");
    //     // console.log(x[0]); //will print the object
    //       console.log(from.path,x[0].getAttribute("href") )
    //       if(x[0].getAttribute("href") === from.path) {
    //         x[0].classList.remove("router-link-exact-active");
    //       }
    //     console.log(x[0]); //will no longer print the object
    //     this.$forceUpdate()
    //   }
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    moveView () {
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
}
</script>

<style>
html { 
  overflow-y: scroll; 
}
.header-menu {
  margin-top: 12%;
  border-top: 1px white solid;
  border-bottom: 1px white solid;
}
.header-menu a {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  text-decoration: none;
  color: white;
}
.header-menu .menu-item :hover {
  color: white;
  font-size: 16px;
  border-right: 3px white solid;
  border-bottom: 3px white solid;
  padding: 10px 20px;
  border-radius: 50%
}
.header-menu .router-link-exact-active {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  color: white;
  border-right: 3px white solid;
  border-bottom: 3px white solid;
  padding: 10px 20px;
  border-radius: 50%;
}
.middle-logo {
  border-top: 2px solid white;
  border-bottom: 1px solid white;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;  
  border-radius: 50%;
}
.toolbar-nav {
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
.nav-content {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.v-navigation-drawer .v-list__group__header--active {
  border-left: #d32f2f solid 5px;
}
.v-navigation-drawer .v-list__group__header--active .menu-text{
  font-weight: bold;
}
.v-list__tile__title{
  font-weight: 100;
}
.nav-title {
  margin-top: 20px;
  height: 60px;
}

</style>