/**
 * Kebab Application Bootstrap Class
 *
 * @category    Kebab
 * @package     Applications
 * @namespace   KebabOS.applications.maps.application
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 */
Ext.extend(KebabOS.applications.maps.application.Bootstrap, Kebab.OS.Application, {

    createApplication : function() {

        var desktop = this.app.getDesktop();
        var app = desktop.getApplication(this.id);

        if (!app) {

            // desktop width and heigth
            var winWidth = parseInt(desktop.getWinWidth() / 1);
            var winHeight = parseInt(desktop.getWinHeight() / 1);

            // Default layout
            this.layout = new KebabOS.applications.maps.application.layouts.Layout({
                bootstrap: this
            });

            // Default controlller
            this.defaultController = new KebabOS.applications.maps.application.controllers.Index({
                bootstrap: this
            });

            // create window
            app = desktop.createApplication({
                id: this.id,
                title: this.title.text,
                description: this.title.description,
                iconCls: 'maps-application-gui-icon',
                width: winWidth,
                height: winHeight,
                border:false,
                items: this.layout
            });

        }
        app.show();
    }
});