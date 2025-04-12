<script lang="ts">
  import { weaponSkillData } from '$lib/store.svelte';
  const { skillKey } = $props();

  let skillData = $derived(weaponSkillData.find((skill) => skill.key === skillKey));
</script>

<div
  class="absolute bottom-9 -left-6 min-w-200 rounded-lg bg-gray-500 p-3 before:absolute before:top-full before:left-9 before:-translate-x-1/2 before:border-12 before:border-transparent before:border-t-gray-500 before:content-['']"
>
  <table class="w-full divide-y divide-gray-200">
    <thead>
      <tr>
        <th scope="col" class="text-center whitespace-nowrap">スキル名</th>
        <th scope="col" class="text-center whitespace-nowrap">タイミング</th>
        <th scope="col" class="text-center whitespace-nowrap">コスト</th>
        <th scope="col" class="text-center whitespace-nowrap">効果</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="p-3 text-center">
          <div class="whitespace-nowrap">
            {skillData?.name}
          </div>
        </td>
        <td class="p-3 text-center">
          {skillData?.timing}
        </td>
        <td class="p-3 text-center">
          {#if skillData?.cost[0] === 0}
            <div>-</div>
          {:else}
            <div class="flex justify-center gap-1">
              {#each skillData?.cost || [] as cost}
                <div class="flex h-6 w-6 items-center justify-center rounded-md border">
                  {cost}
                </div>
              {/each}
            </div>
          {/if}
        </td>
        <td class="p-3">
          <ul>
            {#each skillData?.effect || [] as effect}
              <li>{effect}</li>
            {/each}
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
