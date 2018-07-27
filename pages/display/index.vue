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
        <label class="form-label custom-label">Icon input</label>
        <div class="selectgroup selectgroup-pills">
                          <label class="selectgroup-item">
                            <input type="radio" name="icon-input" value="1" class="selectgroup-input" checked="">
                            <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-sun"></i></span>
                          </label>
                          <label class="selectgroup-item">
                            <input type="radio" name="icon-input" value="2" class="selectgroup-input">
                            <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-moon"></i></span>
                          </label>
                          <label class="selectgroup-item">
                            <input type="radio" name="icon-input" value="3" class="selectgroup-input">
                            <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-cloud-rain"></i></span>
                          </label>
                          <label class="selectgroup-item">
                            <input type="radio" name="icon-input" value="4" class="selectgroup-input">
                            <span class="selectgroup-button selectgroup-button-icon"><i class="fe fe-cloud"></i></span>
                          </label>
                        </div>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label"></label>
        <div class="form-group">
            <label class="form-label">Full name<span class="form-required">*</span></label>
            <input type="text" class="form-control" />
        </div>
        <div class="form-group">
            <label class="form-label">Company<span class="form-required">*</span></label>
            <input type="text" class="form-control" />
        </div>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Buttons</label>
        <div class="form-group">
            <a href="#" class="btn btn-primary form-control" role="button">Link</a>
            <button class="btn btn-primary form-control">Button</button>
            <input type="button" class="btn btn-primary form-control" value="Input" />
            <input type="submit" class="btn btn-primary form-control" value="Submit" />
            <input type="reset" class="btn btn-primary form-control" value="Reset" />
        </div>
    </div>
    <div class="form-inline">
        <label class="form-label custom-label">Disabled Buttons</label>
        <div class="form-group">
            <a href="#" class="btn btn-primary disabled form-control">Primary</a>
            <a href="#" class="btn btn-secondary disabled form-control">Secondary</a>
            <a href="#" class="btn btn-success disabled form-control">Success</a>
            <a href="#" class="btn btn-info disabled form-control">Info</a>
            <a href="#" class="btn btn-warning disabled form-control">Warning</a>
            <a href="#" class="btn btn-danger disabled form-control">Danger</a>
        </div>
    </div>

  </div>
</template>

<script>

</script>

<style>
.form-inline {margin:1em;}
.custom-label, .form-label, .form-control {margin-right:1em;}
.form-group .custom-control-inline {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important; 
    margin-right: 1rem;
}
/*invalid feedback错位解决方案 无效 */
@media (min-width: 576px) {
    .was-validated .form-control:invalid ~ .invalid-feedback,
    .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,
    .form-control.is-invalid ~ .invalid-tooltip, .was-validated
    .custom-select:invalid ~ .invalid-feedback,
    .was-validated
    .custom-select:invalid ~ .invalid-tooltip,
    .custom-select.is-invalid ~ .invalid-feedback,
    .custom-select.is-invalid ~ .invalid-tooltip {
        display: inline-block;
        float:right;
    }
    .was-validated .form-check-input:invalid ~ .invalid-feedback,
    .was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,
    .form-check-input.is-invalid ~ .invalid-tooltip {
        display: inline-block;
    }
    .was-validated .custom-file-input:invalid ~ .invalid-feedback,
    .was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,
    .custom-file-input.is-invalid ~ .invalid-tooltip {
        display: inline-block;
    }
}
</style>

