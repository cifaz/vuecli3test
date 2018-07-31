import Vue from 'vue';
import router from '../router';

Vue.directive("has", {
    inserted: function (el, binding) {
        let has = false;
        let meta = router.currentRoute.meta;
        let arg = binding.arg;
        for (let i = 0; i < meta.length; i++) {
            let metaElement = meta[i];
            // console.log("metaElement:", metaElement, "arg:", arg);
            if (metaElement === arg) {
                has = true;
            }
        }

        if (!has) {
            el.remove();
        }
    }
});

export default {

}