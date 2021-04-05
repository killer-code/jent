<template>
  <section class="scene" 
    style="position: fixed;">
      <div class="canvas sequence-1"></div>
  </section>
</template>

<script>
export default {
  name: 'AnimeScreenOne',
  props: {
    scroll: Number,
    animationState: Object,
    sprite_img: Image,
  },
  data: () => ({
    mouseX: 0,
    mouseY: 0,

    width: window.innerWidth,
    height: window.innerHeight,

    json_rotate:   require('@/assets/img/sprites/scene_01/rotate-2.json'),
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
    Y: function() { return this.height / 980 }
  },
  mounted() {
    this.$PIXI.settings.ANISOTROPIC_LEVEL = 8;
    this.createScene();
  },
  methods: {
    createScene() {
      const sequence = document.querySelector('#main-scene');
      const self = this; 
      self.app.view.classList.add('scene-001');

      sequence.appendChild(self.app.view);
      
      if ( self.app.loader.resources.image_rotate ) {
        self.app.loader
          .load((loader, resources) => {
            const rotate = new this.$PIXI.Texture.from(this.sprite_img);
            const sheet_rotate = new this.$PIXI.Spritesheet(rotate, this.json_rotate);

            sheet_rotate.parse(() => {
              this.onAssetsLoaded(0, 1);
            })
          })
      } else {
        self.app.loader
          .add('image_rotate', this.json_rotate)
          .load((loader, resources) => {
            const rotate = new this.$PIXI.Texture.from(this.sprite_img);
            const sheet_rotate = new this.$PIXI.Spritesheet(rotate, this.json_rotate);

            sheet_rotate.parse(() => {
              this.onAssetsLoaded(0, 1);
            })
          })
      }
      document.addEventListener('mousemove', e => {
        this.getMouseX(e);
      })
    },
    onAssetsLoaded(frame_start = 0, frame_end = 1) {
      const frames = [];
      const childLength = this.app.stage.children.length;
      if ( this.scroll === 0 ) {
        if ( this.app.stage ) {
          for (let i = childLength - 1; i >= 0; i--) 
            {	this.app.stage.removeChild(this.app.stage.children[i]);
          };
        }
        if ( frame_start > frame_end ) {
          for ( let i = frame_start; i > frame_end; i-- ) {
            const val = i;

            frames.push(this.$PIXI.Texture.from(`rotate_${val}-min.webp`));
            const anim = new this.$PIXI.AnimatedSprite(frames);

            anim.x = this.app.screen.width / 2;
            anim.y = this.app.screen.height / 2;
            anim.anchor.set(.5);
            anim.animationSpeed = .5;
            anim.scale.set(this.X, this.Y);
            anim.loop = false;
            anim.play();

            this.app.stage.addChild(anim);
          }
        } else if ( frame_start < frame_end ) {
          for ( let i = frame_start; i < frame_end; i++ ) {
            const val = i;

            frames.push(this.$PIXI.Texture.from(`rotate_${val}-min.webp`));
            const anim = new this.$PIXI.AnimatedSprite(frames);

            anim.x = this.app.screen.width / 2;
            anim.y = this.app.screen.height / 2;
            anim.anchor.set(.5);
            anim.animationSpeed = .5;
            anim.scale.set(this.X, this.Y);
            anim.loop = false;
            anim.play();

            this.app.stage.addChild(anim);
          }
        }
      } else {
        if ( this.app.stage ) {
          for (let i = childLength - 1; i >= 0; i--) 
            {	this.app.stage.removeChild(this.app.stage.children[i]);
          };
        }
      }
    },

    getMouseX(e) {
      let newMouseX = e.clientX;
      let newMouseY = e.clientY;
      let widthFrame = window.innerWidth / 29;
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
      if ( this.scroll !== 0 ) {
        document.removeEventListener('mousemove', e => {
          this.getMouseX(e);
        })
      } else {
        setTimeout(() => {
          this.createScene();
          document.addEventListener('mousemove', e => {
            this.getMouseX(e);
          })
          const treshScene = document.querySelector('.scene-002');
          if ( treshScene ) {
            document.getElementById('main-scene').removeChild(treshScene);
          }
        }, 2500)
      }
    }
  }
}
</script>