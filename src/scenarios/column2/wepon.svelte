<script lang="ts">
  import WeaponData from '../../components/Organisms/weaponData.svelte';
  import { partsList, weaponList, selectedParts } from '$lib/store.svelte';

  let weaponR = $derived(weaponList.weapon.find((w) => w.key === selectedParts.weaponR));
  let weaponL = $derived(weaponList.weapon.find((w) => w.key === selectedParts.weaponL));
  let shoulderR = $derived(weaponList.weapon.find((w) => w.key === selectedParts.shoulderR));
  let shoulderL = $derived(weaponList.weapon.find((w) => w.key === selectedParts.shoulderL));

  let arms = $derived(partsList.arms[selectedParts.arms]);
  let fcs = $derived(partsList.fcs[selectedParts.fcs]);
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">武装</h2>
  <div class="p-3">
    <div>
      <WeaponData
        name="腕武装R"
        key="weaponR"
        weaponData={weaponR || {}}
        armsData={arms}
        fcsData={fcs}
      />
    </div>
    <div class="mt-6">
      <WeaponData
        name="腕武装L"
        key="weaponL"
        weaponData={weaponL || {}}
        armsData={arms}
        fcsData={fcs}
      />
    </div>
    <div class="mt-6">
      <WeaponData
        name="肩武装R"
        key="shoulderR"
        weaponData={shoulderR || {}}
        armsData={arms}
        fcsData={fcs}
      />
    </div>
    <div class="mt-6">
      <WeaponData
        name="肩武装L"
        key="shoulderL"
        weaponData={shoulderL || {}}
        armsData={arms}
        fcsData={fcs}
      />
    </div>
  </div>
</div>
