<script lang="ts">
  import SkillData from '../../components/Atoms/skillData.svelte';
  import { inputData, skillData, partsList, selectedParts, osSkillList } from '$lib/store.svelte';

  let dedicatedSkills = $derived.by(() => {
    const lt = partsList.legs[selectedParts.legs].type;
    const data = osSkillList.find((skill) => skill.legType === lt);
    const ds = data?.skills.find((s) => s.type === selectedParts.osType)?.dedicatedSkills;

    return ds || [];
  });

  let skills = $derived.by(() => {
    const list: any[] = [];

    dedicatedSkills.forEach((s) => {
      list.push(skillData.find((sd) => sd.key === s));
    });

    return list;
  });
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">専用スキル</h2>
  <div class="flex flex-col gap-3 p-3">
    {#each skills as skill}
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
