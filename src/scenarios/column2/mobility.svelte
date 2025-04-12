<script lang="ts">
  import { partsList, selectedParts } from '$lib/store.svelte';

  let enDiceMaxCore = $derived(partsList.core[selectedParts.core].energyDice.max);
  let enDiceMaxGenerator = $derived(partsList.generator[selectedParts.generator].energyDice.max);
  let enDiceTarnStartCore = $derived(partsList.core[selectedParts.core].energyDice.tarnStart);
  let enDiceTarnStartGenerator = $derived(
    partsList.generator[selectedParts.generator].energyDice.tarnStart
  );
  let enDiceOnesStartCore = $derived(partsList.core[selectedParts.core].energyDice.onesStart);
  let enDiceOnesStartGenerator = $derived(
    partsList.generator[selectedParts.generator].energyDice.onesStart
  );

  let mobilityLegs = $derived(partsList.legs[selectedParts.legs].move);
  let mobilityBooster = $derived(partsList.booster[selectedParts.booster].move);
  let avoidanceLegs = $derived(partsList.legs[selectedParts.legs].avoidance);
  let avoidanceBooster = $derived(partsList.booster[selectedParts.booster].avoidance);
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">機動力</h2>
  <div class="p-3">
    <h3 class="font-bold">ENダイス</h3>
    <div class="grid grid-cols-3 gap-3">
      <div>
        <div>最大値</div>
        <div class="ml-1 flex items-center gap-3">
          <div class="text-lg">
            <span>合計：</span>
            <span>
              {enDiceMaxCore + enDiceMaxGenerator}
            </span>
          </div>
          <div class="text-sm">
            <div>
              <span>CORE:</span>
              <span>
                {enDiceMaxCore}
              </span>
            </div>
            <div>
              <span>GENERATOR:</span>
              <span>
                {enDiceMaxGenerator}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>ターン開始時</div>
        <div class="ml-1 flex items-center gap-3">
          <div class="text-lg">
            <span>合計：</span>
            <span>
              {enDiceTarnStartCore + enDiceTarnStartGenerator}
            </span>
          </div>
          <div class="text-sm">
            <div>
              <span>CORE:</span>
              <span>
                {enDiceTarnStartCore}
              </span>
            </div>
            <div>
              <span>GENERATOR:</span>
              <span>
                {enDiceTarnStartGenerator}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>手番開始時</div>
        <div class="ml-1 flex items-center gap-3">
          <div class="text-lg">
            <span>合計：</span>
            <span>
              {enDiceOnesStartCore + enDiceOnesStartGenerator}
            </span>
          </div>
          <div class="text-sm">
            <div>
              <span>CORE:</span>
              <span>
                {enDiceOnesStartCore}
              </span>
            </div>
            <div>
              <span>GENERATOR:</span>
              <span>
                {enDiceOnesStartGenerator}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-3">
      <div>
        <div>移動コスト</div>
        <div class="ml-1 flex items-center gap-3">
          <div class="flex text-lg">
            <span>合計：</span>
            <div class="flex h-6 w-6 items-center justify-center rounded-md border">
              {mobilityLegs + mobilityBooster}
            </div>
          </div>
          <div class="text-sm">
            <div>
              <span>LEGS:</span>
              <span>
                {mobilityLegs}
              </span>
            </div>
            <div>
              <span>BOOSTER:</span>
              <span>
                {mobilityBooster}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>回避コスト</div>
        <div class="ml-1 flex items-center gap-3">
          <div class="flex text-lg">
            <span>合計：</span>
            <div class="flex h-6 w-6 items-center justify-center rounded-md border">
              {avoidanceLegs + avoidanceBooster}
            </div>
          </div>
          <div class="text-sm">
            <div>
              <span>LEGS:</span>
              <span>
                {avoidanceLegs}
              </span>
            </div>
            <div>
              <span>BOOSTER:</span>
              <span>
                {avoidanceBooster}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
