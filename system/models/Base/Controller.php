<?php

/**
 * System_Model_Base_Controller
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 * 
 * @property integer $module_id
 * @property string $name
 * @property System_Model_Module $Module
 * @property Doctrine_Collection $Actions
 * @property Doctrine_Collection $Permission
 * @property Doctrine_Collection $Action
 * 
 * @package    ##PACKAGE##
 * @subpackage ##SUBPACKAGE##
 * @author     lab2023 - Dev. Team <info@lab2023.com>
 * @version    SVN: $Id: Builder.php 7490 2010-03-29 19:53:27Z jwage $
 */
abstract class System_Model_Base_Controller extends Doctrine_Record
{
    public function setTableDefinition()
    {
        $this->setTableName('controller');
        $this->hasColumn('module_id', 'integer', null, array(
             'type' => 'integer',
             ));
        $this->hasColumn('name', 'string', 255, array(
             'type' => 'string',
             'length' => '255',
             ));

        $this->option('type', 'INNODB');
        $this->option('collate', 'utf8_bin');
        $this->option('charset', 'utf8');
    }

    public function setUp()
    {
        parent::setUp();
        $this->hasOne('System_Model_Module as Module', array(
             'local' => 'module_id',
             'foreign' => 'id'));

        $this->hasMany('System_Model_Action as Actions', array(
             'local' => 'action_id',
             'foreign' => 'id'));

        $this->hasMany('System_Model_Permission as Permission', array(
             'local' => 'id',
             'foreign' => 'controller_id'));

        $this->hasMany('System_Model_Action as Action', array(
             'local' => 'id',
             'foreign' => 'controller_id'));
    }
}