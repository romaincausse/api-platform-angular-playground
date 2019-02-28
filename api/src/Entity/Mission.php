<?php
// api/src/Entity/Mission.php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * A mission.
 *
 * @ORM\Entity
 * @ApiResource
 */
class Mission
{
    /**
     * @var int The id of this mission.
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @var string The title of this mission.
     *
     * @ORM\Column
     * @Assert\NotBlank
     */
    public $title;

    /**
     * @var string The acronyme of this mission.
     *
     * @ORM\Column(type="text")
     * @Assert\NotBlank
     */
    public $acronyme;

     /**
     * @var string The Description of this mission.
     *
     * @ORM\Column(type="text")
     * @Assert\NotBlank
     */
    public $description;

    /**
     * @var string The color of this mission.
     *
     * @ORM\Column
     * @Assert\NotBlank
     */
    public $color;

    /**
     * @var \DateTimeInterface The publication date of this mission.
     *
     * @ORM\Column(type="datetime")
     */
    public $publicationDate;

    /**
     * @var \DateTimeInterface The start date of this mission.
     *
     * @ORM\Column(type="datetime", nullable=true)
     */
    public $startDate;

    /**
     * @var \DateTimeInterface The due date of this mission.
     *
     * @ORM\Column(type="datetime", nullable=true)
     */
    public $dueDate;

    /**
     * @var Assignment[] Available assignments for this mission.
     *
     * @ORM\OneToMany(targetEntity="Assignment", mappedBy="mission")
     */
    public $assignments;
    
    public function __construct()
    {
        $this->assigments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
}
