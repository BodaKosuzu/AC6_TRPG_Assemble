<script lang="ts">
  const { label, input, oninput } = $props();
</script>

<div>
  <div class="text-lg">
    {label}
  </div>
  <input
    type="text"
    class="mt-2 rounded border border-gray-400 bg-gray-500 p-1 text-base placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
    value={input}
    oninput={(e) => {
      oninput(e.currentTarget.value);
    }}
  />
</div>
