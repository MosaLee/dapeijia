<template>
  <div class="container">
    <div class="form-inline">  <!--form-group改为form-inline-->
        <label class="form-label custom-label">Color Checkbox</label>
        <div class="row gutters-xs">
            <div class="col-auto">
            <label class="colorinput">
                <input name="color" type="checkbox" value="azure" class="colorinput-input" />
                <span class="colorinput-color bg-azure"></span>
            </label>
            </div>
            <div class="col-auto">
            <label class="colorinput">
                <input name="color" type="checkbox" value="indigo" class="colorinput-input"  checked/>
                <span class="colorinput-color bg-indigo"></span>
            </label>
            </div>
            <div class="col-auto">
            <label class="colorinput">
                <input name="color" type="checkbox" value="purple" class="colorinput-input" />
                <span class="colorinput-color bg-purple"></span>
            </label>
            </div>
            <div class="col-auto">
            <label class="colorinput">
                <input name="color" type="checkbox" value="pink" class="colorinput-input" />
                <span class="colorinput-color bg-pink"></span>
            </label>
            </div>
            <div class="col-auto">
            <label class="colorinput">
                <input name="color" type="checkbox" value="red" class="colorinput-input" />
                <span class="colorinput-color bg-red"></span>
            </label>
            </div>
            <div class="col-auto">
            <label class="colorinput">
                <input name="color" type="checkbox" value="orange" class="colorinput-input" />
                <span class="colorinput-color bg-orange"></span>
            </label>
            </div>
            <div class="col-auto">
            <label class="colorinput">
                <input name="color" type="checkbox" value="yellow" class="colorinput-input" />
                <span class="colorinput-color bg-yellow"></span>
            </label>
            </div>
            <div class="col-auto">
            <label class="colorinput">
                <input name="color" type="checkbox" value="lime" class="colorinput-input" />
                <span class="colorinput-color bg-lime"></span>
            </label>
            </div>
            <div class="col-auto">
            <label class="colorinput">
                <input name="color" type="checkbox" value="green" class="colorinput-input" />
                <span class="colorinput-color bg-green"></span>
            </label>
            </div>
            <div class="col-auto">
            <label class="colorinput">
                <input name="color" type="checkbox" value="teal" class="colorinput-input" />
                <span class="colorinput-color bg-teal"></span>
            </label>
            </div>
        </div>   
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Valid State 1</label>
        <input type="text" class="form-control is-valid" name="example-text-input-valid" placeholder="Valid State..">
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Valid State 2</label>
        <input type="text" class="form-control mt-3 state-valid" value="Valid state">
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Invalid State 1</label>
        <input type="text" class="form-control is-invalid" name="example-text-input-invalid"
						   placeholder="Invalid State..">
                        <div class="invalid-feedback">Invalid feedback</div>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Invalid State 2</label>
        <input type="text" class="form-control mt-3 state-invalid" value="Invalid state">
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Toggle switches</label>
        <div class="custom-switches-stacked">
            <label class="custom-switch">
                <input type="radio" name="option" value="1" class="custom-switch-input" checked>
                <span class="custom-switch-indicator"></span>
                <span class="custom-switch-description">Option 1</span>
            </label>
            <label class="custom-switch">
                <input type="radio" name="option" value="2" class="custom-switch-input">
                 <span class="custom-switch-indicator"></span>
                 <span class="custom-switch-description">Option 2</span>
            </label>
            <label class="custom-switch">
                <input type="radio" name="option" value="3" class="custom-switch-input">
                <span class="custom-switch-indicator"></span>
                <span class="custom-switch-description">Option 3</span>
            </label>
        </div>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Toggle switch single</label>
        <label class="custom-switch">
                          <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input">
                          <span class="custom-switch-indicator"></span>
                          <span class="custom-switch-description">I agree with terms and conditions</span>
                        </label>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Radios</label>
        <div class="custom-controls-stacked">
                          <label class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" name="example-radios" value="option1" checked>
                            <div class="custom-control-label">Option 1</div>
                          </label>
                          <label class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" name="example-radios" value="option2">
                            <div class="custom-control-label">Option 2</div>
                          </label>
                          <label class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" name="example-radios" value="option3" disabled>
                            <div class="custom-control-label">Option Disabled</div>
                          </label>
                          <label class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" name="example-radios2" value="option4" disabled checked>
                            <div class="custom-control-label">Option Disabled Checked</div>
                          </label>
                        </div>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Inline Radios</label>
        <div class="custom-controls-stacked">
                          <label class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" name="example-inline-radios" value="option1" checked>
                            <span class="custom-control-label">Option 1</span>
                          </label>
                          <label class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" name="example-inline-radios" value="option2">
                            <span class="custom-control-label">Option 2</span>
                          </label>
                          <label class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" name="example-inline-radios" value="option3">
                            <span class="custom-control-label">Option 3</span>
                          </label>
                        </div>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Checkboxes</label>
        <div class="custom-controls-stacked">
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked>
                            <span class="custom-control-label">Option 1</span>
                          </label>
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" name="example-checkbox2" value="option2">
                            <span class="custom-control-label">Option 2</span>
                          </label>
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" name="example-checkbox3" value="option3" disabled>
                            <span class="custom-control-label">Option Disabled</span>
                          </label>
                          <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" name="example-checkbox4" value="option4" checked disabled>
                            <span class="custom-control-label">Option Disabled Checked</span>
                          </label>
                        </div>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Inline Checkboxes</label>
        <div>
                          <label class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" class="custom-control-input" name="example-inline-checkbox1" value="option1" checked>
                            <span class="custom-control-label">Option 1</span>
                          </label>
                          <label class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" class="custom-control-input" name="example-inline-checkbox2" value="option2">
                            <span class="custom-control-label">Option 2</span>
                          </label>
                          <label class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" class="custom-control-input" name="example-inline-checkbox3" value="option3">
                            <span class="custom-control-label">Option 3</span>
                          </label>
                        </div>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Icons input</label>
        <div class="selectgroup">
                          <label class="selectgroup-item">
                            <input type="radio" name="transportation" value="2" class="selectgroup-input">
                            <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-smartphone"></i></span>
                          </label>
                          <label class="selectgroup-item">
                            <input type="radio" name="transportation" value="1" class="selectgroup-input" checked="">
                            <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-tablet"></i></span>
                          </label>
                          <label class="selectgroup-item">
                            <input type="radio" name="transportation" value="6" class="selectgroup-input">
                            <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-monitor"></i></span>
                          </label>
                          <label class="selectgroup-item">
                            <input type="radio" name="transportation" value="6" class="selectgroup-input">
                            <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-x"></i></span>
                          </label>
                        </div>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Color Checkbox</label>
        <div class="row gutters-xs">

        </div>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Color Checkbox</label>
        <div class="row gutters-xs">

        </div>
    </div>

  </div>
</template>

<script>

</script>

<style>
.form-inline {margin:1em;}
.custom-label {margin-right:1em;}
.custom-control-inline {
    display: -ms-inline-flexbox;
    display: inline-flex; 
    margin-right: 1rem;
}
</style>

