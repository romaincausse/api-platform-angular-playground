<?php
namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
/**
 * @ORM\Table(name="users")
 * @ORM\Entity
 * @ApiResource(normalizationContext={"groups"={"layout:read"}},
 *              denormalizationContext={"groups"={"layout:write"}})
 */
class User implements UserInterface
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"layout:read"})
     */
    private $id;
    /**
     * @ORM\Column(type="string", length=25, unique=true)
     * @Groups({"layout:read", "layout:write"})
     */
    private $username;
    /**
     * @ORM\Column(type="string", length=500)
     */
    private $password;
    /**
     * @ORM\Column(name="is_active", type="boolean")
     */
    private $isActive;
    public function __construct($username)
    {
        $this->isActive = true;
        $this->username = $username;
    }
    public function getId()
    {
        return $this->id;
    }
    public function getUsername()
    {
        return $this->username;
    }
    public function setUsername($userName)
    {
        $this->username = $userName;
    }
    public function getSalt()
    {
        return null;
    }
    public function getPassword()
    {
        return $this->password;
    }
    public function setPassword($password)
    {
        $this->password = $password;
    }
    public function getRoles()
    {
        return array('ROLE_USER');
    }
    public function eraseCredentials()
    {
    }
}