<template>
    <div>
        <!-- {{ tableData }} -->
        <table v-if="tableData?.length > 0" class="border w-full">
            <thead>
                <tr>
                    <th class="border text-left p-1 bg-amber-400 text-white">S/N</th>
                    <th class="border text-left p-1 bg-amber-400 text-white" v-for="(column, index) in columns" :key="index">
                        {{ column }}
                    </th>
                    <th class="border text-left p-1 bg-amber-400 text-white" v-if="hasActions">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) of tableData" :key="index">
                    <td class="border p-2 text-left">{{ index + 1 }}</td>
                    <td class="border p-2 text-left" v-for="key of Object.keys(columns)" :key="key">
                        <slot :name="key" :itemData="data" :index="index">
                            {{ data[key] }}
                        </slot>
                    </td>
                    <td class="border p-2 text-left" v-if="hasActions">
                        <slot name="actions" :itemData="data" :index="index"></slot>
                    </td>
                </tr>
            </tbody>
        </table>
      <div class="text-center p-5 bg-slate-50 rounded-md shadow" v-else>
        <p>No Items Available </p>
      </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    tableData: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    hasActions: {
        type: Boolean
    }
})

</script>