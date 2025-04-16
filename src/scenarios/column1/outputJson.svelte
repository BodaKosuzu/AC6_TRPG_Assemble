<script lang="ts">
  import { selectedParts, inputData, skillData, partsList, weaponList } from '$lib/store.svelte';

  const clickExport = () => {
    console.log(partsList.head[selectedParts.head]);
    const exportObject = {
      kind: 'character',
      data: {
        params: [
          {
            label: '対システム障害',
            value: partsList.head[selectedParts.head].againstSystemFailure.toString(),
          },
          {
            label: 'サーチ',
            value: partsList.head[selectedParts.head].search.toString(),
          },
          {
            label: 'ハッキング',
            value: partsList.head[selectedParts.head].hacking.toString(),
          },
          {
            label: 'マニューバ',
            value: (
              partsList.legs[selectedParts.legs].maneuver +
              partsList.booster[selectedParts.booster].maneuver
            ).toString(),
          },
        ],
        status: [
          ...getApList(),
          ...getWeaponBullet(),
          {
            label: 'リペアキット残数',
            value: 5,
            max: 5,
          },
          {
            label: '弾数補充残数',
            value: 5,
            max: 5,
          },
          {
            label: '精神負荷残数',
            value: 10,
            max: 10,
          },
          {
            label: '支援物資補給残数',
            value: 1,
            max: 1,
          },
        ],
        name: inputData.codeName,
        initiative: 0,
        memo:
          '合計COMA:' +
          inputData.comaSum +
          '\n' +
          '部隊レベル:' +
          inputData.level +
          '\n' +
          '保有スキル:' +
          getSkillText(),
        externalUrl: '',
        commands:
          '2D+{対システム障害} <対システム障害> \n' +
          '2D+{サーチ} <サーチ>\n' +
          '2D+{ハッキング} <ハッキング>\n' +
          '2D+{マニューバ} <マニューバ>',
      },
    };

    console.log(exportObject);

    navigator.clipboard.writeText(JSON.stringify(exportObject));
  };

  const getApList = () => {
    const apList = [];

    for (let i = 0; i < partsList.core[selectedParts.core].ap.line; i++) {
      apList.push({
        label: 'CORE AP' + (i + 1),
        value: partsList.core[selectedParts.core].ap.point,
        max: partsList.core[selectedParts.core].ap.point,
      });
    }

    for (let i = 0; i < partsList.arms[selectedParts.arms].ap.line; i++) {
      apList.push({
        label: 'ARM(R) AP' + (i + 1),
        value: partsList.core[selectedParts.core].ap.point,
        max: partsList.core[selectedParts.core].ap.point,
      });
    }

    for (let i = 0; i < partsList.arms[selectedParts.arms].ap.line; i++) {
      apList.push({
        label: 'ARM(L) AP' + (i + 1),
        value: partsList.core[selectedParts.core].ap.point,
        max: partsList.core[selectedParts.core].ap.point,
      });
    }

    for (let i = 0; i < partsList.legs[selectedParts.legs].ap.line; i++) {
      apList.push({
        label: 'LEGS AP' + (i + 1),
        value: partsList.core[selectedParts.core].ap.point,
        max: partsList.core[selectedParts.core].ap.point,
      });
    }

    return apList;
  };

  const getWeaponBullet = () => {
    const weaponBullet = [];

    const weaponBulletArmR = weaponList.weapon.find((w) => w.key === selectedParts.weaponR)
      ?.bullet || { line: 0, number: 0 };
    const weaponBulletArmL = weaponList.weapon.find((w) => w.key === selectedParts.weaponL)
      ?.bullet || { line: 0, number: 0 };
    const weaponBulletShoulderR = weaponList.weapon.find((w) => w.key === selectedParts.shoulderR)
      ?.bullet || { line: 0, number: 0 };
    const weaponBulletShoulderL = weaponList.weapon.find((w) => w.key === selectedParts.shoulderL)
      ?.bullet || { line: 0, number: 0 };

    for (let i = 0; i < weaponBulletArmR?.line || 0; i++) {
      weaponBullet.push({
        label: 'WEAPON R BULLET' + (i + 1),
        value: weaponBulletArmR?.number,
        max: weaponBulletArmR?.number,
      });
    }

    for (let i = 0; i < weaponBulletArmL?.line || 0; i++) {
      weaponBullet.push({
        label: 'WEAPON L BULLET' + (i + 1),
        value: weaponBulletArmR?.number,
        max: weaponBulletArmR?.number,
      });
    }

    for (let i = 0; i < weaponBulletShoulderR?.line || 0; i++) {
      weaponBullet.push({
        label: 'SHOULDER R BULLET' + (i + 1),
        value: weaponBulletShoulderR?.number,
        max: weaponBulletShoulderR?.number,
      });
    }

    for (let i = 0; i < weaponBulletShoulderL?.line || 0; i++) {
      weaponBullet.push({
        label: 'SHOULDER L BULLET' + (i + 1),
        value: weaponBulletShoulderL?.number,
        max: weaponBulletShoulderL?.number,
      });
    }

    return weaponBullet;
  };

  const getSkillText = () => {
    let skillText = '';

    inputData.selectedSkills.forEach((skill, index) => {
      if (index !== 0) {
        skillText += ', ';
      }

      skillText += skillData.find((s) => s.key === skill)?.name;
    });

    return skillText;
  };
</script>

<div class="p-3">
  <button
    class="cursor-pointer rounded-sm bg-gray-500 px-5 py-1 text-white hover:opacity-80"
    onclick={clickExport}
  >
    ココフォリアエクスポート
  </button>
</div>
