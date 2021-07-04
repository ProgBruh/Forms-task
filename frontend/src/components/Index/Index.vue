<template>
  <Info v-if="signedIn" />
  <Select v-else />
</template>

<script>
import Info from '~/components/Info/Info';
import Select from '~/components/Select/Select';
import { mapGetters } from 'vuex';

export default {
  name: 'Index',

  components: {
    Info,
    Select,
  },

  computed: {
    ...mapGetters(['signedIn']),
  },
};
</script>
