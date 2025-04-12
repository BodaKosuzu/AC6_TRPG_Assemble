<script lang="ts">
  import SkillData from '../../components/Atoms/skillData.svelte';
  import { inputData, skillData } from '$lib/store.svelte';

  let osSkills = $derived.by(() => {
    return skillData.filter((skill) => {
      return skill.category === '2';
    });
  });
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">共通スキル</h2>
  <div class="flex flex-col gap-3 p-3">
    {#each osSkills as skill}
      <SkillData
        {skill}
        clickCheckBox={(key: string) => {
          const target = inputData.selectedSkills.findIndex((selected) => selected === key);

          if (target >= 0) {
            inputData.selectedSkills.splice(target, 1);
          } else {
            inputData.selectedSkills.push(key);
          }
        }}
      />
    {/each}
  </div>
</div>
