<?php

namespace App\DataFixtures;

use App\Factory\ComplaintFactory;
use App\Factory\CustomerFactory;
use App\Factory\OrderFactory;
use App\Factory\PartFactory;
use App\Factory\TechnicianFactory;
use App\Factory\VehicleFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // CustomerFactory::createMany(20);

        // TechnicianFactory::createMany(20);
        
        // VehicleFactory::createMany(20);

        PartFactory::createMany(20);

        OrderFactory::createMany(20, function(){
            return [
                'parts' => PartFactory::randomRange(0, 5)
            ];
        });

        ComplaintFactory::createMany(50, function(){
            return [
                'orderRepair' => OrderFactory::random()
            ];
        });
    }
}
