import {ref, computed} from 'vue'
import type {Ref, ComputedRef} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count: Ref<number> = ref(0)
    const increment = () => {
        count.value++
    }

    const doubleCount: ComputedRef<number> = computed(() => {
        return count.value * 2;
    })
    const doublePlusOne: ComputedRef<number> = computed(() => {
        return doubleCount.value + 1
    })
    const registerUser = () => {
    }

    return {count, increment, doublePlusOne, doubleCount}
})