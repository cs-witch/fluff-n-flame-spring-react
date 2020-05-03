package com.launchacademy.fluffandflame.seeders;

import com.launchacademy.fluffandflame.models.CreatureType;
import com.launchacademy.fluffandflame.repositories.CreatureTypeRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CreatureTypeSeeder {

  @Autowired
  private CreatureTypeRepository creatureTypesRepo;

  public void seed() {

      if (creatureTypesRepo.count() == 0) {
      CreatureType creature = new CreatureType();
      creature.setType("Nyan Cat");
      creature.setDescription("A mystical flying space feline in the shape of a pop tart");
      creature.setImgUrl(
          "https://i.pinimg.com/originals/93/e4/cd/93e4cd939da891cba51e740039b4f4d2.png");

      CreatureType dragon = new CreatureType();
      dragon.setType("Dragon");
      dragon.setDescription("A powerful reptile in varied sizes with magical abilities.");
      dragon.setImgUrl("https://i.imgur.com/0Z6wZmr.jpg");

      CreatureType unicorn = new CreatureType();
      unicorn.setType("Unicorn");
      unicorn.setDescription(
          "A equine animal, typically with white fur, easily identified by a large horn on their heads.");
      unicorn.setImgUrl("https://i.imgur.com/aQ7YyVW.jpg");

        creatureTypesRepo.save(creature);
        creatureTypesRepo.save(dragon);
        creatureTypesRepo.save(unicorn);

      }
    }
  }


