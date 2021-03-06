package com.launchacademy.fluffandflame.seeders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainSeeder implements CommandLineRunner {
  @Autowired
  CreatureTypeSeeder creatureTypeSeeder;

  @Autowired
  CreatureSeeder creatureSeeder;

  @Override
  public void run(String...args) throws Exception {

    creatureTypeSeeder.seed();
    creatureSeeder.seed();
  }

}
