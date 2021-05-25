//INVENTORY SLOT
Vue.component('inventory-slot', {
  props: {},
  template: `
    <div class="inventory-slot">
		<div class="shadow-gray"></div>
		<div class="shadow-gray"></div>
		<div class="inventory-slot-fill"></div>

		<div class="shadow-gray"></div>
		<div class="inventory-slot-fill"></div>
		<div class="highlight-gray"></div>

		<div class="inventory-slot-fill"></div>
		<div class="highlight-gray"></div>
		<div class="highlight-gray"></div>
	</div>
  `
})

Vue.component('inventory-space', {
  props: {},
  template: `
    <div class="inventory-space"></div>
  `
})


//PROJECT INFO
Vue.component('project-info-button', {
  props: {
	  name: {
		type: String,
		required: true
	  },
	  author: {
		type: String,
		required: true
	  },
	  date: {
		type: String,
		required: true
	  }
  },
  template: `
    <div class="project-list">
		<span class="button">
			<button-top-left></button-top-left>
			<button-top></button-top>
			<button-top-right></button-top-right>
			<button-left></button-left>
			
			<div class="project-info">
				<div>
					<div class="project-info-name-header">
						Name:
					</div>
					<div class="project-info-name-body">
						{{name}}
					</div>
				</div>
				<div>
					<div class="project-info-author-header">
						Author:
					</div>
					<div class="project-info-author-body">
						{{author}}
					</div>
				</div>
				<div>
					<div class="project-info-date-header">
						Date:
					</div>
					<div class="project-info-date-body">
						{{date}}
					</div>
				</div>

			</div>
									
			<button-right></button-right>
			<button-bottom-left></button-bottom-left>
			<button-bottom></button-bottom>
			<button-bottom-right></button-bottom-right>
		</span>
	</div>
  `,
  data() {
	  return {
	  }
  }
})

Vue.component('project-info-space', {
  props: {},
  template: `
    <div class="project-info-space"></div>
  `
})

Vue.component('project-info-full-space', {
  props: {},
  template: `
    <div class="project-info-full-space"></div>
  `
})


//BUTTON
Vue.component('text-button', {
  props: {
	  text: {
		type: String,
	  },
	  color: {
		  type: String,
		  default: "gray"
	  }
  },
  template: `
	<span class="button" @mousedown="mousePressed=true" @mouseup="mousePressed=false" @mouseleave="mousePressed=false">
		<button-top-left :color="color" :pressed="mousePressed"></button-top-left>
		<button-top :color="color" :pressed="mousePressed"></button-top>
		<button-top-right :color="color" :pressed="mousePressed"></button-top-right>
		<button-left :color="color" :pressed="mousePressed"></button-left>
		
		<div :class="[buttonText, buttonTextColor, fillColor]">
			{{text}}
		</div>
								
		<button-right :color="color" :pressed="mousePressed"></button-right>
		<button-bottom-left :color="color" :pressed="mousePressed"></button-bottom-left>
		<button-bottom :color="color" :pressed="mousePressed"></button-bottom>
		<button-bottom-right :color="color" :pressed="mousePressed"></button-bottom-right>
	</span>
  `,
  data() {
	  return {
		  buttonText: "button-text",
		  buttonTextColor: `button-text-${this.color}`,
		  fillColor: `fill-${this.color}`,
		  mousePressed: false
	  }
  }
})

Vue.component('button-top-left', {
  props: {
	  color: {
		  type: String,
		  default: "gray"
	  },
	  pressed: {
		  type: Boolean,
		  default: false
	  }
  },
  template: `
    	<div class="button-corner">
			<div class="transparent"></div>
			<div class="transparent"></div>
			<div class="black"></div>	

			<div class="transparent"></div>
			<div class="black"></div>
			<div :class="[pressed ? shadowColor : highlightColor]"></div>	

			<div class="black"></div>
			<div :class="[pressed ? shadowColor : highlightColor]"></div>
			<div :class="[fillColor]"></div>	
		</div>
  `,
  data() {
	  return {
		highlightColor: `highlight-${this.color}`,
		fillColor: `fill-${this.color}`,
		shadowColor: `shadow-${this.color}`
	  }
  }
})

Vue.component('button-top', {
  props: {
	  color: {
		  type: String,
		  default: "gray"
	  },
	  pressed: {
		  type: Boolean,
		  default: false
	  }
  },
  template: `
    	<div class="button-horizontal-border">
			<div class="black"></div>
			<div :class="[pressed ? shadowColor : highlightColor]"></div>
			<div :class="[fillColor]"></div>	
		</div>
  `,
  data() {
	  return {
		highlightColor: `highlight-${this.color}`,
		fillColor: `fill-${this.color}`,
		shadowColor: `shadow-${this.color}`
	  }
  }
})

Vue.component('button-top-right', {
   props: {
	  color: {
		  type: String,
		  default: "gray"
	  },
	  pressed: {
		  type: Boolean,
		  default: false
	  }
   },
   template: `
    	<div class="button-corner">
			<div class="black"></div>
			<div class="transparent"></div>
			<div class="transparent"></div>	

			<div :class="[pressed ? shadowColor : highlightColor]"></div>
			<div class="black"></div>
			<div class="transparent"></div>	

			<div :class="[fillColor]"></div>
			<div :class="[pressed ? highlightColor : shadowColor]"></div>
			<div class="black"></div>	
		</div>
  `,
  data() {
	  return {
		highlightColor: `highlight-${this.color}`,
		fillColor: `fill-${this.color}`,
		shadowColor: `shadow-${this.color}`
	  }
  }
})

Vue.component('button-left', {
   props: {
	  color: {
		  type: String,
		  default: "gray"
	  },
	  pressed: {
		  type: Boolean,
		  default: false
	  }
   },
  template: `
    	<div class="button-vertical-border">
			<div class="black"></div>
			<div :class="[pressed ? shadowColor : highlightColor]"></div>
			<div :class="[fillColor]"></div>	
		</div>
  `,
  data() {
	  return {
		highlightColor: `highlight-${this.color}`,
		fillColor: `fill-${this.color}`,
		shadowColor: `shadow-${this.color}`
	  }
  }
})

Vue.component('button-right', {
   props: {
	  color: {
		  type: String,
		  default: "gray"
	  },
	  pressed: {
		  type: Boolean,
		  default: false
	  }
   },
  template: `
    	<div class="button-vertical-border">
			<div :class="[fillColor]"></div>
			<div :class="[pressed ? highlightColor : shadowColor]"></div>
			<div class="black"></div>	
		</div>
  `,
  data() {
	  return {
		highlightColor: `highlight-${this.color}`,
		fillColor: `fill-${this.color}`,
		shadowColor: `shadow-${this.color}`
	  }
  }
})

Vue.component('button-bottom-left', {
   props: {
	  color: {
		  type: String,
		  default: "gray"
	  },
	  pressed: {
		  type: Boolean,
		  default: false
	  }
   },
  template: `
    	<div class="button-corner">
			<div class="black"></div>
			<div :class="[pressed ? shadowColor : highlightColor]"></div>
			<div :class="[fillColor]"></div>	

			<div class="transparent"></div>
			<div class="black"></div>
			<div :class="[pressed ? highlightColor : shadowColor]"></div>	

			<div class="transparent"></div>
			<div class="transparent"></div>
			<div class="black"></div>	
		</div>
  `,
  data() {
	  return {
		highlightColor: `highlight-${this.color}`,
		fillColor: `fill-${this.color}`,
		shadowColor: `shadow-${this.color}`
	  }
  }
})

Vue.component('button-bottom', {
   props: {
	  color: {
		  type: String,
		  default: "gray"
	  },
	  pressed: {
		  type: Boolean,
		  default: false
	  }
   },
  template: `
    	<div class="button-horizontal-border">
			<div :class="[fillColor]"></div>
			<div :class="[pressed ? highlightColor : shadowColor]"></div>
			<div class="black"></div>	
		</div>
  `,
  data() {
	  return {
		highlightColor: `highlight-${this.color}`,
		fillColor: `fill-${this.color}`,
		shadowColor: `shadow-${this.color}`
	  }
  }
})

Vue.component('button-bottom-right', {
   props: {
	  color: {
		  type: String,
		  default: "gray"
	  },
	  pressed: {
		  type: Boolean,
		  default: false
	  }
   },
  template: `
    	<div class="button-corner">
			<div :class="[fillColor]"></div>
			<div :class="[pressed ? highlightColor : shadowColor]"></div>
			<div class="black"></div>	

			<div :class="[pressed ? highlightColor : shadowColor]"></div>
			<div class="black"></div>
			<div class="transparent"></div>	

			<div class="black"></div>
			<div class="transparent"></div>
			<div class="transparent"></div>	
		</div>
  `,
  data() {
	  return {
		highlightColor: `highlight-${this.color}`,
		fillColor: `fill-${this.color}`,
		shadowColor: `shadow-${this.color}`
	  }
  }
})

Vue.component('button-space-vertical', {
  props: {},
  template: `
    <div class="button-space-vertical"></div>
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
			<div class="highlight-gray"></div>
			<div class="highlight-gray"></div>
			<div class="highlight-gray"></div>

			<div class="black"></div>
			<div class="highlight-gray"></div>
			<div class="highlight-gray"></div>
			<div class="highlight-gray"></div>
			<div class="highlight-gray"></div>

			<div class="black"></div>
			<div class="highlight-gray"></div>
			<div class="highlight-gray"></div>
			<div class="highlight-gray"></div>
			<div class="fill-gray"></div>

			<div class="black"></div>
			<div class="highlight-gray"></div>
			<div class="highlight-gray"></div>
			<div class="fill-gray"></div>
			<div class="fill-gray"></div>	
		</div>
  `
})

Vue.component('border-top', {
  props: {},
  template: `
    	<div class="border-top">
			<div class="black"></div>
			<div class="highlight-gray"></div>
			<div class="fill-gray"></div>	
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

        <div class="highlight-gray"></div>
        <div class="highlight-gray"></div>
        <div class="black"></div>
        <div class="transparent"></div>
        <div class="transparent"></div>

        <div class="highlight-gray"></div>
        <div class="highlight-gray"></div>
        <div class="fill-gray"></div>
        <div class="black"></div>
        <div class="transparent"></div>

        <div class="fill-gray"></div>
        <div class="fill-gray"></div>
        <div class="shadow-gray"></div>
        <div class="shadow-gray"></div>
        <div class="black"></div>

        <div class="fill-gray"></div>
        <div class="fill-gray"></div>
        <div class="shadow-gray"></div>
        <div class="shadow-gray"></div>
        <div class="black"></div>	
    </div>
  `
})

Vue.component('border-left', {
  props: {},
  template: `
    	<div class="border-left">
			<div class="black"></div>
			<div class="highlight-gray"></div>
			<div class="fill-gray"></div>	
		</div>
  `
})

Vue.component('border-right', {
  props: {},
  template: `
    	<div class="border-right">
			<div class="fill-gray"></div>
			<div class="shadow-gray"></div>
			<div class="black"></div>	
		</div>
  `
})

Vue.component('border-bottom-left', {
  props: {},
  template: `
    <div class="border-bottom-left">
			<div class="black"></div>
			<div class="highlight-gray"></div>
			<div class="highlight-gray"></div>
			<div class="fill-gray"></div>
			<div class="fill-gray"></div>

			<div class="black"></div>
			<div class="highlight-gray"></div>
			<div class="highlight-gray"></div>
			<div class="fill-gray"></div>
			<div class="fill-gray"></div>

			<div class="transparent"></div>
			<div class="black"></div>
			<div class="fill-gray"></div>
			<div class="shadow-gray"></div>
			<div class="shadow-gray"></div>

			<div class="transparent"></div>
			<div class="transparent"></div>
			<div class="black"></div>
			<div class="shadow-gray"></div>
			<div class="shadow-gray"></div>

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
			<div class="fill-gray"></div>
			<div class="shadow-gray"></div>
			<div class="black"></div>	
		</div>
  `
})

Vue.component('border-bottom-right', {
  props: {},
  template: `
    <div class="border-bottom-right">
        <div class="fill-gray"></div>
        <div class="fill-gray"></div>
        <div class="shadow-gray"></div>
        <div class="shadow-gray"></div>
        <div class="black"></div>

        <div class="fill-gray"></div>
        <div class="shadow-gray"></div>
        <div class="shadow-gray"></div>
        <div class="shadow-gray"></div>
        <div class="black"></div>

        <div class="shadow-gray"></div>
        <div class="shadow-gray"></div>
        <div class="shadow-gray"></div>
        <div class="shadow-gray"></div>
        <div class="black"></div>

        <div class="shadow-gray"></div>
        <div class="shadow-gray"></div>
        <div class="shadow-gray"></div>
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

function newProject() {
	changeView();
}

function editProject() {
	changeView();
}

function saveProject() {
	changeView();
}

function cancelSave() {
	changeView();
}

function changeView() {
	var projectView = document.getElementById("project-view");
	var projectEditor = document.getElementById("project-editor");

	projectView.classList.toggle("hidden");
	projectEditor.classList.toggle("hidden");
}