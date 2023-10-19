<template>
  <div>
    <NavBar :links="RouterLinks" is-secondary />
    <!-- <Suspense> -->
      <RouterView />
<!-- 
      <template #fallback>
        Loading...
      </template>
    </Suspense> -->
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue'
import { pokemonRoute } from '../router'
import type { RouterLink } from '@/router/list-routes'

const RouterLinks: RouterLink[] =
  pokemonRoute.children?.map(({ name, path, props }) => {
    return {
      name: name?.toString() ?? '',
      path: path,
      title: (props as { title: string }).title
    }
  }) || []
</script>
