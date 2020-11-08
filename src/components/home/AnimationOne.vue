<template>
  <div class="canvas sequence-1"></div>
</template>

<script>
export default {
  name: 'AnimationOne',
  data: () => ({
    json_1: require('@/assets/img/sprites/scene-1/screen-1.json'),
    sprite_1: require('@/assets/img/sprites/scene-1/screen-1.png'),
    json_2: require('@/assets/img/sprites/scene-2/screen-2.json'),
    sprite_2: require('@/assets/img/sprites/scene-2/screen-2.png'),
  }),
  mounted() {
    const app = new this.$PIXI.Application({
      antialias: true,
      transparent: true,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const sequence = document.querySelector('.sequence-1');

    sequence.appendChild(app.view);
    
    app.loader
      .add('image', this.json_1.meta.image)
      .load((loader, resources) => {
        const texture = new this.$PIXI.Texture.from(this.sprite_1);
        const sheet = new this.$PIXI.Spritesheet(texture, this.json_1);
        sheet.parse(() => {
          onAssetsLoaded();
        })
      })

    const self = this;
    function onAssetsLoaded() {
      const frames = [];
      for ( let i = 1; i < 61; i++ ) {
        const val = i;

        frames.push(self.$PIXI.Texture.from(`R03.${val}.png`));
        const anim = new self.$PIXI.AnimatedSprite(frames);
        
        anim.x = app.screen.width / 2;
        anim.y = app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .3;
        anim.loop = true;
        anim.play();

        app.stage.addChild(anim);
      }
    };  
  },
}
</script>