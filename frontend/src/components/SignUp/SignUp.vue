<template>
  <div class="sign-up">
    <form class="sign-up__form" @submit.prevent="submit">
      <div class="sign-up__wrapper">
        <Input
          placeholder="First name"
          name="firstName"
          v-model="form.firstName"
          v-validate="'required|alpha'"
          :valid="validFirstName"
        />
      </div>
      <div class="sign-up__wrapper">
        <Input
          placeholder="Last name"
          name="lastName"
          v-model="form.lastName"
          v-validate="'required|alpha'"
          :valid="validLastName"
        />
      </div>
      <div class="sign-up__wrapper">
        <Input
          placeholder="Phone"
          name="phone"
          v-model="form.phone"
          v-validate="'required|min:18'"
          ref="mobileInput"
          :valid="validPhone"
        />
      </div>
      <div class="sign-up__wrapper">
        <Input
          placeholder="Username"
          name="username"
          v-model="form.username"
          v-validate="'required|alpha'"
          :valid="validUsername"
        />
      </div>
      <div class="sign-up__wrapper">
        <Input
          placeholder="Email"
          name="email"
          v-model="form.email"
          v-validate="'required|email'"
          :valid="validEmail"
        />
      </div>
      <div class="sign-up__wrapper">
        <Button
          class="sign-up__hide-password"
          v-if="form.password"
          @click.native="changePasswordFieldType"
        >
          <font-awesome-icon icon="eye" size="sm" />
        </Button>
        <Input
          placeholder="Password"
          name="password"
          v-model="form.password"
          ref="password"
          v-validate="'required|min:7'"
          :type="passwordFieldType"
          :valid="validPassword"
        />
        <Button
          class="sign-up__password-button"
          v-if="showPasswordButton"
          @click.native="generatePassword"
        >
          <font-awesome-icon icon="plus-square" size="sm" />
        </Button>
      </div>
      <div class="sign-up__wrapper">
        <Button
          class="sign-up__hide-password"
          v-if="passwordConfirm"
          @click.native="changePasswordConfirmFieldType"
        >
          <font-awesome-icon icon="eye" size="sm" />
        </Button>
        <Input
          placeholder="Repeat password"
          name="passwordConfirm"
          v-model="passwordConfirm"
          v-validate="'required|confirmed:password'"
          :type="passwordConfirmFieldType"
          :valid="validPasswordConfirm"
        />
      </div>
      <div class="sign-up__wrapper sign-up__wrapper--last">
        <Button class="sign-up__submit" type="submit" :disabled="!isFormValid">
          <div class="sign-up__submit-content">
            <span class="sign-up__submit-text">Submit</span>
            <font-awesome-icon icon="check" size="sm" />
          </div>
        </Button>
      </div>
    </form>
    <div class="sign-up__bottom">
      <router-link to="/">Home</router-link>
      <router-link to="/sign_in">Sign In</router-link>
    </div>
    <span class="sign-up__error" v-if="showError">
      An error has occurred. Please try again later.
    </span>
  </div>
</template>

<script>
import Button from '~/components/Button/Button';
import Input from '~/components/Input/Input';
import IMask from 'imask';
import RandExp from 'randexp';
import { mapActions } from 'vuex';
import { SIGN_UP } from '~/store/constants/actions';

export default {
  name: 'SignUp',

  components: {
    Button,
    Input,
  },

  computed: {
    validFirstName() {
      return this.fields.firstName ? this.fields.firstName.valid : false;
    },
    validLastName() {
      return this.fields.lastName ? this.fields.lastName.valid : false;
    },
    validPhone() {
      return this.fields.phone ? this.fields.phone.valid : false;
    },
    validUsername() {
      return this.fields.username ? this.fields.username.valid : false;
    },
    validEmail() {
      return this.fields.email ? this.fields.email.valid : false;
    },
    validPassword() {
      return this.fields.password ? this.fields.password.valid : false;
    },
    validPasswordConfirm() {
      return this.fields.passwordConfirm
        ? this.fields.passwordConfirm.valid
        : false;
    },
    isFormValid() {
      return Object.keys(this.fields).every(
        (field) => this.fields[field].valid,
      );
    },
    showPasswordButton() {
      return (
        !this.form.password ||
        (this.fields.password ? !this.fields.password.valid : true)
      );
    },
  },

  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        phone: null,
        username: null,
        email: null,
        password: null,
      },
      passwordConfirm: null,
      passwordFieldType: 'password',
      passwordConfirmFieldType: 'password',
      showError: false,
    };
  },

  methods: {
    ...mapActions([SIGN_UP]),
    async submit() {
      try {
        this.showError = true;
        await this.SIGN_UP(this.form);
        this.$router.push({ path: '/sign_in' });
      } catch {
        this.showError = true;
      }
    },
    generatePassword() {
      const passwordExp = new RandExp(/\w{8,10}/);
      this.form.password = passwordExp.gen();
      this.passwordConfirm = this.form.password;
    },
    changePasswordFieldType() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    changePasswordConfirmFieldType() {
      this.passwordConfirmFieldType =
        this.passwordConfirmFieldType === 'password' ? 'text' : 'password';
    },
  },

  mounted() {
    IMask(this.$refs.mobileInput.$refs.field, {
      mask: '+{7} (000) 000-00-00',
    });
  },
};
</script>
