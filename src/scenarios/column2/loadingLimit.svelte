<script lang="ts">
  import { partsList, selectedParts } from '$lib/store.svelte';

  let legsWeight = $derived(partsList.legs[selectedParts.legs].limitWeight);
  let coreWeight = $derived(partsList.core[selectedParts.core].limits.weight);
  let generatorEn = $derived(partsList.generator[selectedParts.generator].limits.energy);
  let coreEn = $derived(partsList.core[selectedParts.core].limits.energy);
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">積載上限</h2>
  <div class="flex p-3">
    <div class=" w-1/2">
      <div>限界重量負荷</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>合計：</span>
          <span>
            {legsWeight + coreWeight}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>LEGS:</span>
            <span>
              {legsWeight}
            </span>
          </div>
          <div>
            <span>CORE:</span>
            <span>
              {coreWeight}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class=" w-1/2">
      <div>限界EN負荷</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>合計：</span>
          <span>
            {generatorEn + coreEn}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>GENERATOR:</span>
            <span>
              {generatorEn}
            </span>
          </div>
          <div>
            <span>CORE:</span>
            <span>
              {coreEn}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
