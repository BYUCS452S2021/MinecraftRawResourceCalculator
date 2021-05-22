Vue.component('inventory-slot', {
  props: {},
  template: `
    <div class="inventory-slot">
		<div class="lowlight"></div>
		<div class="lowlight"></div>
		<div class="fill"></div>
		<div class="lowlight"></div>
		<div class="fill"></div>
		<div class="highlight"></div>
		<div class="fill"></div>
		<div class="highlight"></div>
		<div class="highlight"></div>
	</div>
  `
})

var app = new Vue({
    el: '#app',
    data: {
    }
})