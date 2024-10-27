<script setup lang="ts">
import { ref } from 'vue'
import { PROTOCOLS, type Protocol } from '@/consts'
import { type NcProtocolFormProps } from '@/components/props'
const props = defineProps<NcProtocolFormProps>()
const emit = defineEmits<{
  (event: 'input:raw-packet', newValue: string): void
  (event: 'input:salt', newValue: string): void
  (event: 'change:protocol', protocol: Protocol): void
}>()

const rawPacket = ref(
  '0c8ddb6d3c33d45763e997f90800450000340000400040067df70ab522a068122766c32f01bba1d8b964565b9c4f801007ff0f6400000101080adb83ef4aedc4d726'
)
const salt = ref('')
const onInputRawPacket = (e) => {
  emit('input:raw-packet', e.target.value)
}
const onInputSalt = (e) => {
  emit('input:salt', e.target.value)
}
const onChangeProtocol = (e) => {
  emit('change:protocol', e.target.value)
}
</script>
<template>
  <main>
    <div class="bg-indigo-500">
      <div>ip header</div>
      <div>
        <form class="flex flex-col gap-2" @submit.prevent>
          <label for="protocols" class="block mb-2 text-sm font-medium text-gray-900"
            >Select an Protocol</label
          >
          <select
            id="protocols"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            @change="onChangeProtocol"
          >
            <option selected>Choose a protocol</option>
            <option :key="i" v-for="(protocol, i) in PROTOCOLS" :value="protocol">
              {{ protocol }}
            </option>
          </select>
          <div class="flex flex-col w-full gap-2 mb-4 border border-gray-200 rounded-lg bg-gray-50">
            <div class="px-4 py-2 bg-white rounded-t-lg">
              <label for="rawPacket" class="sr-only">Your raw packet</label>
              <textarea
                v-model="rawPacket"
                id="rawPacket"
                rows="4"
                class="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
                placeholder="Write a raw packet"
                @input="onInputRawPacket"
                required
              ></textarea>
            </div>
            <div class="px-4 py-2 bg-white rounded-t-lg">
              <label for="salt" class="sr-only">Your salt</label>
              <textarea
                v-model="salt"
                id="salt"
                rows="4"
                class="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
                placeholder="Write a salt"
                @input="onInputSalt"
                required
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
