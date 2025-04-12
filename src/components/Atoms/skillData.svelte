<script lang="ts">
  import { inputData, skillData } from '$lib/store.svelte';
  const { skill, clickCheckBox } = $props();

  let osSkills = $derived.by(() => {
    return skillData.filter((skill) => {
      return skill.category === '1';
    });
  });
</script>

<div class="flex w-full items-center border-t-2 border-gray-400 pt-3 first:border-0 first:pt-0">
  <div>
    <!-- svelte-ignore event_directive_deprecated -->
    <input
      type="checkbox"
      class="h-4 w-4"
      value={skill.key}
      on:click={(e) => {
        clickCheckBox(skill.key);
      }}
    />
  </div>
  <div class="ml-3">
    <div class="flex items-center gap-3">
      <div class="flex min-w-15 flex-col items-center">
        <div>
          {skill.trigger}
        </div>
        <div class="flex gap-1">
          {#if skill.cost.type === '0'}
            <span>-</span>
          {:else if skill.cost.type === '1'}
            {#each skill.cost.dice || [] as dice}
              <span class="flex h-5 w-5 items-center justify-center rounded-md border">
                {dice}
              </span>
            {/each}
          {:else if skill.cost.type === '2'}
            <span>連番：</span>
            <span>
              {skill.cost.number}
            </span>
          {:else if skill.cost.type === '3'}
            <span>ゾロ：</span>
            <span>{skill.cost.number}</span>
          {/if}
        </div>
      </div>
      <div class="min-w-35 text-center whitespace-pre">
        {skill.name}
      </div>
      <div>
        {skill.explanation}
      </div>
    </div>
    <div class="mt-1 ml-6">
      <ul class="list-disc">
        {#each skill.effect as effect}
          <li>
            {effect}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
