<template>
  <panel title="Lyrics">
    <v-layout>
      <textarea
        multiline
        v-model="lyrics"
        readonly
      >
      </textarea>
    </v-layout>
  </panel>
</template>

<script>
export default {
  props: [
    'lyrics'
  ]
}
</script>

<style scoped>
  textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 20px;
  }
</style>