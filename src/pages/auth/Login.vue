<template>
  <div class="page-header clear-filter" filter-color="blue">
    <div
      class="page-header-image"
      style="background-image: url('/static/img/white-background-pets.png')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto" style="border: solid 1px black">
          <card type="login" plain style="margin-top: 20px">
            <div slot="header" class="logo-container">
              <img v-lazy="'/static/img/paw-print-logo.png'" alt="" />
            </div>
            <p>Ivy and Edgar</p>

            <!-- TODO UPDATE THIS TO COMPONENT -->
            <div>
              <fg-input
                class="no-border input-lg"
                addon-left-icon="now-ui-icons users_circle-08"
                placeholder="Email..."
                v-model="email"
                @blur="$v.email.$touch()"
              ></fg-input>
              <fg-input
                class="no-border input-lg"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Password..."
                type="password"
                v-model="password"
                @blur="$v.password.$touch()"
              ></fg-input>
            </div>
            <!-- END -->

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
                  <router-link to="/register" class="link footer-link">Create Account</router-link>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <router-link to="/help" class="link footer-link">Need Help?</router-link>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import LoginForm from '../../components/organisms/LoginForm';
import MainFooter from '../../components/organisms/MainFooter';
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    LoginForm
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
    }
  }
};
</script>
<style></style>
