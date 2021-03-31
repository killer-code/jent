<template>
  <section class="scene" 
    style="position: fixed;">
      <div class="canvas sequence-4" style="position: absolute; left: 0; top: 0;"></div>
  </section>
</template>

<script>
export default {
  name: 'Test',
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,

    json_lines:   require('@/assets/img/sprites/scene_04/lines-1.json'),
    sprite_lines: require('@/assets/img/sprites/scene_04/lines-1.webp'),
    json_flackon:   require('@/assets/img/sprites/scene_04/flackon-1.json'),
    sprite_flackon: require('@/assets/img/sprites/scene_04/flackon-1.webp'),
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
      const sequence = document.querySelector('.sequence-4');
      const self = this; 

      sequence.appendChild(self.app.view);
      self.app.loader
        .add('image_lines', this.json_lines)
        .add('image_flackon', this.json_flackon)
        .load((loader, resources) => {
          console.log("progress: " + loader.progress + "%");
          
          if ( loader.progress === 100 ) this.$emit('process');
          
          const lines = new this.$PIXI.Texture.from(this.sprite_lines);
          const sheet_lines  = new this.$PIXI.Spritesheet(lines, this.json_lines);
          const flackon = new this.$PIXI.Texture.from(this.sprite_flackon);
          const sheet_flackon  = new this.$PIXI.Spritesheet(flackon, this.json_flackon);
          

          // console.log(sheet);
          if ( loader.progress === 100 ) {
            sheet_lines.parse(() => {
              this.onAssetsLoadedNext();
            })
            sheet_flackon.parse(() => {
              this.onAssetsLoadedFlackon();
            })
          }
        })
    },
    onAssetsLoadedNext() {
      let frames = [];
      for ( let i = 0; i <= 60; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`lines_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .2;
        anim.scale.set(this.X, this.Y);
        anim.loop = true;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },
    onAssetsLoadedFlackon() {
      let frames = [];
      for ( let i = 0; i <= 50; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`flackon_${val}-min.webp`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .2;
        // anim.scale.set(this.X, this.Y);
        anim.loop = true;
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
