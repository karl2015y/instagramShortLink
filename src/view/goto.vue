<template>
  <a :href="gotolink">即將前往...</a>
  <br />
  這裡可以放廣告
</template>


<script>
import { computed, onMounted, ref, watch } from "vue";
import { fromShortcode } from "/src/Plugin/InstagramIdConvert.js";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const os = ref("");
    const getMobileOS = () => {
      const ua = navigator.userAgent;
      if (/android/i.test(ua)) {
        return "Android";
      } else if (/iPad|iPhone|iPod/.test(ua)) {
        return "iOS";
      }
      return "Other";
    };
    const gotolink = ref("");
    const generateGotolink = () => {
      if (os.value == "iOS") {
        return `instagram://media?id=${fromShortcode(route.params.id)}`;
      } else if (os.value == "Android")
        return `intent://www.instagram.com/p/${route.params.id}/#Intent;package=com.instagram.android;scheme=https;end`;
      else {
        return `https://www.instagram.com/p/${route.params.id}/`;
      }
    };

    watch(
      () => gotolink.value,
      (item) => {
        window.location.href = item;
      }
    );

    onMounted(() => {
      os.value = getMobileOS();
      gotolink.value = generateGotolink();
    });

    return {
      os,
      gotolink,
    };
  },
};
</script>