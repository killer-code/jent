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
  },
  data: () => ({
    mouseX: 0,
    mouseY: 0,

    width: window.innerWidth,
    height: window.innerHeight,

    json_rotate:   require('@/assets/img/sprites/scene_01/rotate-2.json'),
    sprite_rotate: require('@/assets/img/sprites/scene_01/rotate-2.webp'),
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
    document.addEventListener('mousemove', e => {
      this.getMouseX(e);
    })
  },
  methods: {
    createScene() {
      const childLength = this.app.stage.children.length;
      if ( this.app.stage ) {
        for (let i = childLength - 1; i >= 0; i--) {	
          this.app.stage.removeChild(this.app.stage.children[i]);
        };
      }

      const sequence = document.querySelector('.sequence-1');
      const self = this; 

      sequence.appendChild(self.app.view);
      self.app.loader
        .add('image_rotate', this.json_rotate)
        .load((loader, resources) => {
          console.log("progress: " + loader.progress + "%");
          
          if ( loader.progress === 100 ) this.$emit('process');
         
          const rotate = new this.$PIXI.Texture.from(this.sprite_rotate);
          const sheet_rotate = new this.$PIXI.Spritesheet(rotate, this.json_rotate);

          sheet_rotate.parse(() => {
            this.onAssetsLoaded(0, 0);
          })
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
  watch: {}
}
</script>