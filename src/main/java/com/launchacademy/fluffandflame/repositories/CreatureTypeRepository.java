package com.launchacademy.fluffandflame.repositories;

import com.launchacademy.fluffandflame.models.CreatureType;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CreatureTypeRepository extends PagingAndSortingRepository<CreatureType, Integer > {

  List<CreatureType> findAll();

}
