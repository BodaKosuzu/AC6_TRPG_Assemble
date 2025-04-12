<script lang="ts">
  import { partsList, selectedParts } from '$lib/store.svelte';

  let againstSystemFailure = $derived(partsList.head[selectedParts.head].againstSystemFailure);
  let search = $derived(partsList.head[selectedParts.head].search);
  let hacking = $derived(partsList.head[selectedParts.head].hacking);

  let legManeuver = $derived(partsList.legs[selectedParts.legs].maneuver);
  let boosterManeuver = $derived(partsList.booster[selectedParts.booster].maneuver);
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">行為判定</h2>
  <div class="flex p-3">
    <div class=" w-1/4">
      <div>対システム障害</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>2D+</span>
          <span>
            {againstSystemFailure}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>HEAD:</span>
            <span>
              {againstSystemFailure}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class=" w-1/4">
      <div>サーチ</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>2D+</span>
          <span>
            {search}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>HEAD:</span>
            <span>
              {search}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class=" w-1/4">
      <div>ハッキング</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>2D+</span>
          <span>
            {hacking}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>HEAD:</span>
            <span>
              {hacking}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class=" w-1/4">
      <div>マニューバ</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          {#if legManeuver + boosterManeuver < 0}
            <span>2D</span>
          {:else}
            <span>2D+</span>
          {/if}
          <span>
            {legManeuver + boosterManeuver}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>LEGS:</span>
            <span>
              {legManeuver}
            </span>
          </div>
          <div>
            <span>BOOSTER:</span>
            <span>
              {boosterManeuver}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
