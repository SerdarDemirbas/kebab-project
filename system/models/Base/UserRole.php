<?php

/**
 * System_Model_Base_UserRole
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 * 
 * @property integer $user_id
 * @property integer $role_id
 * @property System_Model_User $User
 * @property System_Model_Role $Role
 * 
 * @package    ##PACKAGE##
 * @subpackage ##SUBPACKAGE##
 * @author     lab2023 - Dev. Team <info@lab2023.com>
 * @version    SVN: $Id: Builder.php 7490 2010-03-29 19:53:27Z jwage $
 */
abstract class System_Model_Base_UserRole extends Doctrine_Record
{
    public function setTableDefinition()
    {
        $this->setTableName('user_role');
        $this->hasColumn('user_id', 'integer', null, array(
             'type' => 'integer',
             'primary' => true,
             ));
        $this->hasColumn('role_id', 'integer', null, array(
             'type' => 'integer',
             'primary' => true,
             ));

        $this->option('type', 'INNODB');
        $this->option('collate', 'utf8_bin');
        $this->option('charset', 'utf8');
    }

    public function setUp()
    {
        parent::setUp();
        $this->hasOne('System_Model_User as User', array(
             'local' => 'user_id',
             'foreign' => 'id'));

        $this->hasOne('System_Model_Role as Role', array(
             'local' => 'role_id',
             'foreign' => 'id'));
    }
}