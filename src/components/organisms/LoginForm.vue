<template>
  <card type="login" style="margin-top: 20px" plain>
    <div slot="header" class="logo-container">
      <img v-lazy="'/static/img/paw-print-logo.png'" alt=""  src=""/>
    </div>
    <p>Ivy and Edgar</p>
    <div>
      <fg-input
        class="no-border input-lg"
        addon-left-icon="now-ui-icons users_circle-08"
        placeholder="Email..."
        v-model="email"
        @blur="$v.email.$touch()"
      >
      </fg-input>
      <fg-input
        class="no-border input-lg"
        addon-left-icon="now-ui-icons ui-1_lock-circle-open"
        placeholder="Password..."
        type="password"
        v-model="password"
        @blur="$v.password.$touch()"
      ></fg-input>
    </div>
    <template slot="raw-content">
      <div class="card-footer text-center">
        <a
          class="btn btn-primary btn-round btn-lg btn-block"
          :class="{disabled: $v.$invalid}"
          @click="submit"
        >Login</a
        >
      </div>
      <div class="pull-left">
        <h6>
          <a href="/register" class="link footer-link">Create Account</a>
        </h6>
      </div>
      <div class="pull-right">
        <h6>
          <a href="/help" class="link footer-link">Need Help?</a>
        </h6>
      </div>
    </template>
  </card>
</template>
<script>
  import { FormGroupInput } from '../index';
  import { required, email, minLength } from 'vuelidate/lib/validators'

  export default {
    name: 'login-form',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    validations: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    },
    methods: {
      submit() {
        console.log("Submitting login request");
        const formData = {
          email: this.email,
          password: this.password,
        };
        console.log(formData);
        this.$store.dispatch('login', {email: formData.email, password: formData.password})
      }
    },
    props: {},
    components: {
      [FormGroupInput.name]: FormGroupInput
    }
  }
</script>




