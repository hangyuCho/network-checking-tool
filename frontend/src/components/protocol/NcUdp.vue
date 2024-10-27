<script setup lang="ts">
import { type NcUdpProps } from '@/components/props'
const props = defineProps<NcUdpProps>()
</script>
<template>
  <div>NcUdp</div>
  {{ $props.rawPacket }}
</template>
