<template>
  <section>
    <StepOne v-if="step === 0" :resp="resp" />
    <StepTwo v-if="step === 1" />
    <Error v-if="step === 2" />
  </section>
</template>

<script>
import StepOne from '@/components/give_me_my_money/StepOne'
import StepTwo from '@/components/give_me_my_money/StepTwo'
import Error from '@/components/give_me_my_money/Error'

export default {
  name: 'GiveMoney',
  metaInfo: {
    title: 'Jent - Возврат средств',
    htmlAttrs: {
      lang: 'ru',
    }
  },
  components: { StepOne, StepTwo, Error },
  data: () => ({
    step: 1,
    resp: { isErr: '' }
  }),
  computed: {
    subm: function() {
      return this.resp.isErr;
    }
  },
  methods: {
    nextStep() {
      if ( this.resp.isErr == 1 ) {
        this.step += 1;
      } else {
        this.step += 2;
      }
    },
  },
  watch: {
    subm() {
      this.nextStep();
    }
  }
}
</script>
