<template>
  <section>
    <WestSide :dialog="dialog" class="west" @close="openModal" />

    <StepOne v-if="step === 0" :resp="resp" @open="openModal" />
    <StepTwo v-if="step === 1" />
    <Error v-if="step === 2" />
  </section>
</template>

<script>
import StepOne from '@/components/give_me_my_money/StepOne'
import StepTwo from '@/components/give_me_my_money/StepTwo'
import Error   from '@/components/give_me_my_money/Error'

import WestSide from '@/components/give_me_my_money/WestSide'

export default {
  name: 'GiveMoney',
  metaInfo: {
    title: 'Jent - Возврат средств',
    htmlAttrs: {
      lang: 'ru',
    }
  },
  components: { StepOne, StepTwo, Error, WestSide },
  data: () => ({
    step: 0,
    resp: { isErr: '' },
    dialog: false,
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
    openModal() {
      this.dialog = !this.dialog;
    }
  },
  watch: {
    subm() {
      this.nextStep();
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-left2right-enter-active, 
.slide-left2right-leave-active {
  transition: left right .3s ease;
}
.slide-left2right-enter, 
.slide-left2right-leave-to {
  left: -300px;
  right: 100vw;
}
</style>
