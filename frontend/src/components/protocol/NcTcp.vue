<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type NcTcpProps } from '@/components/props'
const props = defineProps<NcTcpProps>()
const rawPacket: Ref<string> = ref(props.rawPacket ?? '')
const sourcePort: Ref<string> = ref(rawPacket.value?.substring(0, 4))
const destinationPort: Ref<string> = ref(rawPacket.value?.substring(4, 8))

const sequenceNumber = ref(rawPacket.value?.substring(4, 8))
const acknowledgmentNo = ref(rawPacket.value?.substring(4, 8))
const dataOffset = ref(rawPacket.value?.substring(4, 8))
const reserved = ref(rawPacket.value?.substring(4, 8))
const flags = ref(rawPacket.value?.substring(4, 8))
const windowSize = ref(rawPacket.value?.substring(4, 8))
const checksum = ref(rawPacket.value?.substring(4, 8))
const urgentPointer = ref(rawPacket.value?.substring(4, 8))
const options = ref(rawPacket.value?.substring(4, 8))
const padding = ref(rawPacket.value?.substring(4, 8))
</script>
<template>
  <div>NcTcp</div>
  <!--
  <div class="flex flex-row w-full">
    <div class="flex-row flax">
      <div>Source Port</div>
      <div>Destination Port</div>
    </div>
    <div class="flex-row flax">
      <div>{{ sourcePort }}</div>
      <div>{{ destinationPort }}</div>
    </div>
    <div class="flex-col flax">
      <div>sequenceNumber</div>
    </div>
    <div class="flex-col flax">
      <div>{{ sequenceNumber }}</div>
    </div>
    <div class="flex-col flax">
      <div>acknowledgmentNo</div>
    </div>
    <div class="flex-col flax">
      <div>{{ acknowledgmentNo }}</div>
    </div>
    <div class="flex-col flax">
      <div>dataOffset</div>
      <div>reserved</div>
      <div>flags</div>
      <div>windowSize</div>
    </div>
    <div class="flex-col flax">
      <div>{{ dataOffset }}</div>
      <div>{{ reserved }}</div>
      <div>{{ flags }}</div>
      <div>{{ windowSize }}</div>
    </div>
    <div class="flex-col flax">
      <div>checksum</div>
      <div>urgentPointer</div>
    </div>
    <div class="flex-col flax">
      <div>{{ checksum }}</div>
      <div>{{ urgentPointer }}</div>
    </div>
    <div class="flex-col flax">
      <div>options</div>
    </div>
    <div class="flex-col flax">
      <div>{{ options }}</div>
    </div>
  </div>
  -->
  <div
    class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white rounded-lg shadow-md bg-clip-border"
  >
    <table class="w-full text-left table-auto min-w-max">
      <thead>
        <tr>
          <th class="p-4 border-b border-slate-300 bg-slate-50">
            <p class="block text-sm font-normal leading-none text-slate-500">Source Port</p>
          </th>
          <th class="p-4 border-b border-slate-300 bg-slate-50">
            <p class="block text-sm font-normal leading-none text-slate-500">Destination Port</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-slate-50">
          <td class="p-4 py-5 border-b border-slate-200">
            <p>{{ sourcePort }}</p>
          </td>
          <td class="p-4 py-5 border-b border-slate-200">
            <p>{{ destinationPort }}</p>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th class="p-4 border-b border-slate-300 bg-slate-50">
            <p class="block text-sm font-normal leading-none text-slate-500">Sequence Number</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-slate-50">
          <td class="p-4 py-5 border-b border-slate-200">
            <p>{{ sequenceNumber }}</p>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th class="p-4 border-b border-slate-300 bg-slate-50">
            <p class="block text-sm font-normal leading-none text-slate-500">Acknowledgment No</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-slate-50">
          <td class="p-4 py-5 border-b border-slate-200">
            <p>{{ acknowledgmentNo }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
