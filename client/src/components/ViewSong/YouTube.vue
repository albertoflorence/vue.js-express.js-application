<template>
  <panel title="YouTube Video">
    <youtube 
    :video-id="youtubeId"
    :player-width="800"
    :player-height="400"
    ></youtube>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>
