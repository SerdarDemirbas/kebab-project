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

Ext.namespace(
        'KebabOS.applications.mario',
        'KebabOS.applications.mario.application',
        'KebabOS.applications.mario.application.controllers',
        'KebabOS.applications.mario.application.layouts',
        'KebabOS.applications.mario.application.models',
        'KebabOS.applications.mario.application.views',
        'KebabOS.applications.mario.library'
        );

/**
 * Kebab Application Base Class
 *
 * @category    Kebab (kebab-reloaded)
 * @package     Applications
 * @namespace   KebabOS.applications.mario.application
 * @author      Yunus ÖZCAN <yunus.ozcan@lab2023.com>
 * @copyright   Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license     http://www.kebab-project.com/licensing
 */
KebabOS.applications.mario.application.Bootstrap = function() {

    Ext.apply(this, {

        // Application ID
        id: 'mario-application',

        // Application Launcher Settings
        launcher: {
            text: 'Mario',
            iconCls: 'mario-application-launcher-icon'
        }
    });

    KebabOS.applications.mario.application.Bootstrap.superclass.constructor.call(this);
}