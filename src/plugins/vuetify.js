import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/sass/overrides.sass';

Vue.use(Vuetify);

const theme = {
  // primary: '#353445',
  // secondary: '#9C27b0',
  // accent: '#9C27b0',
  // info: '#00CAE3',
  // topbar: '#FFFFFF',
  // // topbar: '#045F5F',
  // background: '#F1F2F4',
  // secondbackground: '#F9F9F9',
  primary: '#004D40',
  secondary: '#00695C',
  accent: '#00796B',
  info: '#00897B',
  topbar: '#00897B',
  // topbar: '#045F5F',
  background: '#F1F2F4',
  secondbackground: '#F9F9F9',
};

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
});
