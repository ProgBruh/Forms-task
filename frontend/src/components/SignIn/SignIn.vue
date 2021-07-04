<template>
  <div class="sign-in">
    <form class="sign-in__form" @submit.prevent="submit">
      <div class="sign-in__wrapper">
        <Input
          placeholder="Email"
          name="email"
          v-model="form.email"
          v-validate="'required|email'"
          :valid="validEmail"
        />
      </div>
      <div class="sign-in__wrapper">
        <Input
          placeholder="Password"
          name="password"
          :type="passwordFieldType"
          v-model="form.password"
          v-validate="'required'"
          :valid="validEmail"
        />
        <Button
          class="sign-in__hide-password"
          v-if="form.password"
          @click.native="changePasswordFieldType"
        >
          <font-awesome-icon icon="eye" size="sm" />
        </Button>
      </div>
      <div class="sign-in__wrapper sign-in__wrapper--last">
        <Button class="sign-in__submit" type="submit" :disabled="!isFormValid">
          <div class="sign-in__submit-content">
            <span class="sign-in__submit-text">Submit</span>
            <font-awesome-icon icon="check" size="sm" />
          </div>
        </Button>
      </div>
    </form>
    <div class="sign-in__bottom">
      <router-link to="/">Home</router-link>
      <router-link to="/sign_up">Sign Up</router-link>
    </div>
    <span class="sign-in__error" v-if="showError">
      An error has occurred. Please try again later.
    </span>
  </div>
</template>

<script>
import Button from '~/components/Button/Button';
import Input from '~/components/Input/Input';
import { mapActions } from 'vuex';
import { SIGN_IN } from '~/store/constants/actions';

export default {
  name: 'SignIn',

  components: {
    Button,
    Input,
  },

  computed: {
    validEmail() {
      return this.fields.email ? this.fields.email.valid : false;
    },
    validPassword() {
      return this.fields.password ? this.fields.password.valid : false;
    },
    isFormValid() {
      return Object.keys(this.fields).every(
        (field) => this.fields[field].valid,
      );
    },
  },

  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      passwordFieldType: 'password',
      showError: false,
    };
  },

  methods: {
    ...mapActions([SIGN_IN]),
    async submit() {
      try {
        this.showError = false;
        await this.SIGN_IN(this.form);
        this.$router.push({ path: '/' });
      } catch {
        this.showError = true;
      }
    },
    changePasswordFieldType() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password';
    },
  },
};
</script>
