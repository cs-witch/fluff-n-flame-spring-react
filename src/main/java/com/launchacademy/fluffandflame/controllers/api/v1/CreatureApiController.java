package com.launchacademy.fluffandflame.controllers.api.v1;

import com.launchacademy.fluffandflame.models.Creature;
import com.launchacademy.fluffandflame.models.CreatureType;
import com.launchacademy.fluffandflame.repositories.CreatureRepository;
import com.launchacademy.fluffandflame.repositories.CreatureTypeRepository;
import java.util.List;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class CreatureApiController {
  @Autowired
  private CreatureTypeRepository creatureTypeRepo;

  @Autowired
  private CreatureRepository creatureRepo;

  @NoArgsConstructor
  private class CreatureTypeNotFoundException extends RuntimeException {
  }

  @ControllerAdvice
  private class CreatureTypeNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(CreatureTypeNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String petTypeNotFoundHandler(CreatureTypeNotFoundException ex) {
      return ex.getMessage();
    }
  }

  @GetMapping("/creatures")
  public Iterable<CreatureType> getCreatureTypes() {
    return creatureTypeRepo.findAll();
  }

  @GetMapping("/creatures/{type}")
  public List<Creature> getEachType(@PathVariable String type) {
    return creatureRepo.findByType(type);
  }

  @GetMapping("/creatures/{type}/{id}")
  public Creature getTypeById(@PathVariable Integer id, @PathVariable String type){
    return creatureRepo.findByTypeAndId(type, id);
  }
}

