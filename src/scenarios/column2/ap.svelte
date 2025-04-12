<script lang="ts">
  import { partsList, selectedParts } from '$lib/store.svelte';

  let coreApPoint = $derived(partsList.core[selectedParts.core].ap.point);
  let coreApLine = $derived(partsList.core[selectedParts.core].ap.line);
  let armsApPoint = $derived(partsList.arms[selectedParts.arms].ap.point);
  let armsApLine = $derived(partsList.core[selectedParts.core].ap.line);
  let legsApPoint = $derived(partsList.legs[selectedParts.arms].ap.point);
  let legsApLine = $derived(partsList.legs[selectedParts.core].ap.line);
</script>

<div>
  <h2 class="bg-gray-500 p-1 text-lg">AP</h2>
  <div class="p-3">
    <table class="w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th scope="col" class="text-center">部位</th>
          <th scope="col" class="text-center">部位決定</th>
          <th scope="col" class="text-center">損害概要</th>
          <th scope="col" class="text-center">AP</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="text-center">CORE</td>
          <td class="text-center">1 ~ 2</td>
          <td class="p-1 text-center">
            <ul>
              <li>1Line全損時：スタッガー状態</li>
              <li>部位全損：リタイア状態</li>
            </ul>
          </td>
          <td class="text-center">
            <span>
              {coreApPoint}
            </span>
            <span>×</span>
            <span>
              {coreApLine}
            </span>
            <span>line</span>
          </td>
        </tr>
        <tr>
          <td class="text-center">ARM(R)</td>
          <td class="text-center">3</td>
          <td class="p-1 text-center">
            <ul>
              <li>1Line全損時：スタッガー状態</li>
              <li>部位全損：腕武装R、肩武装Rが使用禁止</li>
            </ul>
          </td>
          <td class="text-center">
            <span>
              {armsApPoint}
            </span>
            <span>×</span>
            <span>
              {armsApLine}
            </span>
            <span>line</span>
          </td>
        </tr>
        <tr>
          <td class="text-center">ARM(L)</td>
          <td class="text-center">4</td>
          <td class="p-1 text-center">
            <ul>
              <li>1Line全損時：スタッガー状態</li>
              <li>部位全損：腕武装L、肩武装Lが使用禁止</li>
            </ul>
          </td>
          <td class="text-center">
            <span>
              {armsApPoint}
            </span>
            <span>×</span>
            <span>
              {armsApLine}
            </span>
            <span>line</span>
          </td>
        </tr>
        <tr>
          <td class="text-center">LEGS</td>
          <td class="text-center">5 ~ 6</td>
          <td class="p-1 text-center">
            <ul>
              <li>1Line全損時：スタッガー状態</li>
              <li>部位全損：回避、移動が禁止</li>
            </ul>
          </td>
          <td class="text-center">
            <span>
              {legsApPoint}
            </span>
            <span>×</span>
            <span>
              {legsApLine}
            </span>
            <span>line</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
