/**
 * userManager Application InviteUserForm class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.userManager.application.views
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/licensing
 */
KebabOS.applications.userManager.application.views.InviteUserForm = Ext.extend(Ext.form.FormPanel, {

    // Application bootstrap
    bootstrap: null,
    //POST url
    url : BASE_URL + '/user/manager',

    bodyStyle: 'padding:5px 10px;',

    initComponent: function() {

        // form config
        var config = {
            labelAlign: 'top',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items:[
                {
                    fieldLabel: 'First Name',
                    allowBlank:false,
                    name: 'firstName'
                },
                {
                    fieldLabel: 'Last Name',
                    allowBlank:false,
                    name: 'lastName'
                },
                {
                    fieldLabel: 'Email',
                    allowBlank:false,
                    name: 'email',
                    vtype:'email'
                },
                {
                    fieldLabel: 'Message',
                    name: 'message',
                    xtype: 'textarea',
                    height:80
                }
            ],
            buttons: [
                {
                    text: 'Send',
                    iconCls: 'icon-email',
                    scope: this,
                    handler : this.onSave
                }
            ]
        }

        Ext.apply(this, Ext.apply(this.initialConfig, config));

        KebabOS.applications.userManager.application.views.InviteUserForm.superclass.initComponent.apply(this, arguments);
    },

    onSave: function() {

        if (this.getForm().isValid()) {

            var notification = new Kebab.OS.Notification();

            this.getForm().submit({

                url: this.url,

                method: 'POST',

                //waitMsg: 'Updating...',

                success : function() {
                    notification.message(this.bootstrap.launcher.text, 'Success');
                    this.getForm().reset();
                },

                failure : function() {
                    notification.message(this.bootstrap.launcher.text, 'Failure');
                },

                scope:this
            });
        }
    }
});
