package com.launchacademy.fluffandflame.repositories;

import com.launchacademy.fluffandflame.models.Creature;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CreatureRepository extends PagingAndSortingRepository<Creature, Integer> {
  List<Creature> findAll();

  @Query("SELECT a FROM Creature a JOIN CreatureType p ON a.typeId = p.id WHERE p.type = :type AND a.id = :id")
  Creature findByTypeAndId(@Param("type") String type, @Param("id") Integer id);

  @Query("SELECT a FROM Creature a JOIN CreatureType p ON a.typeId = p.id WHERE p.type = :type")
  List<Creature> findByType(@Param("type") String type);
}
