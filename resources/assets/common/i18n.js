import Vue from 'vue';
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
import english_language from "../../../public/languages/en-en.json";
export const i18n= new VueI18n(
    {
        locale: 'en-en',
        fallbackLocale:'en-en',
        messages:{
            'en-en':english_language,
        }
    }
)