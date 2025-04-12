<script lang="ts">
  import { selectedParts, inputData } from '$lib/store.svelte';

  const clickOutput = () => {
    const data = {
      selectedParts,
      inputData,
    };
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });

    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = 'ac6Trpg.json';
    link.click();
    link.remove();
  };

  const clickInput = () => {
    const fileinput = document.getElementById('fileUpload');
    fileinput?.click();
  };

  const uploadFile = (e: Event) => {
    const files = (<HTMLInputElement>e.target).files || [];

    const reader = new FileReader();
    reader.onload = (event: any) => {
      const parseData = JSON.parse(event.target?.result);

      inputData.codeName = parseData.inputData.codeName;
      inputData.comaSum = parseData.inputData.comaSum;
      inputData.level = parseData.inputData.level;
      inputData.selectedSkills = parseData.inputData.selectedSkills;

      selectedParts.head = parseData.selectedParts.head;
      selectedParts.core = parseData.selectedParts.core;
      selectedParts.arms = parseData.selectedParts.arms;
      selectedParts.legs = parseData.selectedParts.legs;
      selectedParts.fcs = parseData.selectedParts.fcs;
      selectedParts.generator = parseData.selectedParts.generator;
      selectedParts.booster = parseData.selectedParts.booster;
      selectedParts.weaponR = parseData.selectedParts.weaponR;
      selectedParts.weaponL = parseData.selectedParts.weaponL;
      selectedParts.shoulderR = parseData.selectedParts.shoulderR;
      selectedParts.shoulderL = parseData.selectedParts.shoulderL;
      selectedParts.osType = parseData.selectedParts.osType;
    };

    reader.readAsText(files[0]);
  };
</script>

<div class="p-3">
  <button
    class="cursor-pointer rounded-sm bg-gray-500 px-5 py-1 text-white hover:opacity-80"
    onclick={clickOutput}
  >
    設定ダウンロード
  </button>
  <button
    class="ml-6 cursor-pointer rounded-sm bg-gray-500 px-5 py-1 text-white hover:opacity-80"
    onclick={clickInput}
  >
    設定アップロード
  </button>
  <input type="file" id="fileUpload" style="display: none;" onchange={uploadFile} />
</div>
