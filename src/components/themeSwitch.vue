<template>
<div v-if="name === 'dark'" class="py-2">
    <div class="my-2 flex items-center justify-center">
        <p class="px-4">
            <slot name="before"></slot>
        </p>
        <label class="relative inline-block h-3 w-12">
            <input 
                id="checkbox" 
                type="checkbox" 
                :checked="(mode === 'dark') ? 'checked' : false" 
                @change="$emit('toggle')"
                >
            <span class="toggler round"></span>
        </label>
        <p class="px-4">
            <slot name="after"></slot>  
        </p> 
    </div>
</div>
<div v-else>
    <div class="my-2 flex items-center justify-center">
        <label class="radioinput mx-3" for="default">
            <input
                id="default"
                class=""
                name="radio"
                type="radio"
                value="default"
                checked
                @change="$emit('default')"
                >
            <span class="checkmark"></span>
            Default
        </label>
        <label class="radioinput mx-3" for="theme-swiss">
            <input
                id="theme-swiss"
                class=""
                name="radio"
                type="radio"
                value="theme-swiss"
                @change="$emit('swiss')"
                >
            <span class="checkmark"></span>
            Swiss
        </label>
        <label class="radioinput mx-3" for="theme-neon">
            <input
                id="theme-neon"
                class=""
                name="radio"
                type="radio"
                value="theme-neon"
                @change="$emit('neon')"
                >
            <span class="checkmark"></span>
            Neon
        </label>
    </div>
</div>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
emits: ['toggle', 'default', 'swiss', 'neon'],
}
</script>

<style scoped>
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggler {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgb(227, 227, 227);
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .toggler::before {
        position: absolute;
        content: ''; 
        width: 21px;
        height: 21px;
        left: -2px;
        bottom: -4.5px;
        background: rgb(255, 0, 55);
    }

    input:checked + .toggler {
        background: rgb(38, 38, 38);
    }

    input:focus + .toggler {
        box-shadow: 0 0 2px #2196f3;
    }

    input:checked + .toggler:before {
        -webkit-transform: translateX(32px);
        -ms-transform: translateX(32px);
        transform: translateX(32px);
    }

    .toggler.round {
        border-radius: 34px;
    }

    .toggler.round:before {
        border-radius: 50%;
    }


.radioinput {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radioinput input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ddd;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.radioinput:hover input ~ .checkmark {
  background-color: #bbb;
}

/* When the radio button is checked, add a blue background */
.radioinput input#default:checked ~ .checkmark {
  background-color: rgb(67, 56, 202);
}

.radioinput input#theme-swiss:checked ~ .checkmark {
  background-color: rgb(185, 28, 28);
}

.radioinput input#theme-neon:checked ~ .checkmark {
  background-color: rgb(36, 52, 3);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radioinput input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radioinput .checkmark:after {
    top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}

</style>