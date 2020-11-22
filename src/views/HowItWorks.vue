<template>
  <section class="how-it-works">
    <h1 class="title">Как работает Джент</h1>
    <p class="subtitle">
      Джент — инновационный продукт в формате удобного спрея для приема внутрь.
      Для получения мощной эрекции достаточно двух нажатий, препарат действует
      через 10 минут. В одном флаконе содержится 32 применения.
    </p>

    <div class="description">
      <div class="description__title">
        В основе спрея Джент — проверенный и хорошо изученный
        <span class="orange">силденафил</span>.
      </div>
      <div class="description__content">
        <p>
          Это — препарат-регулятор потенции, он также относится
          к сердечно-сосудистым средствам. Силденафил действует только при
          сексуальном возбуждении. Попадая в организм, вещество увеличивает
          приток крови к половому органу. По завершению полового акта орган
          возвращается в расслабленное состояние.
        </p>
        <p>
          Максимальная концентрация после приема на тощах достигается
          от 30 минут до двух часов. Вещество уже давно зарекомендовало себя
          на рынке как средство для лечения эректильной дисфнукции и успешно
          справляется с задачей. Силденафил используется врачами по всему миру.
        </p>
      </div>
    </div>

    <div class="description">
      <div class="description__title">
        Гибкий формат дозирования спрея.
      </div>
      <div
        class="description__content description__content--spray description__content--with-bg"
      >
        <div class="row">
          <img src="@/assets/img/spray.svg" alt="spray" class="image__spray" />
          <p>
            Джент позволит вам контролировать дозу силденафила и избежать лишних
            побочных реакций. В одном нажатии содержится 12,5 мг активного
            вещества, а для получения мощной эрекции достаточно нажать всего два
            раза. Распылите Джент на язык и проглотите.
          </p>
        </div>
      </div>
    </div>

    <div class="description">
      <div class="description__title">
        Скорость действия спрея.
      </div>
      <div
        class="description__content description__content--clock description__content--with-bg"
      >
        <div class="row">
          <img
            src="@/assets/img/clock-static.svg"
            alt="spray"
            class="image__clock"
          />
          <p>
            Скорость действия таблеток — в среднем 20-30 минут. Спрей Джент
            не проходит долгий путь через желудок, а всасывается через слизистую
            оболочку полости рта и действует через 10 минут. Для большего
            эффекта вы можете запить Джент водой, но, в отличие от таблеток, это
            необязательно. Спрей начинает всасываться во рту без лишних
            действий. Уже в желудке вещество полностью растворяется и попадает
            в кровь, обеспечивая мощный и стабильный результат.
          </p>
        </div>
      </div>
    </div>

    <div class="description">
      <div class="description__content">
        <p>
          Как правило, жирная пища и алкоголь снижает эффект средств для
          потенции, а употребление алкоголя замедляет действие силденафила
          и снижает качество эрекции. Но не в случае с Джент. Спрей, в отличие
          от других препаратов, не теряет свойств и действует, несмотря
          не препятствия.
        </p>
      </div>
    </div>

    <StaticFooter />
  </section>
</template>

<script>
import StaticFooter from '@/components/StaticFooter';

export default {
  name: 'HowItWorks',
  components: {
    StaticFooter,
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
}

.image {
  &__spray {
    width: 75px;
    height: 160px;
    margin: 42px 85px 42px 0;

    @media screen and (max-width: 560px) {
      margin: 0 auto 30px 0;
    }
  }

  &__clock {
    width: 138px;
    height: 138px;
    margin: 0 42px 0 32px;

    @media screen and (max-width: 560px) {
      margin: 0 auto 30px 0;
    }
  }
}

.how-it-works {
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
      line-height: 130%;
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
        padding: 0 52px;
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
</style>
