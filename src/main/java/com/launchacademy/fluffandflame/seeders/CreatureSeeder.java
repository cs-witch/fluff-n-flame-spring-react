package com.launchacademy.fluffandflame.seeders;

import com.launchacademy.fluffandflame.models.Creature;
import com.launchacademy.fluffandflame.models.CreatureType;
import com.launchacademy.fluffandflame.repositories.CreatureRepository;
import com.launchacademy.fluffandflame.repositories.CreatureTypeRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CreatureSeeder {

  @Autowired
  private CreatureTypeRepository creatureTypeRepo;

  @Autowired
  private CreatureRepository creatureRepo;

  public void seed() {
    List<Creature> creatureList = new ArrayList<>();
    CreatureType typeNyanCat = creatureTypeRepo.findByType("Nyan Cat");
    CreatureType typeDragon = creatureTypeRepo.findByType("Dragon");
    CreatureType typeUnicorn = creatureTypeRepo.findByType("Unicorn");

    if(creatureRepo.count() == 0) {
      Creature nyanCat = new Creature();
      nyanCat.setName("Taco Cat");
      nyanCat.setCreatureImg("https://i.pinimg.com/originals/af/60/ea/af60ea38d3ff1f9c940ed7540e6b4e9e.jpg");
      nyanCat.setAge(17);
      nyanCat.setVaccinationStatus(false);
      nyanCat.setAdoptionStory("A Nyan cat in the shape of a taco. Yummmmmmm.");
      nyanCat.setAdoptionStatus("available");
      nyanCat.setCreatureType(typeNyanCat);
      nyanCat.setTypeId(nyanCat.getId());
      creatureList.add(nyanCat);

      Creature dragon = new Creature();
      dragon.setName("Spyro");
      dragon.setCreatureImg("https://i.kym-cdn.com/photos/images/original/001/378/444/bb6.jpg");
      dragon.setAge(950);
      dragon.setVaccinationStatus(true);
      dragon.setAdoptionStory("Fought many a battle now needs a happy home.");
      dragon.setAdoptionStatus("available");
      dragon.setCreatureType(typeDragon);
      dragon.setTypeId(dragon.getId());
      creatureList.add(dragon);

      Creature unicorn = new Creature();
      unicorn.setName("Jimmy the Unicorn'");
      unicorn.setCreatureImg("https://cdn.shopify.com/s/files/1/1365/2497/products/Rainbow-unicorn-mask_900x.png");
      unicorn.setAge(28);
      unicorn.setVaccinationStatus(false);
      unicorn.setAdoptionStory("I am really a unicorn, seriously!");
      unicorn.setAdoptionStatus("available");
      unicorn.setCreatureType(typeUnicorn);
      unicorn.setTypeId(unicorn.getId());
      creatureList.add(unicorn);

      for(Creature creature: creatureList){
        creatureRepo.save(creature);
      }
    }
  }
}