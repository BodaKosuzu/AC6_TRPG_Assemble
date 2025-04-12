<script lang="ts">
  import LoadingLimit from './loadingLimit.svelte';
  import ActionRoll from './actionRoll.svelte';
  import PowerCorrection from './powerCorrection.svelte';
  import Mobility from './mobility.svelte';
  import Defense from './defense.svelte';
  import Ap from './ap.svelte';
  import Weapon from './wepon.svelte';
</script>

<div>
  <div>
    <LoadingLimit />
  </div>
  <div>
    <ActionRoll />
  </div>
  <div>
    <PowerCorrection />
  </div>
  <div>
    <Mobility />
  </div>
  <div>
    <Defense />
  </div>
  <div>
    <Ap />
  </div>
  <div>
    <Weapon />
  </div>
</div>
