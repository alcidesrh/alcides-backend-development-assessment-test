<?php

namespace App\Factory;

use App\Entity\Technician;
use App\Repository\TechnicianRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @extends ModelFactory<Technician>
 *
 * @method static Technician|Proxy createOne(array $attributes = [])
 * @method static Technician[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static Technician|Proxy find(object|array|mixed $criteria)
 * @method static Technician|Proxy findOrCreate(array $attributes)
 * @method static Technician|Proxy first(string $sortedField = 'id')
 * @method static Technician|Proxy last(string $sortedField = 'id')
 * @method static Technician|Proxy random(array $attributes = [])
 * @method static Technician|Proxy randomOrCreate(array $attributes = [])
 * @method static Technician[]|Proxy[] all()
 * @method static Technician[]|Proxy[] findBy(array $attributes)
 * @method static Technician[]|Proxy[] randomSet(int $number, array $attributes = [])
 * @method static Technician[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static TechnicianRepository|RepositoryProxy repository()
 * @method Technician|Proxy create(array|callable $attributes = [])
 */
final class TechnicianFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();

        // TODO inject services if required (https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services)
    }

    protected function getDefaults(): array
    {
        return [
            // TODO add your default values here (https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories)
            'firstName' => self::faker()->firstName(),
            'lastName' => self::faker()->lastName(),
        ];
    }

    protected function initialize(): self
    {
        // see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
        return $this
            // ->afterInstantiate(function(Technician $technician): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Technician::class;
    }
}
