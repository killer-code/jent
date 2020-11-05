<template>
  <section class="screen-one">
    <div class="container">
      <div class="canvas sequence-1"></div>
      <transition>
        <h2 class="caption-2 caption-2_gradient">КОМПАКТНЫЙ</h2>
      </transition>
      
      <section class="content">
        <div class="start">
          <div class="right_txt _mb-7">
            <p class="txt txt_right">Инновационный</p>
            <p class="txt txt_right">формат <strong class="txt txt_strong">мини-спрея</strong></p>

            <div @click="openAside" 
                 data-key="oneFirst" 
                 class="txt_right wrap_more wrap_more_right">
              <p class="more">Подробнее</p>
              <img src="@/assets/img/arr_r.svg" class="more__arr" alt="">
            </div>
          </div>
        </div>

        <div class="end">
          <img src="@/assets/img/test-clock.svg" style="margin-right: 10px;" alt="">
          <div class="right_txt">
            <p class="txt txt_left">Стабильная эрекция</p>
            <p class="txt txt_left">уже через <strong class="txt txt_strong">10 мин</strong></p>

            <div @click="openAside" 
                 data-key="oneSecond"
                 class="txt_left wrap_more wrap_more_left">
              <p class="more">Подробнее</p>
              <img src="@/assets/img/arr_r.svg" class="more__arr" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ScreenOne',
  props: ['asideData', 'getAsideData'],
  data: () => ({
    json: require('../../assets/img/fighter.json'),
    sprite: require('../../assets/img/fighter.png'),
  }),
  mounted() {
    const app = new this.$PIXI.Application({
      antialias: true,
      transparent: true,
    });
    const sequence = document.querySelector('.sequence-1');

    sequence.appendChild(app.view);
    
    app.loader
      .add('image', this.json.meta.image)
      .load((loader, resources) => {
        const texture = new this.$PIXI.Texture.from(this.sprite);
        const sheet = new this.$PIXI.Spritesheet(texture, this.json);
        sheet.parse(() => {
          onAssetsLoaded();
        })
      })

    const self = this;
    function onAssetsLoaded() {
      const frames = [];
      for ( let i = 0; i < 30; i++ ) {
        const val = i < 10 ? `0${i}` : i;

        frames.push(self.$PIXI.Texture.from(`rollSequence00${val}.png`));
        const anim = new self.$PIXI.AnimatedSprite(frames);
        
        anim.x = app.screen.width / 2;
        anim.y = app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .3;
        anim.loop = true;
        anim.play();

        app.stage.addChild(anim);
      }
    }
  },
  methods: {
    openAside(e) {
      const btnKey = e.target.parentElement.dataset.key;
      const asideData = this.getAsideData[btnKey];

      this.asideData.description = asideData.description;
      this.asideData.link = asideData.link;
      this.asideData.title = asideData.title;
      this.asideData.isOpen = true;
    }
  }
}
</script>

<style scoped>
.screen-one {
  height: 100vh;
  width: 100vw;
}
.content {
  display: flex;
  align-items: space-between;
  flex-direction: column;
  padding: 100px 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.canvas {
  position: absolute;
  left: calc(50% - 400px);
  top: calc(50vh - 300px);
  z-index: -1;
}

.content > div { display: flex; }
.start { display: flex; justify-content: flex-start; align-items: center; }
.end { display: flex; justify-content: flex-end; align-items: center; }

</style>
