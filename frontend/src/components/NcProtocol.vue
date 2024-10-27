<script setup lang="ts">
import { IP, TCP, UDP } from '@/consts'
import { type NcProtocolProps } from '@/components/props'
import NcIp from '@/components/protocol/NcIp.vue'
import NcTcp from '@/components/protocol/NcTcp.vue'
import NcUdp from '@/components/protocol/NcUdp.vue'

defineProps<NcProtocolProps>()
</script>
<template>
  <main>
    <div>
      <NcIp v-if="$props.protocol === IP" :raw-packet="$props.rawPacket" />
      <NcTcp v-else-if="$props.protocol === TCP" :raw-packet="$props.rawPacket" />
      <NcUdp v-else-if="$props.protocol === UDP" :raw-packet="$props.rawPacket" />
    </div>
  </main>
</template>
