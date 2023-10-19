<template>
  <div>
    <h1>Pokemon List - ({{ count }})</h1>
    <h3 v-if="isLoading">Cargando...</h3>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'

const { isLoading, data: pokemons } = useQuery(['pokemons'], getPokemons)
const count = computed(() => pokemons.value?.length ?? 0)
</script>
