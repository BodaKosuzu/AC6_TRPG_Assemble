<script lang="ts">
  import Column1 from './column1/column1.svelte';
  import Column2 from './column2/column2.svelte';
  import Column3 from './column3/column3.svelte';
</script>

<div class="flex gap-6">
  <div class="w-1/3">
    <Column1 />
  </div>
  <div class="w-1/3">
    <Column2 />
  </div>
  <div class="w-1/3">
    <Column3 />
  </div>
</div>
