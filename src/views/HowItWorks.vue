<template>
  <section class="how-it-works">
    <div class="how-it-works__container">
      <h1 class="title">Как работает Джент</h1>
      <p class="subtitle">
        Джент &mdash; инновационный продукт в формате удобного спрея для приема
        внутрь. Для получения мощной эрекции достаточно двух нажатий, препарат
        действует через 10 минут. В одном флаконе содержится 32 применения.
      </p>

      <div class="description">
        <div class="description__title">
          В основе спрея Джент &mdash; проверенный и хорошо изученный
          <span class="orange">силденафил</span>.
        </div>
        <div class="description__content">
          <p>
            Силденафил &mdash; это препарат-регулятор потенции. Он действует только при
            сексуальном возбуждении. Попадая в организм, вещество увеличивает
            приток крови к половому органу. По завершению полового акта орган
            возвращается в расслабленное состояние.
          </p>
          <p>
            Максимальная концентрация после приема на тощах достигается
            от 30 минут до двух часов. Вещество уже давно зарекомендовало себя
            на рынке как средство для лечения эректильной дисфнукции и успешно
            справляется с задачей. Силденафил используется врачами по всему
            миру.
          </p>
        </div>
      </div>

      <div
        v-for="item in items"
        class="description"
        :id="item.id"
        :key="item.id"
      >
        <div class="description__title">
          {{ item.title }}
        </div>
        <div
          class="description__content description__content--spray description__content--with-bg"
        >
          <div class="row">
            <img :src="item.image" :alt="`${item.id} logo`" class="image" />
            <div v-html="item.text" class="text"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- <section class="txt_small_wrap description__content">
      <p class="txt_small">
        * ООО «Фармамед» не несет ответственности за действия 
        пользователей настоящего сайта.
      </p>

      <p class="txt_small">
        Функционал Сайта предоставляется ООО «Фармамед» только 
        для специалистов здравоохранения (медицинских работников 
        и руководителей медицинских организаций). Если Вы не 
        относитесь к данной категории лиц, просим прекратить 
        использование Сайта, в противном случае на Вас возлагается 
        вся ответственность действующего законодательства за 
        последствия нарушения данного правила
      </p>

      <p class="txt_small">
        ** используя настоящий Cайт вы обязуетесь, в случае 
        приобретения/получения любого продукта посредством 
        Cайта, использовать его только для личных целей и не 
        вручать пациентам
      </p>
    </section> -->

    <StaticFooter />
  </section>
</template>

<script>
import StaticFooter from '@/components/StaticFooter';
import pageData from './HowItWorksData';

export default {
  name: 'HowItWorks',
  metaInfo: {
    title: 'Jent - Как работает',
    htmlAttrs: {
      lang: 'ru',
    },
  },
  components: {
    StaticFooter,
  },

  data: () => ({
    items: pageData,
  }),
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: center;

  &_top {
    align-items: flex-start;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
}

.image {
  width: 100px;
  height: 130px;

  @media screen and (max-width: 560px) {
    margin: 0 auto 30px 0;
  }
}

.how-it-works {
  &__container {
    max-width: 1040px;
  }

  .title {
    font-weight: 500;
    font-size: 42px;
    line-height: 130%;
    margin-bottom: 60px;

    @media screen and (max-width: 1280px) {
      margin-bottom: 32px;
    }

    @media screen and (max-width: 560px) {
      font-size: 26px;
      line-height: 130%;
      margin-bottom: 24px;
    }
  }

  .subtitle {
    font-weight: 500;
    font-size: 28px;
    line-height: 130%;
    margin-bottom: 78px;

    @media screen and (max-width: 1280px) {
      font-size: 24px;
      line-height: 130%;
      margin-bottom: 60px;
    }

    @media screen and (max-width: 560px) {
      font-size: 16px;
      line-height: 150%;
      margin-bottom: 45px;
    }
  }

  .orange {
    color: #f36d01;
  }

  .description {
    margin-top: 60px;

    &:last-of-type {
      margin-bottom: 125px;

      @media screen and (max-width: 1280px) {
        margin-bottom: 80px;
      }

      @media screen and (max-width: 560px) {
        margin-bottom: 60px;
      }
    }

    &__title {
      font-weight: bold;
      font-size: 21px;
      line-height: 150%;
      margin-bottom: 32px;

      @media screen and (max-width: 1280px) {
        font-size: 18px;
        line-height: 150%;
      }
    }

    &__content {
      font-size: 18px;
      line-height: 150%;

      @media screen and (max-width: 1280px) {
        font-size: 16px;
        line-height: 150%;
      }

      p {
        margin-bottom: 24px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      &--spray {
        padding: 25px 52px;
      }

      &--clock {
        padding: 70px 52px 70px 0;
      }

      &--with-bg {
        background: #16171d;
        border-radius: 6px;

        @media screen and (max-width: 560px) {
          padding: 32px 15px;
        }
      }
    }
  }
}

.text {
  max-width: calc(100% - 150px);
  margin-left: auto;

  @media screen and (max-width: 560px) {
    max-width: 100%;
  }

  & /deep/ p {
    margin-bottom: 24px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

.txt_small {
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 10px;
  line-height: 13px;
  color: #fff;
  margin-bottom: 10px;
  opacity: 0.5;
  max-width: 1040px;
}
</style>
