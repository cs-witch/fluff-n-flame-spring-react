package com.launchacademy.fluffandflame.repositories;

import com.launchacademy.fluffandflame.models.CreatureType;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreatureTypeRepository extends PagingAndSortingRepository<CreatureType, Integer > {

  CreatureType findByType(String type);
}
