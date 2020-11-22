<template>
  <section class="webar">
    <div class="webar__title">Web AR — дополненная реальность в вебе.</div>
    <div class="webar__about">
      Что это значит? Пользователи могут получить доступ к просмотру контента
      в дополненной реальности, используя мобильный браузер.
    </div>

    <div class="steps steps--desktop">
      <img src="@/assets/img/webar-qr.svg" alt="qr code" class="steps__qr" />
      <div class="steps__items">
        <div class="step">
          <div class="step__title">1. Отсканируйте QR-код</div>
          <div class="step__description">
            Воспользуйтесь камерой планшета или телефона и отсканируйте QR-код.
          </div>
        </div>

        <div class="step">
          <div class="step__title">2. Или пройдите по ссылке</div>
          <div class="step__description">
            <a href="https://medium.com/phygitalism/web-ar-348de5d7188"
              >https://medium.com/phygitalism/web-ar-348de5d7188</a
            >
          </div>
        </div>

        <div class="step">
          <div class="step__title">
            3. Наслаждайтесь дополненной реальностью!
          </div>
          <div class="step__description">
            Правила игры очень простые - распыляйте препарат на предметы.
          </div>
        </div>
      </div>
    </div>

    <div class="steps steps--mobile">
      <div class="steps__items">
        <div class="step">
          <div class="step__title">1. Пройдите по ссылке</div>
          <a
            class="step__link"
            href="https://medium.com/phygitalism/web-ar-348de5d7188"
          >
            Web AR
          </a>
        </div>

        <div class="step">
          <div class="step__title">
            2. Наслаждайтесь дополненной реальностью!
          </div>
          <div class="step__description">
            Правила игры очень простые - распыляйте препарат на предметы.
          </div>
        </div>
      </div>
    </div>
    <StaticFooter />
  </section>
</template>

<script>
import StaticFooter from '@/components/StaticFooter';

export default {
  name: 'WebAR',
  components: {
    StaticFooter,
  },
};
</script>

<style lang="scss" scoped>
.webar {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 42px;
    line-height: 130%;
    margin-bottom: 36px;

    @media screen and (max-width: 1280px) {
      font-size: 36px;
      line-height: 130%;
      margin-bottom: 32px;
    }

    @media screen and (max-width: 560px) {
      font-size: 26px;
      line-height: 130%;
    }
  }

  &__about {
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 60px;

    @media screen and (max-width: 560px) {
      font-size: 16px;
      line-height: 130%;
      margin-bottom: 40px;
    }
  }

  .steps {
    display: flex;

    &--desktop {
      @media screen and (max-width: 1280px) {
        display: none;
      }
    }

    &--mobile {
      display: none;
      @media screen and (max-width: 1280px) {
        display: flex;
      }
    }

    &__qr {
      width: 202px;
      height: 202px;
      margin-right: 87px;
    }
  }

  .step {
    margin-bottom: 40px;

    &__title {
      font-size: 21px;
      line-height: 100%;
      margin-bottom: 24px;
      text-indent: -22px;
      margin-left: 22px;
    }

    &__description {
      font-size: 18px;
      line-height: 150%;
      padding-left: 22px;

      a {
        color: inherit;

        &:hover {
          color: #f36d01;
        }
      }
    }

    &__link {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      width: 220px;
      padding: 13px 0;
      border: 1px solid #f36d01;
      border-radius: 8px;
    }
  }
}
</style>
