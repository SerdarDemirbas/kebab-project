<?php

if (!defined('BASE_PATH'))
    exit('No direct script access allowed');
/**
 * Kebab Framework
 *
 * LICENSE
 *
 * This source file is subject to the  Dual Licensing Model that is bundled
 * with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.kebab-project.com/licensing
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to info@lab2023.com so we can send you a copy immediately.
 *
 * @category   Kebab (kebab-reloaded)
 * @package    System
 * @subpackage Controllers
 * @author     lab2023 Dev Team
 * @copyright  Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license    http://www.kebab-project.com/licensing
 * @version    1.5.0
 */


/**
 * Feedback_Feedback
 *
 * @category   Kebab (kebab-reloaded)
 * @package    Administration
 * @subpackage Controllers
 * @author     lab2023 Dev Team
 * @copyright  Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license    http://www.kebab-project.com/licensing
 * @version    1.5.0
 */
class User_ManagerController extends Kebab_Rest_Controller
{
    public function indexAction()
    {
        // Mapping
        $mapping = array(
            'id' => 'user.id'
        );

        $query = Doctrine_Query::create()
                ->select('user.firstName, user.lastName, user.email, user.username, user.status, role.name')
                ->from('Model_Entity_User user')
                ->leftJoin('user.Roles role')
                ->orderBy($this->_helper->sort($mapping));

        $pager = $this->_helper->pagination($query);
        $users = $pager->execute();

        $responseData = array();

        if (is_object($users)) {
            $responseData = $users->toArray();
        }

        $this->getResponse()
                ->setHttpResponseCode(200)
                ->appendBody(
            $this->_helper->response()
                    ->setSuccess(true)
                    ->addData($responseData)
                    ->addTotal($pager->getNumResults())
                    ->getResponse()
        );
    }
    
    public function putAction()
    {
        // Getting parameters
        $params = $this->_helper->param();
        $id = $params['id'];
        $status = $params['status'];
        
        // Updating status
        $user = new User_Model_User();
        $user->assignIdentifier($id);
        $user->status = $status;
        $user->save();
        unset($user);

        // Returning response
        $this->getResponse()
                    ->setHttpResponseCode(201)
                    ->appendBody(
                $this->_helper->response()
                        ->setSuccess(true)
                        ->getResponse()
        	);
    }
    
    public function deleteAction()
    {
        // Getting parameters
        $params = $this->_helper->param();
        $id = $params['id'];
        
        // Updating status
        $user = new User_Model_User();
        $user->assignIdentifier($id);
        $user->delete();
        unset($user);

        // Returning response
        $this->getResponse()
                    ->setHttpResponseCode(201)
                    ->appendBody(
                $this->_helper->response()
                        ->setSuccess(true)
                        ->getResponse()
        	);
    }
}