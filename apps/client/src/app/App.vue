<script setup lang="ts">
  import {onMounted} from "vue";
  import {useTelegram} from "../telegram/useTelegram";

  const {tg, queryId, user, onToggleButton, onClose} = useTelegram();

  onMounted(()=>{
    tg.ready();
  })
</script>

<template>
  work
</template>
