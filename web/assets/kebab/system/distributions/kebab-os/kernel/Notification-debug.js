/* -----------------------------------------------------------------------------
 Kebab Project 1.5.x (Kebab Reloaded)
 http://kebab-project.com
 Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc.
 http://www.lab2023.com

    * LICENSE
    * 
    * This source file is subject to the  Dual Licensing Model that is bundled
    * with this package in the file LICENSE.txt.
    * It is also available through the world-wide-web at this URL:
    * http://www.kebab-project.com/licensing
    * If you did not receive a copy of the license and are unable to
    * obtain it through the world-wide-web, please send an email
    * to info@lab2023.com so we can send you a copy immediately.
----------------------------------------------------------------------------- */

Ext.namespace('Kebab.Notification');

/**
 * Kebab.Notification
 *
 * @namespace   Kebab.OS
 * @author      Tayfun Öziş ERİKAN <tayfun.ozis.erikan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/cms/licensing
 * @version    1.5.0
 */
Kebab.Notification = Ext.extend(Ext.util.Observable, {

    /**
     * Message container element
     */
    messageContainer: null,

    /**
     * Object constructor
     * @param config
     */
    constructor: function(config) { 
        
        Ext.apply(this, config);

        Kebab.Notification.superclass.constructor.call(this, arguments);
    },

    /**
     * Show messages
     * 
     * @param title
     * @param message
     * @param keep
     */
    message : function(title, message, keep){

        // KBBTODO add icon support
        
        var qtipMsg = Kebab.helper.translate('Click to hide');
        
        var messageBody = function(t, s){
            return ['<div ext:qtip="'+qtipMsg+'">',
            '<p><h3>', t, '</h3>', s, '</p>',
            '</div>'].join('');
        };

        this.messageContainer = this.messageContainer || Ext.DomHelper.insertFirst(document.body, {
            cls:'kebab-notifications-body',
            id: 'kebab-notifications'
        }, true).alignTo(document.body, 'tr-tr', [-15, 50]);
        
        var messageEl = Ext.DomHelper.append(this.messageContainer, {
            cls: 'kebab-notifications kebab-shadow-std kebab-rounded-corners',
            html: messageBody(title, message),
            alignTo: [0, 33]
        }, true);

        if (!keep) {
            messageEl.slideIn('t', {easing: 'backOut', duration: .0}).pause(2).ghost("b", {
                remove:true,
                easing: 'easeIn',
                duration: .15,
                callback: function() {
                    messageEl.remove();
                },
                scope:this
            });
        } else {
            messageEl.slideIn('t', {easing: 'backOut', duration: .0});
            messageEl.on('click', function() {
                messageEl.puff({
                    remove: true,
                    easing: 'easeIn',
                    duration: .15,
                    callback: function() {
                        messageEl.remove();
                    },
                    scope:this
                });
            });
        }

        // KBBTODO Messages z-index problem solution is -> this.messageContainer.setStyle('z-index', 0);
    },

    /**
     * Show dialog
     * 
     * @param title
     * @param message
     * @param type
     */
    dialog: function(title, message, type) {

        var icon = this.getIcon(type);
        
        Ext.Msg.show({
            modal:true,
            title: title,
            msg: message,
            icon: icon,
            buttons: Ext.Msg.OK
        });
    },

    /**
     * Get dialog or message icons
     * @param type
     */
    getIcon: function(type) {

        var icon = null;

        switch (type) {
            case 'WARN':
                icon = Ext.MessageBox.WARNING
                break;
            case 'ERR':
                icon = Ext.MessageBox.ERROR
                break;
            default:
                icon = Ext.MessageBox.INFO
                break;
        }

        return icon;
    }
});