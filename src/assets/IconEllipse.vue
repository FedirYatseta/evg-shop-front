<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || 45"
    :height="height || 45"
    viewBox="0 0 111 112"
    fill="none"
  >
    <g filter="url(#filter0_i_39_532)">
      <circle cx="55.5" cy="56" r="55.5" fill="#372929" />
    </g>
    <defs>
      <filter
        id="filter0_i_39_532"
        x="0"
        y="0.5"
        width="111"
        height="124"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="11"
          operator="erode"
          in="SourceAlpha"
          result="effect1_innerShadow_39_532"
        />
        <feOffset dy="13" />
        <feGaussianBlur stdDeviation="9.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.69 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_39_532" />
      </filter>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  }
})
</script>
