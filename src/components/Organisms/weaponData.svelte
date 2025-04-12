<script lang="ts">
  import { IconInfoCircle } from '@tabler/icons-svelte';
  import { weaponType, attributeType, weaponSkillData } from '$lib/store.svelte';
  import WeaponSkill from '../Atoms/weaponSkill.svelte';
  const { name, key, weaponData, armsData, fcsData } = $props();

  let category = $derived(weaponType.find((type) => type.key === weaponData.category)?.name);

  let partsPowerCorrection = $derived.by(() => {
    switch (weaponData.category) {
      case '1':
      case '4':
        return armsData.power.handGunShotGun + fcsData.power.handGunShotGun;
        break;
      case '2':
      case '3':
        return armsData.power.rifleMacineGun + fcsData.power.rifleMacineGun;
        break;
      case '5':
        return armsData.power.bgl + fcsData.power.bgl;
        break;
      case '6':
      case '8':
        return armsData.power.missileCannon + fcsData.power.missileCannon;
        break;
      case '7':
        return armsData.power.closeRange + fcsData.power.closeRange;
        break;
      case '9':
        return armsData.power.other + fcsData.power.other;
        break;
      case '10':
        return '-';
        break;
      default:
        break;
    }
  });
  let weaponPowerCorrection = $derived(weaponData.damageCorrection);

  let isShowInfo = $state([false, false, false]);

  const findAttributeText = (key: string) => {
    return attributeType.find((type) => type.key === key)?.name || '';
  };

  const findSkillName = (key: string) => {
    return weaponSkillData.find((skill) => skill.key === key)?.name || '';
  };
</script>

<div>
  <h3 class="font-bold">{name}</h3>
  <div class="mt-3">
    {#if Object.keys(weaponData).length !== 0}
      <div class="flex justify-between">
        <div>
          <span>
            {weaponData.name}
          </span>
          <span>
            （{weaponData.subName}）
          </span>
        </div>
        <div>
          <span>カテゴリ：</span>
          <span>
            {category}
          </span>
        </div>
      </div>

      <table class="mt-3 w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" class="text-center">レンジ</th>
            <th scope="col" class="text-center">コスト</th>
            {#if weaponData.category !== '10'}
              <th scope="col" class="text-center">属性</th>
              <th scope="col" class="text-center">火力タイプ</th>
              <th scope="col" class="text-center">ヒット数</th>
            {:else}
              <th scope="col" class="text-center">追加防御性能</th>
            {/if}
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          {#each weaponData.hitRate as hitRate}
            <tr>
              <td class="text-center">
                {hitRate.range}
              </td>
              <td class="p-1 text-center">
                <div class="text-xs">
                  {#if hitRate.cost.dice.type === '1'}
                    <div class="flex justify-center gap-1">
                      {#each hitRate.cost.dice.roll as roll}
                        <div class="flex h-5 w-5 items-center justify-center rounded-md border">
                          {roll}
                        </div>
                      {/each}
                    </div>
                  {:else if hitRate.cost.dice.type === '2'}
                    <span>連番：</span>
                    <span>
                      {hitRate.cost.dice.number}
                    </span>
                  {:else if hitRate.cost.dice.type === '3'}
                    <span>ゾロ目：</span>
                    <span>
                      {hitRate.cost.dice.number}
                    </span>
                  {/if}
                  <div class="mt-1 flex justify-center gap-1">
                    {#each { length: hitRate.cost.useBullet }}
                      <span>◆</span>
                    {/each}
                  </div>
                </div>
              </td>
              {#if weaponData.category !== '10'}
                <td class="text-center">
                  {findAttributeText(hitRate.rate?.attribute)}
                </td>
                <td class="text-center">
                  {hitRate.rate?.type}
                </td>
                <td class="text-center">
                  {hitRate.rate?.hit}
                </td>
              {:else}
                <td class="text-center">
                  <div class="flex justify-center gap-1">
                    {#each hitRate.defence as defense, index}
                      <div>
                        {#if index > 0}
                          <span>/</span>
                        {/if}
                        <span>
                          {findAttributeText(defense.attribute)}
                        </span>
                        <span>
                          {defense.armer}
                        </span>
                      </div>
                    {/each}
                  </div>
                </td>
              {/if}
            </tr>
          {/each}
        </tbody>
      </table>

      {#if weaponData.category !== '10'}
        <div class="mt-3 flex gap-6">
          <div>
            <div>威力補正</div>
            <div class="ml-1 flex items-center gap-3">
              <div class="text-lg">
                <span>合計：</span>
                <span>
                  {partsPowerCorrection + weaponPowerCorrection}
                </span>
              </div>
              <div class="text-sm">
                <div>
                  <span>機体:</span>
                  <span>
                    {partsPowerCorrection}
                  </span>
                </div>
                <div>
                  <span>武装:</span>
                  <span>
                    {weaponPowerCorrection}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>弾数</div>
            <div class="ml-1 text-lg">
              {#if weaponData.category !== '7'}
                <span>
                  {weaponData.bullet.number}
                </span>
                <span>×</span>
                <span>
                  {weaponData.bullet.line}
                </span>
                <span>Line</span>
              {:else}
                <span>-</span>
              {/if}
            </div>
          </div>
        </div>
        <div class="mt-3">
          <div>スキル</div>
          {#if weaponData.skills.length > 0}
            <div class="flex gap-3">
              {#each weaponData.skills as skill, index}
                <div class="flex cursor-pointer gap-1">
                  {findSkillName(skill)}
                  <!-- svelte-ignore a11y_no_static_element_interactions -->
                  <div
                    class="relative"
                    onmouseenter={() => (isShowInfo[index] = true)}
                    onmouseleave={() => (isShowInfo[index] = false)}
                  >
                    <IconInfoCircle />
                    {#if isShowInfo[index]}
                      <WeaponSkill skillKey={skill} />
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          {:else}
            <div>-</div>
          {/if}
        </div>
      {/if}
    {:else}
      -
    {/if}
  </div>
</div>
