<template>
  <div>
    <fg-input
      class="no-border input-lg"
      addon-left-icon="now-ui-icons users_circle-08"
      placeholder="Email..."
    >
    </fg-input>
    <fg-input
      class="no-border input-lg"
      addon-left-icon="now-ui-icons ui-1_lock-circle-open"
      placeholder="Password..."
    ></fg-input>
  </div>
</template>
<script>
  import { FormGroupInput } from '../index';

  export default {
    name: 'login-form',
    props: {},
    components: {
      [FormGroupInput.name]: FormGroupInput
    }
  }
</script>
