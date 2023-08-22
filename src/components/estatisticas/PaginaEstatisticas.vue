<template>
    <div>
        <card-estatisticas></card-estatisticas>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardEstatisticas from './CardEstatisticas.vue';
@Component({ components: { CardEstatisticas } })
export default class PaginaEstatisticas extends Vue {
    
}
</script>