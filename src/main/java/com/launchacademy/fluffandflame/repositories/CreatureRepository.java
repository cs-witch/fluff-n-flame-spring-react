package com.launchacademy.fluffandflame.repositories;

import com.launchacademy.fluffandflame.models.Creature;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreatureRepository extends PagingAndSortingRepository<Creature, Integer> {
}
