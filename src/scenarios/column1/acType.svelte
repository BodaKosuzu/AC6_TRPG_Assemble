<script lang="ts">
  import { selectedParts, partsList, osSkillList, legType, inputData } from '$lib/store.svelte';

  let osSkills = $derived.by(() => {
    const lt = partsList.legs[selectedParts.legs].type;
    const data = osSkillList.find((skill) => skill.legType === lt);

    return data?.skills || [];
  });
  let legTypeName = $derived.by(() => {
    const lt = partsList.legs[selectedParts.legs].type;
    const data = legType.find((skill) => skill.key === lt);

    return data?.name || '';
  });

  let skillLimit = $derived(parseInt(inputData.level) / 5);
  let skillNum = $derived(inputData.selectedSkills.length);
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">OSタイプ選択</h2>
  <div class="p-3">
    <div>
      {legTypeName}
    </div>
    <select
      class="mt-1 w-1/2 rounded border border-gray-400 bg-gray-500 p-1 text-base placeholder-gray-400"
      value={selectedParts.osType}
      onchange={(e) => (selectedParts.osType = parseInt(e.currentTarget.value))}
    >
      {#each osSkills as skill, index}
        <option value={index}>
          {skill.name}
        </option>
      {/each}
    </select>
    <div class="text-red-300">
      {#if skillNum > skillLimit}
        <div>※獲得できるスキルの数を超えています（{skillLimit}つまで）。</div>
      {/if}
    </div>
  </div>
</div>
