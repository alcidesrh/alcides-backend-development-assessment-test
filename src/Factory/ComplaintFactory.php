<?php

namespace App\Factory;

use App\Entity\Complaint;
use App\Repository\ComplaintRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @extends ModelFactory<Complaint>
 *
 * @method static Complaint|Proxy createOne(array $attributes = [])
 * @method static Complaint[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static Complaint|Proxy find(object|array|mixed $criteria)
 * @method static Complaint|Proxy findOrCreate(array $attributes)
 * @method static Complaint|Proxy first(string $sortedField = 'id')
 * @method static Complaint|Proxy last(string $sortedField = 'id')
 * @method static Complaint|Proxy random(array $attributes = [])
 * @method static Complaint|Proxy randomOrCreate(array $attributes = [])
 * @method static Complaint[]|Proxy[] all()
 * @method static Complaint[]|Proxy[] findBy(array $attributes)
 * @method static Complaint[]|Proxy[] randomSet(int $number, array $attributes = [])
 * @method static Complaint[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static ComplaintRepository|RepositoryProxy repository()
 * @method Complaint|Proxy create(array|callable $attributes = [])
 */
final class ComplaintFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();

        // TODO inject services if required (https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services)
    }

    protected function getDefaults(): array
    {
        return [
            'subject' => self::faker()->sentence(),
            'description' => self::faker()->text(),
        ];
    }

    protected function initialize(): self
    {
        // see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
        return $this
            // ->afterInstantiate(function(Complaint $complaint): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Complaint::class;
    }
}
