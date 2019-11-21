<template>
  <button class="g-button"
          :class="{[`icon-${iconPosition}`]:true}"
          @click="$emit('handle-click')">
    <l-icon class="icon"
            :name="icon"
            v-if="icon && !loading"></l-icon>
    <l-icon class="loading icon"
            name="loading"
            v-if="loading"></l-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handler() {}
  }
};
</script>

<style lang='scss'>
@keyframes spini {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  height: var(--button-height);
  padding: 0 1em;
  vertical-align: middle;
  font: inherit;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
  .loading {
    animation: spini 1s infinite linear;
  }
}
</style>