<script setup lang="ts">
import { type Ref, ref } from 'vue'
import NcProtocol from '@/components/NcProtocol.vue'
import NcProtocolForm from '@/components/NcProtocolForm.vue'
import { type Protocol } from '@/consts'
const rawPacket: Ref<string> = ref(
  '0c8ddb6d3c33d45763e997f90800450000340000400040067df70ab522a068122766c32f01bba1d8b964565b9c4f801007ff0f6400000101080adb83ef4aedc4d726'
)
const salt: Ref<string> = ref('')
const selectedProtocol: Ref<Protocol | null> = ref(null)
</script>

<template>
  <main>
    <NcProtocolForm
      @input:raw-packet="(text: string) => (rawPacket = text)"
      @input:salt="(text: string) => (salt = text)"
      @change:protocol="(protocol: Protocol) => (selectedProtocol = protocol)"
    />
    <NcProtocol :protocol="selectedProtocol" :raw-packet="rawPacket" />
  </main>
</template>
