<template>
  <div id="app">
    <Navigater />
    <MainUI />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Navigater from "./components/Navigater.vue";
import MainUI from "./components/Main_UI.vue";
export default Vue.extend({
  name: "App",
  components: {
    Navigater,
    MainUI,
  },
  methods: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
@import url(http://fonts.googleapis.com/earlyaccess/amstelvaralpha.css);
@import url(http://fonts.googleapis.com/earlyaccess/cabinvfbeta.css);
@import url(//fonts.googleapis.com/earlyaccess/dhyana.css);
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);
@import url(//fonts.googleapis.com/earlyaccess/hannari.css);
@import url(//fonts.googleapis.com/earlyaccess/jejuhallasan.css);
@import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);
@import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);
@import url(//fonts.googleapis.com/earlyaccess/karlatamilinclined.css);
@import url(//fonts.googleapis.com/earlyaccess/karlatamilupright.css);
@import url(http://fonts.googleapis.com/earlyaccess/khyay.css);
@import url(//fonts.googleapis.com/earlyaccess/kokoro.css);
@import url(//fonts.googleapis.com/earlyaccess/kopubbatang.css);
@import url(//fonts.googleapis.com/earlyaccess/laomuangdon.css);
@import url(//fonts.googleapis.com/earlyaccess/laomuangkhong.css);
@import url(//fonts.googleapis.com/earlyaccess/laosanspro.css);
@import url(//fonts.googleapis.com/earlyaccess/lohitbengali.css);
@import url(//fonts.googleapis.com/earlyaccess/lohitdevanagari.css);
@import url(//fonts.googleapis.com/earlyaccess/lohittamil.css);
@import url(//fonts.googleapis.com/earlyaccess/myanmarsanspro.css);
@import url(//fonts.googleapis.com/earlyaccess/nats.css);
@import url(//fonts.googleapis.com/earlyaccess/nicomoji.css);
@import url(//fonts.googleapis.com/earlyaccess/nikukyu.css);
@import url(//fonts.googleapis.com/earlyaccess/notonaskharabicui.css);
@import url(//fonts.googleapis.com/earlyaccess/notonastaliqurdudraft.css);
@import url(//fonts.googleapis.com/earlyaccess/notosansbengaliui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosansdevanagariui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosansethiopic.css);
@import url(//fonts.googleapis.com/earlyaccess/notosansgujaratiui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosansgurmukhiui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);
@import url(//fonts.googleapis.com/earlyaccess/notosanskannadaui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosanskhmerui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosanskufiarabic.css);
@import url(//fonts.googleapis.com/earlyaccess/notosanslaoui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosansmalayalamui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosansmyanmarui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosansoriyaui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosanssyriaceastern.css);
@import url(//fonts.googleapis.com/earlyaccess/notosanssyriacestrangela.css);
@import url(//fonts.googleapis.com/earlyaccess/notosanssyriacwestern.css);
@import url(//fonts.googleapis.com/earlyaccess/notosanstamilui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosansteluguui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosansthaiui.css);
@import url(//fonts.googleapis.com/earlyaccess/notosanstibetan.css);
@import url(http://fonts.googleapis.com/earlyaccess/nunitovfbeta.css);
@import url(//fonts.googleapis.com/earlyaccess/opensanshebrew.css);
@import url(//fonts.googleapis.com/earlyaccess/opensanshebrewcondensed.css);
@import url(//fonts.googleapis.com/earlyaccess/phetsarath.css);
@import url(//fonts.googleapis.com/earlyaccess/ponnala.css);
@import url(http://fonts.googleapis.com/earlyaccess/scheherazade.css);
@import url(//fonts.googleapis.com/earlyaccess/souliyo.css);
@import url(//fonts.googleapis.com/earlyaccess/thabit.css);
@import url(//fonts.googleapis.com/earlyaccess/tharlon.css);
</style>
