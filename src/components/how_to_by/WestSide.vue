<template>
  <div class="west-side"
    v-if="cities && pharmacy"
    :style="{'max-height': `${maxHeight}px`}">
    <el-select 
      v-model="formData.city" 
      filterable
      lang="ru"
      class="app-select_city">
        <el-option
          v-for="item in cities"
          :value="item.label"
          :key="item.value"
          :label="item.label">
        </el-option>
    </el-select>

    <section class="card__store" 
      :data-uid="pharm.STORE_UID"
      @click="getUid"
      v-for="pharm of pharmacy" :key="pharm.ID">
      <h4 class="store__title">{{ pharm.NAME }}</h4>
      <div>
        <p class="store__txt">
          <strong class="stor__sub">
            Адрес:
          </strong>
          {{ pharm.ADDRESS }}
        </p>
        <p class="store__txt">
          <strong class="stor__sub">
            Режим работы:
          </strong>
          {{ pharm.WORKTIME }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WestSide',
  props: ['formData', 'pharmacy', 'cities', 'maxHeight',],
  data: () => ({
    isMob: window.innerWidth < 561,
  }),
  computed: {
    store: function() {
      return this.formData.store_uid;
    },
    k: function() {
      if ( this.isMob ) {
        return 80;
      } else {
        return 200;
      }
    }
  },
  methods: {
    getUid(e) {
      const el = e.target.closest('.card__store');
      document.querySelectorAll('.card__store_selected')
        .forEach(el => {
          if ( el.classList.contains('card__store_selected') ) {
            el.classList.remove('card__store_selected')
          }
        })
      el.classList.add('card__store_selected');

      const uid = el.dataset.uid;
      this.formData.store_uid = uid;
    },
  },
  watch: {
    store() {
      setTimeout(() => {
        let block = document.querySelector(`[data-uid~="${this.store}"]`);
        document.querySelectorAll('.card__store_selected')
          .forEach(el => {
            if ( el.classList.contains('card__store_selected') ) {
              el.classList.remove('card__store_selected')
            }
          });
        block.classList.add('card__store_selected');
        let topPos = block.offsetTop - this.k;
        document.querySelector('.card__store')
          .parentElement
          .scrollTop = topPos;
      }, 1000); 
    }
  }
}
</script>

<style lang="scss" scoped>
.west-side {
  overflow-y: auto;
  width: 45%;
  padding-right: 10px;
}
.app-select_city {
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px; 
  margin-bottom: 20px;
}
.store__title {
  font-weight: 600;
  font-size: 15px;
  line-height: 21px;
  margin-bottom: 5px;
  color: #fff;
}
.stor__sub {
  font-size: 15px;
  line-height: 20px;
  color: #F36D01;
}
.store__txt {
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 5px;
  color: #8f8f8f;
}
.card__store {
  padding: 16px;
  border: 1px solid #525252;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 16px 0;
  cursor: pointer;
  transition: border-color .3s ease;

  &:hover { border-color: #F36D01; }
  &_selected { border-color: #F36D01; }
}
</style>

<style lang="scss">
// Select
.el-input__inner {
  background-color: #0a0b11;
  color: #f36d01;
  border: 1px solid #525252;
  &:focus {
    outline: #f36d01 auto 1px;
  }
}
.el-select-dropdown__list {
  background-color: #0a0b11;
  color: #525252;
  border: 1px solid #525252;
}
.el-select-dropdown__item.selected { color: #f36d01; }
</style>
