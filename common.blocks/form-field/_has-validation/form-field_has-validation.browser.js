/**
 * @module form-field
 */
modules.define('form-field',
['i-bem__dom', 'validation'],
function(provide, BEMDOM, Validation, FormField) {

/**
 * Field block
 */
FormField.decl({ block : this.name, modName : 'has-validation', modVal : true }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                !this.hasMod('message') &&
                console.warn('Message modifier required for form-field_has-validation', this);

                this.on('blur', function() {
                    this._dirty = this._dirty || (this.getVal() !== this._initVal);
                    this.toggleMod('dirty', true, this._dirty);
                    this._dirty && this.validate();
                }.bind(this));

                this._initVal = this.getVal();

                this._status = this.getStatus();
            }
        }
    },
    /**
     * Get form-field validator instance
     *
     * @public
     * @returns {Object}
     */
    getValidator : function() {
        return this._validator || (this._validator = Validation.create());
    },
    /**
     * Get current form-field status
     *
     * @public
     * @returns {String}
     */
    getStatus : function() {
        return this.getValidator().check(this.getVal());
    },
    /**
     * Validate form-field
     *
     * @public
     * @returns {Boolean}
     */
    validate : function() {
        this._status = this.getStatus();
        this._updateStatus();

        return this._status;
    },
    /**
     * Update statuses on form-field and elements: control, message
     *
     * @protected
     */
    _updateStatus : function() {
        this.toggleMod('invalid', true, Boolean(this._status));

        this.getControl().toggleMod('invalid', true, Boolean(this._status));

        this.getMessage().toggleMod('invalid', true, Boolean(this._status));

        if(this.hasMod('message')) {
            this.setMessageVal(this._status);
            this._status && this.hasMod('focused') && this.getMessage().show();
        }
    }
});

provide(FormField);

});
