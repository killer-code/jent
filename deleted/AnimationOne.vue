<template>
  <transition name="fade" mode="out-in">
    <section class="scene" 
      style="position: fixed;"
      v-show="scroll < 2">
      <div class="canvas sequence-1"></div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'AnimationOne',
  props: ['scroll', 'json_1', 'sprite_1'],
  data: () => ({
    mouseX: 0,
    mouseY: 0,
    rotation: 0.1,

    width: window.innerWidth,
    height: window.innerHeight,
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
  },
  mounted() {
    this.createScene();
    document.addEventListener('mousemove', this.getMouseX, false);
  },
  methods: {
    createScene() {
      if ( this.app.stage ) {
        for (let i = this.app.stage.children.length - 1; i >= 0; i--) {	
          this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }

      const sequence = document.querySelector('.sequence-1');
      const self = this; 

      sequence.appendChild(self.app.view);
      self.app.loader
        .add('image', this.json_1.meta.image)
        .load((loader, resources) => {
          console.log("progress: " + loader.progress + "%");
          
          if ( loader.progress === 100 ) this.$emit('process');
         
          const texture = new this.$PIXI.Texture.from(this.sprite_1);
          const sheet = new this.$PIXI.Spritesheet(texture, this.json_1);

          sheet.parse(() => {
            this.onAssetsLoaded(1, 10);
          })
        })
    },
    onAssetsLoaded(frame_start = 30, frame_end = 31) {
      const frames = [];
      if ( this.scroll === 0 ) {
        if ( this.app.stage ) {
          for (let i = this.app.stage.children.length - 1; i >= 0; i--) 
            {	this.app.stage.removeChild(this.app.stage.children[i]);
          };
        }
        if ( frame_start > frame_end ) {
          for ( let i = frame_start; i > frame_end; i-- ) {
            const val = i;

            frames.push(this.$PIXI.Texture.from(`R03.${val}.png`));
            const anim = new this.$PIXI.AnimatedSprite(frames);

            anim.x = this.app.screen.width / 2;
            anim.y = this.app.screen.height / 2;
            anim.anchor.set(.5);
            anim.animationSpeed = .5;
            anim.loop = false;
            // anim.rotation += .001 * this.mouseY / 35;
            anim.play();

            this.app.stage.addChild(anim);
          }
        } else if ( frame_start < frame_end ) {
          for ( let i = frame_start; i < frame_end; i++ ) {
            const val = i;

            frames.push(this.$PIXI.Texture.from(`R03.${val}.png`));
            const anim = new this.$PIXI.AnimatedSprite(frames);

            anim.x = this.app.screen.width / 2;
            anim.y = this.app.screen.height / 2;
            anim.anchor.set(.5);
            anim.animationSpeed = .5;
            anim.loop = false;
            // anim.rotation += .001 * this.mouseY / 35;
            anim.play();

            this.app.stage.addChild(anim);
          }
        }
      } 
    },
    onAssetsLoaded1() {
      let frames = [];
      if ( this.app.stage ) {
        for (let i = this.app.stage.children.length - 1; i >= 0; i--) 
          {	this.app.stage.removeChild(this.app.stage.children[i]) };
      };
      for ( let i = 63; i > 30; i-- ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`R03.${val}.png`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .5;
        anim.loop = false;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },
    onAssetsLoaded2() {
      let frames = [];
      if ( this.app.stage ) {
        for (let i = this.app.stage.children.length - 1; i >= 0; i--) 
          {	this.app.stage.removeChild(this.app.stage.children[i]) };
      };
      for ( let i = 30; i < 64; i++ ) {
        const val = i;

        frames.push(this.$PIXI.Texture.from(`R03.${val}.png`));
        const anim = new this.$PIXI.AnimatedSprite(frames);
        
        anim.x = this.app.screen.width / 2;
        anim.y = this.app.screen.height / 2;
        anim.anchor.set(.5);
        anim.animationSpeed = .5;
        anim.loop = false;
        anim.play();

        this.app.stage.addChild(anim);
      }
    },

    getMouseX(e) {
      let newMouseX = e.clientX;
      let newMouseY = e.clientY;
      let widthFrame = window.innerWidth / 30;
      let strat_frame = Math.round(this.mouseX / widthFrame);
      let end_frame   = Math.round(newMouseX / widthFrame);
      if ( strat_frame === 0 ) strat_frame += 1;
      if ( end_frame === 0 ) end_frame += 1;
      if ( strat_frame === end_frame ) end_frame += 1;
      setTimeout( () => {
        this.onAssetsLoaded(strat_frame, end_frame);
        this.mouseX = newMouseX;
        this.mouseY = newMouseY - window.innerHeight / 2;
      }, 10)
    },
  },
  watch: { 
    scroll() {
      if ( this.scroll === 0 ) {
        this.onAssetsLoaded1();
        // document.querySelector('.scene').style.bottom = 0;
      }
      if ( this.scroll === 1 ) {
        // document.querySelector('.scene').style.bottom = -200 + 'px';
        this.onAssetsLoaded2();
      }
      if ( this.scroll === 2 ) {
        // document.querySelector('.scene').style.bottom = -200 + 'px';
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scene { transition: all 1s ease; }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
  transition-delay: 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>