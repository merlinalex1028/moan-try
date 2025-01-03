<script setup lang="ts">
import type { IButtonType } from '@/components/MaButton'
import MaButton from '@/components/MaButton/index.vue'
import DocumentCol from '../DocumentCol.vue'
import DocumentContainer from '../DocumentContainer.vue'
import DocumentRow from '../DocumentRow.vue'

import defaultCode from './default.md'

const buttonList: {
  type: IButtonType
  text: string
}[] = [
  {
    type: 'primary',
    text: 'Primary'
  },
  {
    type: 'success',
    text: 'Success'
  },
  {
    type: 'warning',
    text: 'Warning'
  },
  {
    type: 'error',
    text: 'Error'
  }
]
</script>

<template>
  <DocumentContainer title="Basic Usage">
    <DocumentCol>
      <DocumentRow title="Default">
        <MaButton v-for="button in buttonList" :key="button.type" :type="button.type">
          {{ button.text }}
        </MaButton>
      </DocumentRow>
      <DocumentRow title="Plain">
        <MaButton
          v-for="button in buttonList"
          :key="button.type"
          :type="button.type"
          plain
        >
          {{ button.text }}
        </MaButton>
      </DocumentRow>
      <DocumentRow title="Rounded">
        <MaButton
          v-for="button in buttonList"
          :key="button.type"
          :type="button.type"
          rounded
        >
          {{ button.text }}
        </MaButton>
      </DocumentRow>
    </DocumentCol>
  </DocumentContainer>
  <defaultCode class="mb-8 mt-4" />
</template>
