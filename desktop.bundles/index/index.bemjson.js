({
    block : 'page',
    title : 'form',
    styles : [{ elem : 'css', url : 'index.min.css' }],
    scripts : [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            block : 'test-form',
            content : [
                {
                    block : 'form',
                    mods : {
                        theme : 'islands',
                        'has-validation' : true,
                        message : 'text'
                    },
                    method : 'GET',
                    content : [
                        {
                            elem : 'content',
                            content : [
                                {
                                    block : 'form-field',
                                    name : 'input',
                                    mods : {
                                        theme : 'islands',
                                        type : 'input',
                                        'has-validation' : true,
                                        required : true,
                                        message : 'popup'
                                    },
                                    js : {
                                        required : {
                                            message : 'Super required!'
                                        }
                                    },
                                    content : [
                                        {
                                            block : 'label',
                                            mods : { theme : 'islands' },
                                            content : 'Input'
                                        },
                                        {
                                            block : 'input',
                                            mods : { theme : 'islands', size : 'l' }
                                        }
                                    ]
                                },
                                {
                                    block : 'form-field',
                                    name : 'select',
                                    mods : {
                                        theme : 'islands',
                                        type : 'select',
                                        'has-validation' : true,
                                        required : true,
                                        message : 'text'
                                    },
                                    content : [
                                        {
                                            block : 'label',
                                            mods : { theme : 'islands' },
                                            content : 'Select'
                                        },
                                        {
                                            block : 'select',
                                            mods : { mode : 'check', theme : 'islands', size : 'l' },
                                            text : 'Программа конференции',
                                            options : [
                                                { text : '1', val : 1 },
                                                { text : '2', val : 2 }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'form-field',
                                    name : 'textarea',
                                    mods : {
                                        theme : 'islands',
                                        type : 'textarea',
                                        'has-validation' : true,
                                        required : true,
                                        message : 'text'
                                    },
                                    content : [
                                        {
                                            block : 'label',
                                            mods : { theme : 'islands' },
                                            content : 'Textarea'
                                        },
                                        {
                                            block : 'textarea',
                                            name : 'BIO',
                                            mods : { theme : 'islands', size : 'l' }
                                        }
                                    ]
                                },
                                {
                                    block : 'form-field',
                                    name : 'checkbox',
                                    mods : {
                                        type : 'checkbox',
                                        theme : 'islands',
                                        'has-validation' : true,
                                        required : true,
                                        message : 'text'
                                    },
                                    content : [
                                        {
                                            block : 'checkbox',
                                            mods : { theme : 'islands', size : 'l' },
                                            text : 'Checkbox 1'
                                        }
                                    ]
                                },
                                {
                                    block : 'form-field',
                                    name : 'checkboxGroup',
                                    mods : {
                                        type : 'checkbox-group',
                                        theme : 'islands'
                                    },
                                    content : [
                                        {
                                            block : 'checkbox-group',
                                            mods : { theme : 'islands', size : 'l' },
                                            options : [
                                                { text : 'Checkbox 1', val : '1' },
                                                { text : 'Checkbox 2', val : '2' },
                                                { text : 'Checkbox 3', val : '3' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'form-field',
                                    name : 'radio',
                                    mods : {
                                        type : 'radio',
                                        theme : 'islands'
                                    },
                                    content : [
                                        {
                                            block : 'radio',
                                            mods : { theme : 'islands', size : 'l' },
                                            text : 'Radio 1'
                                        }
                                    ]
                                },
                                {
                                    block : 'form-field',
                                    name : 'radioGroup',
                                    mods : {
                                        type : 'radio-group',
                                        theme : 'islands'
                                    },
                                    content : [
                                        {
                                            block : 'radio-group',
                                            mods : { theme : 'islands', size : 'l' },
                                            options : [
                                                { text : 'Radio 1', val : '1' },
                                                { text : 'Radio 2', val : '2' },
                                                { text : 'Radio 3', val : '3' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'footer',
                            content : [
                                {
                                    block : 'button',
                                    mods : { theme : 'islands', size : 'l', type : 'submit', view : 'action' },
                                    text : 'Submit'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
