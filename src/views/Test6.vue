<template>
  <transition name="fade" mode="out-in">
    <section class="scene" 
      style="position: fixed;">
        <div class="canvas sequence-6"></div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'Test',
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    json_back:   require('@/assets/img/sprites/scene_06/back-1.json'),
    sprite_back: require('@/assets/img/sprites/scene_06/back-1.webp'),
  }),
  computed: {
    app: function() {
      return new this.$PIXI.Application({
        antialias: true,
        transparent: true,

        width: this.width,
        height: this.height,
      });
    },
    X: function() { return this.width / 1920 },
    Y: function() { return this.height / 1080 }
  },
  mounted() {
    this.createScene();
    // document.addEventListener('mousemove', e => {
    //   this.getMouseX(e);
    // })
  },
  methods: {
    createScene() {
      const sequence = document.querySelector('.sequence-6');
      const self = this; 

      sequence.appendChild(self.app.view);
      self.app.loader
        .add('image_back', this.json_back)
        .load((loader, resources) => {
          console.log("progress: " + loader.progress + "%");
          
          if ( loader.progress === 100 ) this.$emit('process');
          
          const back = new this.$PIXI.Texture.from(this.sprite_back);
          const sheet_back  = new this.$PIXI.Spritesheet(back, this.json_back);
          

          // console.log(sheet);
          if ( loader.progress === 100 ) {
            sheet_back.parse(() => {
              this.onAssetsLoadedNext();
            })
          }
        })
    },
    onAssetsLoadedNext() {
      let frames = [];
      for ( let i = 0; i <= 21; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`back_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .2;
        anim.scale.set(this.X, this.Y);
        anim.loop = false;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },
    // onAssetsLoaded2() {
    //   let frames = [];
    //   const childLength = this.app.stage.children.length;
    //   if ( this.app.stage ) {
    //     for (let i = childLength - 1; i >= 0; i--) 
    //       {	this.app.stage.removeChild(this.app.stage.children[i]) };
    //   };
    //   for ( let i = 0; i < 30; i++ ) {
    //     const val = i;

    //     frames.push(this.$PIXI.Texture.from(`Rotate_${val}.png`));
    //     const anim = new this.$PIXI.AnimatedSprite(frames);
        
    //     anim.x = this.app.screen.width / 2;
    //     anim.y = this.app.screen.height / 2;
    //     anim.anchor.set(.5);
    //     anim.animationSpeed = .5;
    //     anim.loop = false;
    //     anim.play();

    //     this.app.stage.addChild(anim);
    //   }
    // },
  }
}
</script>