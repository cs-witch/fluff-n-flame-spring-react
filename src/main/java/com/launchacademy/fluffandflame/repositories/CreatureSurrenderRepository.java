package com.launchacademy.fluffandflame.repositories;

import com.launchacademy.fluffandflame.models.CreatureSurrenderApplication;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreatureSurrenderRepository extends
    PagingAndSortingRepository<CreatureSurrenderApplication, Integer> {
   List<CreatureSurrenderApplication> findAll();
}
