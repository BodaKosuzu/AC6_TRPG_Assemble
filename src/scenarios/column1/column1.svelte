<script lang="ts">
  import TitleBanner from './titleBanner.svelte';
  import CommonData from './commonData.svelte';
  import PartsAndWeapon from './partsAndWeapon.svelte';
  import AcType from './acType.svelte';
  import Output from './output.svelte';
</script>

<div>
  <div>
    <TitleBanner />
  </div>
  <div class="mt-6">
    <CommonData />
  </div>
  <div class="mt-6">
    <PartsAndWeapon />
  </div>
  <div>
    <AcType />
  </div>
  <div>
    <Output />
  </div>
</div>
