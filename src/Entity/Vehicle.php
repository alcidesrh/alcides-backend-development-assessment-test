<?php

namespace App\Entity;

use App\Repository\VehicleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(normalizationContext: ['groups' => ['vehicleList']], order: ["id" => "DESC"])]
#[ORM\Entity(repositoryClass: VehicleRepository::class)]

class Vehicle
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column()]
    private ?int $id = null;

    #[ORM\Column]
    #[Groups("vehicleList")]
    private ?int $year = null;

    #[ORM\Column(length: 255)]
    #[Groups("vehicleList")]
    private ?string $make = null;

    #[ORM\Column(length: 50)]
    #[Groups("vehicleList")]
    private ?string $model = null;

    #[ORM\Column(length: 100)]
    #[Groups(["orderList", "vehicleList"])]
    private ?string $vin = null;

    #[ORM\ManyToMany(targetEntity: Part::class)]
    #[Groups("vehicleList")]
    private Collection $parts;

    #[ORM\OneToMany(mappedBy: 'vehicle', targetEntity: Order::class, cascade: ['remove'])]
    private Collection $orders;

    public function __construct()
    {
        $this->parts = new ArrayCollection();
        $this->orders = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(int $year): self
    {
        $this->year = $year;

        return $this;
    }

    public function getMake(): ?string
    {
        return $this->make;
    }

    public function setMake(string $make): self
    {
        $this->make = $make;

        return $this;
    }

    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(string $model): self
    {
        $this->model = $model;

        return $this;
    }

    public function getVin(): ?string
    {
        return $this->vin;
    }

    public function setVin(string $vin): self
    {
        $this->vin = $vin;

        return $this;
    }

    /**
     * @return Collection<int, Part>
     */
    public function getParts(): Collection
    {
        return $this->parts;
    }

    public function addPart(Part $part): self
    {
        if (!$this->parts->contains($part)) {
            $this->parts[] = $part;
        }

        return $this;
    }

    public function removePart(Part $part): self
    {
        $this->parts->removeElement($part);

        return $this;
    }

    /**
     * @return Collection<int, Order>
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(Order $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders[] = $order;
            $order->setVehicle($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): self
    {
        if ($this->orders->removeElement($order)) {
            // set the owning side to null (unless already changed)
            if ($order->getVehicle() === $this) {
                $order->setVehicle(null);
            }
        }

        return $this;
    }
}
