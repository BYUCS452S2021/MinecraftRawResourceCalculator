//INVENTORY SLOT
Vue.component('inventory-slot', {
  props: {},
  template: `
    <div class="inventory-slot">
		<div class="shadow"></div>
		<div class="shadow"></div>
		<div class="inventory-slot-fill"></div>

		<div class="shadow"></div>
		<div class="inventory-slot-fill"></div>
		<div class="highlight"></div>

		<div class="inventory-slot-fill"></div>
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


//BUTTON
Vue.component('button-top-left', {
  props: {},
  template: `
    	<div class="button-corner">
			<div class="transparent"></div>
			<div class="transparent"></div>
			<div class="black"></div>	

			<div class="transparent"></div>
			<div class="black"></div>
			<div class="highlight"></div>	

			<div class="black"></div>
			<div class="highlight"></div>
			<div class="fill"></div>	
		</div>
  `
})

Vue.component('button-top', {
  props: {},
  template: `
    	<div class="button-horizontal-border">
			<div class="black"></div>
			<div class="highlight"></div>
			<div class="fill"></div>	
		</div>
  `
})

Vue.component('button-top-right', {
  props: {},
  template: `
    	<div class="button-corner">
			<div class="black"></div>
			<div class="transparent"></div>
			<div class="transparent"></div>	

			<div class="highlight"></div>
			<div class="black"></div>
			<div class="transparent"></div>	

			<div class="fill"></div>
			<div class="shadow"></div>
			<div class="black"></div>	
		</div>
  `
})

Vue.component('button-left', {
  props: {},
  template: `
    	<div class="button-vertical-border">
			<div class="black"></div>
			<div class="highlight"></div>
			<div class="fill"></div>	
		</div>
  `
})

Vue.component('button-text', {
	props: {},
	template: `
		<div class="button-text">
			Hello World.
		</div>
	`
})

Vue.component('button-right', {
  props: {},
  template: `
    	<div class="button-vertical-border">
			<div class="fill"></div>
			<div class="shadow"></div>
			<div class="black"></div>	
		</div>
  `
})

Vue.component('button-bottom-left', {
  props: {},
  template: `
    	<div class="button-corner">
			<div class="black"></div>
			<div class="highlight"></div>
			<div class="fill"></div>	

			<div class="transparent"></div>
			<div class="black"></div>
			<div class="shadow"></div>	

			<div class="transparent"></div>
			<div class="transparent"></div>
			<div class="black"></div>	
		</div>
  `
})

Vue.component('button-bottom', {
  props: {},
  template: `
    	<div class="button-horizontal-border">
			<div class="fill"></div>
			<div class="shadow"></div>
			<div class="black"></div>	
		</div>
  `
})

Vue.component('button-bottom-right', {
  props: {},
  template: `
    	<div class="button-corner">
			<div class="fill"></div>
			<div class="shadow"></div>
			<div class="black"></div>	

			<div class="shadow"></div>
			<div class="black"></div>
			<div class="transparent"></div>	

			<div class="black"></div>
			<div class="transparent"></div>
			<div class="transparent"></div>	
		</div>
  `
})


//WINDOW BORDER
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


//APP
var app = new Vue({
    el: '#app',
    data: {
    }
})