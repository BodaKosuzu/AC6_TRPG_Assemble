<script lang="ts">
  import { legType, selectedParts, partsList as pl } from '$lib/store.svelte';
  const {
    partsName,
    partsSubName,
    partsList,
    selected,
    onChange,
    key,
    level,
    isShowAP = false,
    isShowType = false,
  } = $props();

  let isShowBooster = $derived.by(() => {
    const legType = pl.legs[selectedParts.legs].type;

    return key !== 'booster' || legType !== '3';
  });
</script>

<div class="flex items-center">
  <div class="w-2/12 text-center">
    <div class="text-lg">{partsName}</div>
    <div class="text-xs">{partsSubName}</div>
  </div>
  <div class="w-6/12">
    {#if isShowBooster}
      <select
        name={key}
        class="w-full rounded border border-gray-400 bg-gray-500 p-1 text-base placeholder-gray-400"
        value={selected}
        onchange={(e) => onChange(e.currentTarget.value)}
      >
        {#each partsList as parts, index}
          {#if parts.level <= level}
            <option value={index}>
              {parts.name}
            </option>
          {/if}
        {/each}
      </select>
    {:else}
      <div>なし</div>
    {/if}
    {#if isShowType}
      <div class="text-sm">
        <span>Type:</span>
        <span>
          {legType.find((t) => t.key === partsList[parseInt(selected)].type)?.name}
        </span>
      </div>
    {/if}
  </div>
  <div class="flex w-4/12 justify-end gap-2">
    {#if isShowAP}
      <div>
        <div class="text-sm">AP</div>
        <span>
          {partsList[parseInt(selected)].ap.point}
        </span>
        <span>×</span>
        <span>
          {partsList[parseInt(selected)].ap.line}
        </span>
        <span>Line</span>
      </div>
    {/if}
    <div>
      <div class="text-sm">価格</div>
      <span>★ ×</span>
      <span>
        {partsList[parseInt(selected)].price}
      </span>
    </div>
  </div>
</div>
