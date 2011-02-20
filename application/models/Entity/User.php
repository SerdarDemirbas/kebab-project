<?php

/**
 * Model_Entity_User
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 * 
 * @property string $firstName
 * @property string $surname
 * @property string $username
 * @property string $email
 * @property string $password
 * @property string $activationKey
 * @property Doctrine_Collection $Roles
 * @property Doctrine_Collection $UserRole
 * @property Doctrine_Collection $Invitation
 * @property Doctrine_Collection $Feedback
 * 
 * @package    ##PACKAGE##
 * @subpackage ##SUBPACKAGE##
 * @author     lab2023 - Dev. Team <info@lab2023.com>
 * @version    SVN: $Id: Builder.php 7490 2010-03-29 19:53:27Z jwage $
 */
class Model_Entity_User extends Doctrine_Record
{
    public function setTableDefinition()
    {
        $this->setTableName('system_user');
        $this->hasColumn('firstName', 'string', 255, array(
             'type' => 'string',
             'length' => '255',
             ));
        $this->hasColumn('surname', 'string', 255, array(
             'type' => 'string',
             'length' => '255',
             ));
        $this->hasColumn('username', 'string', 16, array(
             'type' => 'string',
             'unique' => true,
             'length' => '16',
             ));
        $this->hasColumn('email', 'string', 255, array(
             'type' => 'string',
             'unique' => true,
             'length' => '255',
             ));
        $this->hasColumn('password', 'string', 255, array(
             'type' => 'string',
             'length' => '255',
             ));
        $this->hasColumn('activationKey', 'string', 255, array(
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
        $this->hasMany('Model_Entity_Role as Roles', array(
             'refClass' => 'Model_Entity_UserRole',
             'local' => 'user_id',
             'foreign' => 'role_id'));

        $this->hasMany('Model_Entity_UserRole as UserRole', array(
             'local' => 'id',
             'foreign' => 'user_id'));

        $this->hasMany('Model_Entity_Invitation as Invitation', array(
             'local' => 'id',
             'foreign' => 'user_id'));

        $this->hasMany('Model_Entity_Feedback as Feedback', array(
             'local' => 'id',
             'foreign' => 'user_id'));

        $timestampable0 = new Doctrine_Template_Timestampable();
        $softdelete0 = new Doctrine_Template_SoftDelete();
        $blameable0 = new Doctrine_Template_Blameable();
        $sluggable0 = new Doctrine_Template_Sluggable(array(
             'fields' => 
             array(
              0 => 'firstName',
              1 => 'surname',
             ),
             ));
        $searchable0 = new Doctrine_Template_Searchable(array(
             'fields' => 
             array(
              0 => 'firstName',
              1 => 'surname',
              2 => 'username',
              3 => 'email',
             ),
             'className' => 'SystemUserSearch',
             ));
        $this->actAs($timestampable0);
        $this->actAs($softdelete0);
        $this->actAs($blameable0);
        $this->actAs($sluggable0);
        $this->actAs($searchable0);
    }
}