<template>
    <div>

    </div>
</template>

<script>
import { store } from '../store';

export default {
    data () {
        return {
            store,
        }
    },
    created() {
        store.isHeaderHome = false;
    }
}
</script>

<style lang="scss" scoped>

</style>