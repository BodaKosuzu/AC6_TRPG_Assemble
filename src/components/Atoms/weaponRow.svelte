<script lang="ts">
  const { weaponName, weaponSubName, weaponList, selected, onChange, key, level } = $props();

  let parts = $derived(weaponList.find((w) => w.key === selected));
</script>

<div class="flex items-center">
  <div class="w-2/12 text-center">
    <div class="text-lg">{weaponName}</div>
    <div class="text-xs">{weaponSubName}</div>
  </div>
  <div class="w-6/12">
    {selected}
    <select
      name={key}
      class="w-full rounded border border-gray-400 bg-gray-500 p-1 text-base placeholder-gray-400"
      value={selected}
      onchange={(e) => onChange(e.currentTarget.value)}
    >
      <option value="0"> - </option>
      {#each weaponList as weapon}
        <option value={weapon.key}>
          {weapon.name}（{weapon.subName}）
        </option>
      {/each}
    </select>
  </div>
  <div class="flex w-4/12 justify-end gap-2">
    <div>
      <div class="text-sm">重量負荷</div>
      <span>
        {#if selected === '0'}
          -
        {:else}
          {parts?.limits.weight}
        {/if}
      </span>
    </div>
    <div>
      <div class="text-sm">EN負荷</div>
      <span>
        {#if selected === '0'}
          -
        {:else}
          {parts?.limits.energy}
        {/if}
      </span>
    </div>
    <div>
      <div class="text-sm">価格</div>
      <span>★ ×</span>
      <span>
        {#if selected === '0'}
          -
        {:else}
          {parts?.price}
        {/if}
      </span>
    </div>
  </div>
</div>
