<?php
// api/src/Entity/assignment.php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * A assignment.
 *
 * @ORM\Entity
 * @ApiResource(
 *     collectionOperations={
 *         "get",
 *         "post"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     },
 *     itemOperations={
 *         "get",
 *         "put"={"access_control"="is_granted('ROLE_ADMIN')"},
 *         "delete"={"access_control"="is_granted('ROLE_ADMIN')"}
 *     })
 */
class Assignment
{
    /**
     * @var int The id of this assignment.
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var \DateTimeInterface The start date of this assignment.
     *
     * @ORM\Column(type="datetime")
     * @Assert\NotNull
     */
    public $startDate;

    /**
     * @var \DateTimeInterface The end date of this assignment.
     *
     * @ORM\Column(type="datetime")
     */
    public $endDate;

    /**
     * @var Mission The mission this assignment is about.
     *
     * @ORM\ManyToOne(targetEntity="Mission", inversedBy="assigments")
     * @Assert\NotNull
     */
    public $mission;

    /**
     * @var User The user this assignment is about.
     *
     * @ORM\ManyToOne(targetEntity="User", inversedBy="assigments")
     * @Assert\NotNull
     */
    public $user;

    
    public function __construct()
    {
        $this->assignments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
}
