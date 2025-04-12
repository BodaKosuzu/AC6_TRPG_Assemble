<script lang="ts">
  import SkillData from '../../components/Atoms/skillData.svelte';
  import { inputData, skillData, partsList, selectedParts, osSkillList } from '$lib/store.svelte';

  let coreSkill = $derived.by(() => {
    const lt = partsList.legs[selectedParts.legs].type;
    const data = osSkillList.find((skill) => skill.legType === lt);
    const ds = data?.skills.find((s) => s.type === selectedParts.osType)?.coreSkill;

    return ds || [];
  });

  let data = $derived(skillData.find((sd) => sd.key === coreSkill));
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">コア拡張機能</h2>
  <div class="flex flex-col gap-3 p-3">
    <SkillData
      skill={data}
      clickCheckBox={(key: string) => {
        const target = inputData.selectedSkills.findIndex((selected) => selected === key);

        if (target >= 0) {
          inputData.selectedSkills.splice(target, 1);
        } else {
          inputData.selectedSkills.push(key);
        }
      }}
    />
  </div>
</div>
