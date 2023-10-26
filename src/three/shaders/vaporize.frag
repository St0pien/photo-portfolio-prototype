#define FADE 10.0
#define FADE_OFFSET 0.2
#define FRACT 1024.0

varying vec2 vUv;

uniform sampler2D uTexture;
uniform float uDisperse;

float disperseVertically(float value) {
  return step(uDisperse * (vUv.y + FADE_OFFSET) * FADE, fract(value * FRACT));
}

void main() {
  float calculatedAlpha = disperseVertically(vUv.x) * disperseVertically(vUv.y);
  gl_FragColor = vec4(texture2D(uTexture, vUv).xyz, calculatedAlpha);
  // gl_FragColor = vec4(vec3(cnoise(vUv * 20.0 +
  // uSeed)) , step(vUv.y * // pow(uDisperse, 3.0),
  // fract(vUv.x * 150.0)) * step(vUv.y * //
  // pow(uDisperse, 3.0), fract(vUv.y * 150.0))); }
}