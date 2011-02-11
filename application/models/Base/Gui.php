<?php

/**
 * Model_Base_Gui
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 * 
 * @property string $name
 * @property Doctrine_Collection $Assets
 * @property Doctrine_Collection $StoryGui
 * @property Doctrine_Collection $GuiAsset
 * @property Doctrine_Collection $Gui
 * 
 * @package    ##PACKAGE##
 * @subpackage ##SUBPACKAGE##
 * @author     lab2023 - Dev. Team <info@lab2023.com>
 * @version    SVN: $Id: Builder.php 7490 2010-03-29 19:53:27Z jwage $
 */
abstract class Model_Base_Gui extends Doctrine_Record
{
    public function setTableDefinition()
    {
        $this->setTableName('gui');
        $this->hasColumn('name', 'string', 255, array(
             'type' => 'string',
             'unique' => true,
             'length' => '255',
             ));

        $this->option('type', 'INNODB');
        $this->option('collate', 'utf8_bin');
        $this->option('charset', 'utf8');
    }

    public function setUp()
    {
        parent::setUp();
        $this->hasMany('Model_Asset as Assets', array(
             'refClass' => 'Model_GuiAsset',
             'local' => 'gui_id',
             'foreign' => 'asset_id'));

        $this->hasMany('Model_StoryGui as StoryGui', array(
             'local' => 'id',
             'foreign' => 'gui_id'));

        $this->hasMany('Model_GuiAsset as GuiAsset', array(
             'local' => 'id',
             'foreign' => 'gui_id'));

        $this->hasMany('Model_Story as Gui', array(
             'refClass' => 'Model_StoryGui',
             'local' => 'gui_id',
             'foreign' => 'story_id'));
    }
}