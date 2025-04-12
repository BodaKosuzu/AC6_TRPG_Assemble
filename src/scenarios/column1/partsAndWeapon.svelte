<script lang="ts">
  import PartsRow from '../../components/Atoms/partsRow.svelte';
  import WeaponRow from '../../components/Atoms/weaponRow.svelte';
  import { partsList, weaponList, selectedParts, inputData } from '$lib/store.svelte';

  let weaponListArmR = $derived(
    weaponList.weapon.filter(
      (w) => w.weaponType === '1' && !w.isLeftOnly && w.level <= parseInt(inputData.level)
    )
  );

  let weaponListArmL = $derived(
    weaponList.weapon.filter((w) => w.weaponType === '1' && w.level <= parseInt(inputData.level))
  );

  let weaponListShoulderR = $derived.by(() => {
    const isSelectedWeaponHanger = inputData.selectedSkills.includes('3');
    return weaponList.weapon.filter((w) => {
      if (isSelectedWeaponHanger) {
        return !w.isLeftOnly && w.level <= parseInt(inputData.level);
      } else {
        return w.weaponType === '2' && !w.isLeftOnly && w.level <= parseInt(inputData.level);
      }
    });
  });

  let weaponListShoulderL = $derived.by(() => {
    const isSelectedWeaponHanger = inputData.selectedSkills.includes('3');
    return weaponList.weapon.filter((w) => {
      if (isSelectedWeaponHanger) {
        return w.level <= parseInt(inputData.level);
      } else {
        return w.weaponType === '2' && w.level <= parseInt(inputData.level);
      }
    });
  });

  let weaponArmR = $derived(weaponList.weapon.find((w) => w.key === selectedParts.weaponR));
  let weaponArmL = $derived(weaponList.weapon.find((w) => w.key === selectedParts.weaponL));
  let weaponShoulderR = $derived(weaponList.weapon.find((w) => w.key === selectedParts.shoulderR));
  let weaponShoulderL = $derived(weaponList.weapon.find((w) => w.key === selectedParts.shoulderL));

  let weightSum = $derived.by(() => {
    const wRWeight = weaponArmR?.limits?.weight || 0;
    const wLWeight = weaponArmL?.limits?.weight || 0;

    const sRWeight = weaponShoulderR?.limits?.weight || 0;
    const sLWeight = weaponShoulderL?.limits?.weight || 0;

    return wRWeight + wLWeight + sRWeight + sLWeight;
  });

  let enSum = $derived.by(() => {
    const wREnergy = weaponArmR?.limits?.energy || 0;
    const wLEnergy = weaponArmL?.limits?.energy || 0;
    const sREnergy = weaponShoulderR?.limits?.energy || 0;
    const sLEnergy = weaponShoulderL?.limits?.energy || 0;

    return wREnergy + wLEnergy + sREnergy + sLEnergy;
  });

  let priceSum = $derived.by(() => {
    const headPrice = partsList.head[selectedParts.head].price || 0;
    const corePrice = partsList.core[selectedParts.core].price || 0;
    const armsPrice = partsList.arms[selectedParts.arms].price || 0;
    const legsPrice = partsList.legs[selectedParts.legs].price || 0;
    const fcsPrice = partsList.fcs[selectedParts.fcs].price || 0;
    const boosterPrice = partsList.booster[selectedParts.booster].price || 0;

    const wRPrice =
      selectedParts.weaponR === '0'
        ? 0
        : weaponList.weapon.find((w) => w.key === selectedParts.weaponR)?.price || 0;
    const wLPrice =
      selectedParts.weaponL === '0'
        ? 0
        : weaponList.weapon.find((w) => w.key === selectedParts.weaponL)?.price || 0;
    const sRPrice =
      selectedParts.shoulderR === '0'
        ? 0
        : weaponList.weapon.find((w) => w.key === selectedParts.shoulderR)?.price || 0;
    const sLPrice =
      selectedParts.shoulderL === '0'
        ? 0
        : weaponList.weapon.find((w) => w.key === selectedParts.shoulderL)?.price || 0;

    return (
      headPrice +
      corePrice +
      armsPrice +
      legsPrice +
      fcsPrice +
      boosterPrice +
      wRPrice +
      wLPrice +
      sRPrice +
      sLPrice
    );
  });

  let weightLimit = $derived(
    partsList.legs[selectedParts.legs].limitWeight +
      partsList.core[selectedParts.core].limits.weight
  );
  let enLimit = $derived(
    partsList.generator[selectedParts.generator].limits.energy +
      partsList.core[selectedParts.core].limits.energy
  );
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">パーツ/武装</h2>
  <div class="grid p-3">
    <div class="mt-3 flex flex-col gap-1">
      <PartsRow
        partsName="頭部"
        partsSubName="HEAD"
        partsList={partsList.head}
        selected={selectedParts.head}
        onChange={(selected: string) => (selectedParts.head = parseInt(selected))}
        key="head"
        level={inputData.level}
      />
      <PartsRow
        partsName="胴体部"
        partsSubName="CORE"
        partsList={partsList.core}
        selected={selectedParts.core}
        onChange={(selected: string) => (selectedParts.core = parseInt(selected))}
        key="core"
        level={inputData.level}
        isShowAP={true}
      />
      <PartsRow
        partsName="腕部"
        partsSubName="ARMS"
        partsList={partsList.arms}
        selected={selectedParts.arms}
        onChange={(selected: string) => (selectedParts.arms = parseInt(selected))}
        key="arms"
        level={inputData.level}
        isShowAP={true}
      />
      <PartsRow
        partsName="脚部"
        partsSubName="LEGS"
        partsList={partsList.legs}
        selected={selectedParts.legs}
        onChange={(selected: string) => {
          selectedParts.legs = parseInt(selected);

          if (partsList.legs[selectedParts.legs].type === '3') {
            selectedParts.booster = 0;
          }
        }}
        key="legs"
        level={inputData.level}
        isShowAP={true}
        isShowType={true}
      />
      <PartsRow
        partsName="攻撃補助"
        partsSubName="FCS"
        partsList={partsList.fcs}
        selected={selectedParts.fcs}
        onChange={(selected: string) => (selectedParts.fcs = parseInt(selected))}
        key="fcs"
        level={inputData.level}
      />
      <PartsRow
        partsName="動力装置"
        partsSubName="GENERATOR"
        partsList={partsList.generator}
        selected={selectedParts.generator}
        onChange={(selected: string) => (selectedParts.generator = parseInt(selected))}
        key="generator"
        level={inputData.level}
      />
      <PartsRow
        partsName="噴射装置"
        partsSubName="BOOSTER"
        partsList={partsList.booster}
        selected={selectedParts.booster}
        onChange={(selected: string) => (selectedParts.booster = parseInt(selected))}
        key="booster"
        level={inputData.level}
      />
      <WeaponRow
        weaponName="腕武装R"
        weaponSubName="WEAPON R"
        weaponList={weaponListArmR}
        selected={selectedParts.weaponR}
        onChange={(selected: string) => (selectedParts.weaponR = selected)}
        key="weaponR"
        level={inputData.level}
      />
      <WeaponRow
        weaponName="腕武装L"
        weaponSubName="WEAPON L"
        weaponList={weaponListArmL}
        selected={selectedParts.weaponL}
        onChange={(selected: string) => (selectedParts.weaponL = selected)}
        key="weaponL"
        level={inputData.level}
      />
      <WeaponRow
        weaponName="肩武装R"
        weaponSubName="SHOULDER R"
        weaponList={weaponListShoulderR}
        selected={selectedParts.shoulderR}
        onChange={(selected: string) => (selectedParts.shoulderR = selected)}
        key="shoulderR"
        level={inputData.level}
      />
      <WeaponRow
        weaponName="肩武装L"
        weaponSubName="SHOULDER L"
        weaponList={weaponListShoulderL}
        selected={selectedParts.shoulderL}
        onChange={(selected: string) => (selectedParts.shoulderL = selected)}
        key="shoulderL"
        level={inputData.level}
      />
    </div>
    <div class="mt-2 flex items-center justify-end gap-2">
      <div class="text-red-300">
        {#if weightSum > weightLimit}
          <div>※合計重量負荷が限界重量負荷を超えています。</div>
        {/if}
        {#if enSum > enLimit}
          <div>※合計EN負荷が限界EN負荷を超えています。</div>
        {/if}
        {#if priceSum > parseInt(inputData.level)}
          <div>※合計パーツ価格が部隊レベルを超えています。</div>
        {/if}
      </div>
      <div>合計</div>
      <div class="ml-2">
        <div class="text-sm">重量負荷</div>
        <span>
          {weightSum}
        </span>
      </div>
      <div>
        <div class="text-sm">EN負荷</div>
        <span>
          {enSum}
        </span>
      </div>
      <div>
        <div class="text-sm">価格</div>
        <span>★ ×</span>
        <span>
          {priceSum}
        </span>
      </div>
    </div>
  </div>
</div>
