<script lang="ts">
  import InputText from '../../components/Atoms/inputText.svelte';
  import { inputData } from '$lib/store.svelte';
</script>

<div class="flex">
  <div>
    <InputText
      label="コードネーム"
      input={inputData.codeName}
      oninput={(value: string) => {
        inputData.codeName = value;
      }}
    />
  </div>
  <div class="ml-6">
    <InputText
      label="合計COAM"
      input={inputData.comaSum}
      oninput={(value: string) => {
        inputData.comaSum = value;
        inputData.level = Math.round(parseInt(inputData.comaSum) / 20000 + 10).toString();
      }}
    />
  </div>
  <div class="ml-6">
    <InputText
      label="部隊レベル"
      input={inputData.level}
      oninput={(value: string) => {
        inputData.level = value;
      }}
    />
  </div>
</div>
