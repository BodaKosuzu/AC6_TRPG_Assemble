<script lang="ts">
  import { partsList, selectedParts } from '$lib/store.svelte';

  let meleeWeaponArms = $derived(partsList.arms[selectedParts.arms].power.closeRange);
  let meleeWeaponFcs = $derived(partsList.fcs[selectedParts.fcs].power.closeRange);

  let handGunShotGunWeaponArms = $derived(partsList.arms[selectedParts.arms].power.handGunShotGun);
  let handGunShotGunWeaponFcs = $derived(partsList.fcs[selectedParts.fcs].power.handGunShotGun);

  let rifleMacineGunWeaponArms = $derived(partsList.arms[selectedParts.arms].power.rifleMacineGun);
  let rifleMacineGunWeaponFcs = $derived(partsList.fcs[selectedParts.fcs].power.rifleMacineGun);

  let bglWeaponArms = $derived(partsList.arms[selectedParts.arms].power.bgl);
  let bglGunWeaponFcs = $derived(partsList.fcs[selectedParts.fcs].power.bgl);

  let missileCannonWeaponArms = $derived(partsList.arms[selectedParts.arms].power.missileCannon);
  let missileCannonWeaponFcs = $derived(partsList.fcs[selectedParts.fcs].power.missileCannon);

  let otherWeaponArms = $derived(partsList.arms[selectedParts.arms].power.other);
  let otherWeaponFcs = $derived(partsList.fcs[selectedParts.fcs].power.other);
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">機体威力補正</h2>
  <div class="grid grid-cols-3 gap-3 p-3">
    <div>
      <div>近接</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>合計：</span>
          <span>
            {meleeWeaponArms + meleeWeaponFcs}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>ARMS:</span>
            <span>
              {meleeWeaponArms}
            </span>
          </div>
          <div>
            <span>FCS:</span>
            <span>
              {meleeWeaponFcs}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>ハンドガン・ショットガン</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>合計：</span>
          <span>
            {handGunShotGunWeaponArms + handGunShotGunWeaponFcs}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>ARMS:</span>
            <span>
              {handGunShotGunWeaponArms}
            </span>
          </div>
          <div>
            <span>FCS:</span>
            <span>
              {handGunShotGunWeaponFcs}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>ライフル・マシンガン</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>合計:</span>
          <span>
            {rifleMacineGunWeaponArms + rifleMacineGunWeaponFcs}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>ARMS:</span>
            <span>
              {rifleMacineGunWeaponArms}
            </span>
          </div>
          <div>
            <span>FCS:</span>
            <span>
              {rifleMacineGunWeaponFcs}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>BGL</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>合計：</span>
          <span>
            {bglWeaponArms + bglGunWeaponFcs}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>ARMS:</span>
            <span>
              {bglWeaponArms}
            </span>
          </div>
          <div>
            <span>FCS:</span>
            <span>
              {bglGunWeaponFcs}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>ミサイル・キャノン</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>合計：</span>
          <span>
            {missileCannonWeaponArms + missileCannonWeaponFcs}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>ARMS:</span>
            <span>
              {missileCannonWeaponArms}
            </span>
          </div>
          <div>
            <span>FCS:</span>
            <span>
              {missileCannonWeaponFcs}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>その他</div>
      <div class="ml-1 flex items-center gap-3">
        <div class="text-lg">
          <span>合計：</span>
          <span>
            {otherWeaponArms + otherWeaponFcs}
          </span>
        </div>
        <div class="text-sm">
          <div>
            <span>ARMS:</span>
            <span>
              {otherWeaponArms}
            </span>
          </div>
          <div>
            <span>FCS:</span>
            <span>
              {otherWeaponFcs}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
