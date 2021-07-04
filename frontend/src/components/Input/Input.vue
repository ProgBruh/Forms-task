<template>
  <div
    class="input"
    :class="{ 'input--valid': isValid, 'input--invalid': isNotValid }"
  >
    <input
      :type="type"
      ref="field"
      :value="value"
      @input="setValue"
      @blur="touch"
      :placeholder="placeholder"
      class="input__field"
    />
    <button class="input__button" @click="clearValue" v-if="valueIsExists">
      <font-awesome-icon icon="times" size="lg" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Input',

  $_veeValidate: {
    name() {
      return this.name;
    },
    value() {
      return this.value;
    },
  },

  props: {
    placeholder: {
      type: String,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    valid: {
      type: Boolean,
    },
  },

  computed: {
    valueIsExists() {
      return this.value && this.value.length;
    },
    isValid() {
      return this.touched && this.valid;
    },
    isNotValid() {
      return this.touched && !this.valid;
    },
  },

  data() {
    return {
      touched: false,
    };
  },

  methods: {
    setValue(e) {
      this.$emit('input', e.target.value);
    },
    clearValue() {
      this.$emit('input', null);
    },
    touch() {
      this.touched = true;
    },
  },
};
</script>
