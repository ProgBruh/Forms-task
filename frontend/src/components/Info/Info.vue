<template>
  <div class="info">
    <div class="info__logout">
      <Button type="button" class="info__logout-button" @click.native="logout">
        <font-awesome-icon icon="sign-out-alt" size="sm" />
      </Button>
    </div>
    <div class="info__wrapper">
      <span class="info__name">Id:</span>
      <b>{{ user.id }}</b>
    </div>
    <div class="info__wrapper">
      <span class="info__name">Full name:</span>
      <b>{{ fullName }}</b>
    </div>
    <div class="info__wrapper">
      <span class="info__name">Email:</span>
      <b>{{ user.email }}</b>
    </div>
    <div class="info__wrapper">
      <span class="info__name">Username:</span>
      <b>{{ user.username }}</b>
    </div>
    <div class="info__wrapper">
      <span class="info__name">Phone:</span>
      <b>{{ user.phone }}</b>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button/Button';
import { mapState, mapActions } from 'vuex';
import { LOGOUT } from '~/store/constants/actions';

export default {
  name: 'info',

  components: {
    Button,
  },

  computed: {
    ...mapState(['user']),
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },

  methods: {
    ...mapActions([LOGOUT]),
    async logout() {
      await this.LOGOUT();
    },
  },
};
</script>
