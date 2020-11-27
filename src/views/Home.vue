<template>
  <div class="home">
    <div class="section">
      <ScreenOne :asideData="asideData" 
        :getAsideData="getAsideData" />
    </div>
    <div class="section">
      <ScreenTwo :asideData="asideData" 
        :getAsideData="getAsideData"/>
    </div>
    <div class="section">
      <ScreenThree />
    </div>
    <div class="section">
      <ScreenFour :screen="screen" />
    </div>
    <div class="section">
      <ScreenFive />
    </div>
    <div class="section">
      <ScreenSix />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ScreenOne   from '@/components/home/ScreenOne'
import ScreenTwo   from '@/components/home/ScreenTwo'
import ScreenThree from '@/components/home/ScreenThree'
import ScreenFour  from '@/components/home/ScreenFour'
import ScreenFive  from '@/components/home/ScreenFive'
import ScreenSix  from '@/components/home/ScreenSix'

// import * as db from '@/api/data.json'

export default {
  name: 'Home',
  props: ['asideData', 'screen'],
  metaInfo: {
    title: 'Jent',
    htmlAttrs: {
      lang: 'ru',
    }
  },
  components: { 
    ScreenOne, 
    ScreenTwo, 
    ScreenThree, 
    ScreenFour,
    ScreenFive,
    ScreenSix,
  },
  computed: {
    ...mapGetters(['getAsideData']),
  },
  watch: {
    // screen() {
    //   if (this.screen === 1) {
    //     console.clear();
    //     console.log(this.$PIXI);
    //     const stage = new this.$PIXI.Application({
    //       antialias: true,
    //       transparent: true,
    //       width: 200,
    //       height: 200,
    //     });
    //     const renderer = this.$PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
    //       view: document.querySelector('#smoke'),
    //     });

    //     const uniforms = {
    //       resolution: {
    //         type: '2f',
    //         value: {
    //           x: window.innerWidth,
    //           y: window.innerHeight,
    //         },
    //       },
    //       alpha: {
    //         type: '1f',
    //         value: 1,
    //       },
    //       shift: {
    //         type: '1f',
    //         value: 1.6,
    //       },
    //       time: {
    //         type: '1f',
    //         value: 0,
    //       },
    //       speed: {
    //         type: '2f',
    //         value: {
    //           x: 0.7,
    //           y: 0.4,
    //         },
    //       },
    //     };

    //     const fragmentSrc = `
    //     precision mediump float;
    //     uniform vec2      resolution;
    //     uniform float     time;
    //     uniform float     alpha;
    //     uniform vec2      speed;
    //     uniform float     shift;
          
    //     float rand(vec2 n) {
    //     return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    //     }

    //     float noise(vec2 n) {
    //       const vec2 d = vec2(0.0, 1.0);
    //       vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
    //       return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
    //     }

    //     float fbm(vec2 n) {
    //       float total = 0.0, amplitude = 1.0;
    //       for (int i = 0; i < 4; i++) {
    //         total += noise(n) * amplitude;
    //         n += n;
    //         amplitude *= 0.5;
    //       }
    //       return total;
    //     }

    //     void main() {
    //       const vec3 c1 = vec3(126.0/255.0, 0.0/255.0, 97.0/255.0);
    //       const vec3 c2 = vec3(173.0/255.0, 0.0/255.0, 161.4/255.0);
    //       const vec3 c3 = vec3(0.2, 0.0, 0.0);
    //       const vec3 c4 = vec3(164.0/255.0, 1.0/255.0, 214.4/255.0);
    //       const vec3 c5 = vec3(0.1);
    //       const vec3 c6 = vec3(0.9);

    //       vec2 p = gl_FragCoord.xy * 8.0 / resolution.xx;
    //       float q = fbm(p - time * 0.1);
    //       vec2 r = vec2(fbm(p + q + time * speed.x - p.x - p.y), fbm(p + q - time * speed.y));
    //       vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);
    //       float grad = gl_FragCoord.y / resolution.y;
    //       gl_FragColor = vec4(c * cos(shift * gl_FragCoord.y / resolution.y), 1.0);
    //       gl_FragColor.xyz *= 1.0-grad;
    //     }
    //     `;

    //     const filter = new this.$PIXI.Filter(undefined, fragmentSrc, uniforms);

    //     const bg = this.$PIXI.Sprite.from('https://s3-us-west-2.amazonaws.com/s.cdpn.io/167451/test_BG.jpg');
    //     bg.width = window.innerWidth;
    //     bg.height = window.innerHeight;
    //     bg.shader = filter;
    //     console.log(stage);
    //     stage.stage.addChild(bg);

    //     function update(timestamp) {  
    //       console.log(filter);
    //       filter.uniforms.time.value = timestamp / 1000;
    //       filter.uniformGroup.syncUniforms();
            
    //       renderer.render(stage);
                
    //       requestAnimationFrame(update);
    //     }

    //     requestAnimationFrame(update);
    //   }
    // }
  }
}
</script>
