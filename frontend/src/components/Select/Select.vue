<template>
  <div class="select">
    <span class="select__title"> Choose one: </span>
    <div class="select__wrapper">
      <div class="select__item">
        <span class="select__name">Sign in</span>
        <Button class="select__button" @click.native="push('sign_in')">
          <font-awesome-icon icon="sign-in-alt" size="sm" />
        </Button>
      </div>
      <div class="select__item">
        <span class="select__name">Sign up</span>
        <Button class="select__button" @click.native="push('sign_up')">
          <font-awesome-icon icon="user-plus" size="sm" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button/Button';

export default {
  name: 'Select',

  components: {
    Button,
  },

  methods: {
    push(place) {
      this.$router.push({ path: `/${place}` });
    },
  },
};
</script>
