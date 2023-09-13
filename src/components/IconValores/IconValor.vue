<template>
  <v-card
    class="mx-auto"
    max-width="200"
  >
    <v-card-text>
        <v-avatar size="42" :color=cor>
          <v-icon large color="white">{{ icon }}</v-icon>
        </v-avatar>
        <p class="text-h6 text--secundary">{{ textoTitulo }}</p>
      <p class="text-h4 text--primary">R$ {{ valor }}</p>
       {{ textoMensagem }}
    </v-card-text>
  </v-card>
</template>
  
<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';


@Component({
    components: {},
})
export default class IconValor extends Vue {
 @Prop() public icon!: string;
 @Prop() public cor!: string;
 @Prop() public textoTitulo!: string;
 @Prop() public valor!: number;
 @Prop() public textoMensagem!: string;
}
</script>
  
<style scoped lang="scss">
.texto-padrao {
    color: rgba(0, 0, 0, 0.7);
}

.filtro-btn {
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: none !important;
    min-width: 110px !important;
}

.texto-azul-botao {
    color: #2f54d3 !important;
}
</style>
  