<template>
  1. 取得IG文章的Id <br />
  <input type="text" v-model="link" />
  {{ link_id }}

  <button @click="generateLinkHandler()">生成連結</button>
  <br />
  <a v-if="generate_link_show" :href="generate_link">
    {{ generate_link }}
  </a>
</template>
<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const link = ref("");
    const link_id = computed(() => {
      let _link = link.value;
      if (_link.indexOf("?") > -1) {
        _link = _link.split("?")[0];
      }
      if (_link.substr(-1) == "/") {
        _link = _link.substring(0, _link.length - 1);
      }

      const link_split = _link.split("/");

      return link_split[link_split.length - 1];
    });
    const generate_link_show = ref(false);
    const generate_link = computed(() => {
      return `${window.location.href}go/${link_id.value}`;
    });
    const generateLinkHandler = () => {
      generate_link_show.value = true;
    };

    return {
      link,
      link_id,
      generate_link_show,
      generate_link,
      generateLinkHandler,
    };
  },
};
</script>