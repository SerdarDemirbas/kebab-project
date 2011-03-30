/**
 * Kebab AboutMe Application Bootstrap Class
 * 
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.aboutMe.application.controllers
 * @author      Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/licensing
 */
KebabOS.applications.aboutMe.application.controllers.Index = Ext.extend(Ext.util.Observable, {
    
    // Application bootstrap
    bootstrap: null,
    
    constructor: function(config) {
        
        // Base Config
        Ext.apply(this, config || {});
        
        // Call Superclass initComponent() method
        KebabOS.applications.aboutMe.application.controllers.Index.superclass.constructor.apply(this, arguments);
        
        this.init();
    },
    
    // Initialize and define routing settings
    init: function() {

        this.bootstrap.layout.mainForm.on('showHidePasswordForm', this.showHidePasswordFormAction, this);
        this.bootstrap.layout.passwordForm.on('showHidePasswordForm', this.showHidePasswordFormAction, this);

    },
    
    // Actions -----------------------------------------------------------------

    showHidePasswordFormAction: function() {
        this.bootstrap.layout.passwordForm.toggleCollapse();
    }
});
