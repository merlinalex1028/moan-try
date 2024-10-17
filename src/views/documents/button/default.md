```vue
<script setup lang="ts">
import MaButton from '@/components/MaButton/index.vue'
</script>

<template>
  <!-- default -->
  <MaButton type="primary">
    Primary
  </MaButton>
  <MaButton type="success">
    Success
  </MaButton>
  <MaButton type="warning">
    Warning
  </MaButton>
  <MaButton type="error">
    Error
  </MaButton>

  <!-- plain -->
  <MaButton type="primary" plain>
    Primary
  </MaButton>
  <MaButton type="success" plain>
    Success
  </MaButton>
  <MaButton type="warning" plain>
    Warning
  </MaButton>
  <MaButton type="error" plain>
    Error
  </MaButton>

  <!-- rounded -->
  <MaButton type="primary" rounded>
    Primary
  </MaButton>
  <MaButton type="success" rounded>
    Success
  </MaButton>
  <MaButton type="warning" rounded>
    Warning
  </MaButton>
  <MaButton type="error" rounded>
    Error
  </MaButton>
</template>
```
