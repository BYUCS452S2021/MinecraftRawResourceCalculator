Vue.component('inventory-slot', {
  props: {},
  template: `
    <div class="inventory-slot">
		<div class="shadow"></div>
		<div class="shadow"></div>
		<div class="fill"></div>
		<div class="shadow"></div>
		<div class="fill"></div>
		<div class="highlight"></div>
		<div class="fill"></div>
		<div class="highlight"></div>
		<div class="highlight"></div>
	</div>
  `
})

Vue.component('inventory-space', {
  props: {},
  template: `
    <div class="inventory-space"></div>
  `
})

Vue.component('border-top-left', {
  props: {},
  template: `
    	<div class="border-top-left">
			<div class="transparent"></div>
			<div class="transparent"></div>
			<div class="black"></div>
			<div class="black"></div>
			<div class="black"></div>

			<div class="transparent"></div>
			<div class="black"></div>
			<div class="highlight"></div>
			<div class="highlight"></div>
			<div class="highlight"></div>

			<div class="black"></div>
			<div class="highlight"></div>
			<div class="highlight"></div>
			<div class="highlight"></div>
			<div class="highlight"></div>

			<div class="black"></div>
			<div class="highlight"></div>
			<div class="highlight"></div>
			<div class="highlight"></div>
			<div class="fill"></div>

			<div class="black"></div>
			<div class="highlight"></div>
			<div class="highlight"></div>
			<div class="fill"></div>
			<div class="fill"></div>	
		</div>
  `
})

Vue.component('border-top', {
  props: {},
  template: `
    	<div class="border-top">
			<div class="black"></div>
			<div class="highlight"></div>
			<div class="fill"></div>	
		</div>
  `
})

Vue.component('border-top-right', {
  props: {},
  template: `
    <div class="border-top-right">
        <div class="black"></div>
        <div class="black"></div>
        <div class="transparent"></div>
        <div class="transparent"></div>
        <div class="transparent"></div>

        <div class="highlight"></div>
        <div class="highlight"></div>
        <div class="black"></div>
        <div class="transparent"></div>
        <div class="transparent"></div>

        <div class="highlight"></div>
        <div class="highlight"></div>
        <div class="fill"></div>
        <div class="black"></div>
        <div class="transparent"></div>

        <div class="fill"></div>
        <div class="fill"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="black"></div>

        <div class="fill"></div>
        <div class="fill"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="black"></div>	
    </div>
  `
})

Vue.component('border-left', {
  props: {},
  template: `
    	<div class="border-left">
			<div class="black"></div>
			<div class="highlight"></div>
			<div class="fill"></div>	
		</div>
  `
})

Vue.component('border-right', {
  props: {},
  template: `
    	<div class="border-right">
			<div class="fill"></div>
			<div class="shadow"></div>
			<div class="black"></div>	
		</div>
  `
})

Vue.component('border-bottom-left', {
  props: {},
  template: `
    <div class="border-bottom-left">
			<div class="black"></div>
			<div class="highlight"></div>
			<div class="highlight"></div>
			<div class="fill"></div>
			<div class="fill"></div>

			<div class="black"></div>
			<div class="highlight"></div>
			<div class="highlight"></div>
			<div class="fill"></div>
			<div class="fill"></div>

			<div class="transparent"></div>
			<div class="black"></div>
			<div class="fill"></div>
			<div class="shadow"></div>
			<div class="shadow"></div>

			<div class="transparent"></div>
			<div class="transparent"></div>
			<div class="black"></div>
			<div class="shadow"></div>
			<div class="shadow"></div>

			<div class="transparent"></div>
			<div class="transparent"></div>
			<div class="transparent"></div>
			<div class="black"></div>
			<div class="black"></div>	
		</div>
     `
})

Vue.component('border-bottom', {
  props: {},
  template: `
    	<div class="border-bottom">
			<div class="fill"></div>
			<div class="shadow"></div>
			<div class="black"></div>	
		</div>
  `
})

Vue.component('border-bottom-right', {
  props: {},
  template: `
    <div class="border-bottom-right">
        <div class="fill"></div>
        <div class="fill"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="black"></div>

        <div class="fill"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="black"></div>

        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="black"></div>

        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="black"></div>
        <div class="transparent"></div>

        <div class="black"></div>
        <div class="black"></div>
        <div class="black"></div>
        <div class="transparent"></div>
        <div class="transparent"></div>	
    </div>
  `
})

var app = new Vue({
    el: '#app',
    data: {
    }
})