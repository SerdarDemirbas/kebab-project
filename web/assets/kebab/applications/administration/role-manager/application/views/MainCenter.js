/**
 * roleManager Application MainCenter Class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.roleManager.application.views
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/licensing
 */
KebabOS.applications.roleManager.application.views.MainCenter = Ext.extend(Ext.Panel, {

    // Application bootstrap
    bootstrap: null,
    layout:'fit',
    border:false,

    initComponent: function() {
        this.roleManagerGrid = new KebabOS.applications.roleManager.application.views.RoleManagerGrid({
            bootstrap: this.bootstrap
        });
        var config = {
            items:[this.roleManagerGrid],
            tbar:[
                 {
                    text: 'New Role',
                    iconCls:'icon-user',
                    handler: function() {
                        this.inviteUserWindow.showWindow();
                    },
                    scope:this
                }
            ]
        }

        Ext.apply(this, config);

        KebabOS.applications.roleManager.application.views.MainCenter.superclass.initComponent.apply(this, arguments);
    }
});
