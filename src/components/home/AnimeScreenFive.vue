<template>
  <section class="scene" 
    style="position: fixed;">
      <div class="canvas sequence-5"></div>
  </section>
</template>

<script>
export default {
  name: 'AnimeScreenFive',
  props: {
    scroll: Number,
  },
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    json_neon:   require('@/assets/img/sprites/scene_05/neon-2.json'),
    sprite_neon: require('@/assets/img/sprites/scene_05/neon-2.webp'),

    isReapeat: false,
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
  },
  methods: {
    createScene() {
      const sequence = document.querySelector('.sequence-5');
      const self = this; 

      sequence.appendChild(self.app.view);
      self.app.loader
        .add('image_neon', this.json_neon)
        .load((loader, resources) => {
          console.log("progress: " + loader.progress + "%");
          
          if ( loader.progress === 100 ) this.$emit('process');
          
          const neon = new this.$PIXI.Texture.from(this.sprite_neon);
          const sheet_neon  = new this.$PIXI.Spritesheet(neon, this.json_neon);
          

          // console.log(sheet);
          if ( loader.progress === 100 ) {
            sheet_neon.parse(() => {
              this.onAssetsLoadedNext();
            })
          }
        })
    },
    onAssetsLoadedNext() {
      let frames = [];

      const childLength = this.app.stage.children.length;
      if ( this.app.stage ) {
        for (let i = childLength - 1; i >= 0; i--) {	
          this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }
      for ( let i = 0; i <= 13; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`neon_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .2;
        anim.scale.set(this.X, this.Y);
        anim.loop = false;
        anim.play();

        this.app.stage.addChild(anim);
        this.isReapeat = true;
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
  },
  watch: {
    scroll() {
      if ( this.scroll === 4 ) {
        this.onAssetsLoadedNext();
      }
    }
  }
}
</script>