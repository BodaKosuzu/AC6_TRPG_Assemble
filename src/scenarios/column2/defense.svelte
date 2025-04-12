<script lang="ts">
  import { partsList, selectedParts } from '$lib/store.svelte';

  let defenseBullet = $derived(partsList.legs[selectedParts.legs].defence.bullet);
  let defenseExplosion = $derived(partsList.legs[selectedParts.legs].defence.explosion);
  let defenseEnergy = $derived(partsList.legs[selectedParts.legs].defence.energy);
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">防御性能</h2>
  <div class="grid grid-cols-3 gap-3 p-3">
    <div>
      <div>対弾</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>LEGS：</span>
          <span>
            {defenseBullet}
          </span>
        </div>
      </div>
    </div>
    <div>
      <div>対爆</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>LEGS：</span>
          <span>
            {defenseExplosion}
          </span>
        </div>
      </div>
    </div>
    <div>
      <div>対EN</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>LEGS:</span>
          <span>
            {defenseEnergy}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
