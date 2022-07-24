<?php

namespace App\Factory;

use App\Entity\Part;
use App\Repository\PartRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @extends ModelFactory<Part>
 *
 * @method static Part|Proxy createOne(array $attributes = [])
 * @method static Part[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static Part|Proxy find(object|array|mixed $criteria)
 * @method static Part|Proxy findOrCreate(array $attributes)
 * @method static Part|Proxy first(string $sortedField = 'id')
 * @method static Part|Proxy last(string $sortedField = 'id')
 * @method static Part|Proxy random(array $attributes = [])
 * @method static Part|Proxy randomOrCreate(array $attributes = [])
 * @method static Part[]|Proxy[] all()
 * @method static Part[]|Proxy[] findBy(array $attributes)
 * @method static Part[]|Proxy[] randomSet(int $number, array $attributes = [])
 * @method static Part[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static PartRepository|RepositoryProxy repository()
 * @method Part|Proxy create(array|callable $attributes = [])
 */
final class PartFactory extends ModelFactory
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
            'name' => self::faker()->word(),
            'price' => self::faker()->randomFloat(2),
            'description' => self::faker()->text(),
        ];
    }

    protected function initialize(): self
    {
        // see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
        return $this
            // ->afterInstantiate(function(Part $part): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Part::class;
    }
}
