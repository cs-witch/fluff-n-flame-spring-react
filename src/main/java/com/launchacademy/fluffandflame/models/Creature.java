package com.launchacademy.fluffandflame.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
@Component
@Entity
@Table(name = "adoptable_creatures")
public class Creature {
  @Id
  @SequenceGenerator(name = "creature_generator", sequenceName = "adoptable_creatures_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "creature_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @NotBlank
  @Column(name = "name")
  private String name;

  @NotBlank
  @URL
  @Column(name = "creature_img")
  private String creatureImg;

  @NotNull
  @Column(name = "age")
  private Integer age;

  @NotNull
  @Column(name = "vaccination_status")
  private Boolean vaccinationStatus;

  @NotBlank
  @Column(name = "adoption_story")
  private String adoptionStory;

  @NotBlank
  @Column(name = "adoption_status")
  private String adoptionStatus;

  @NotNull
  @ManyToOne
  @JoinColumn(name = "type_id")
  private CreatureType creatureType;

  @Column(name = "type_id", nullable = false, insertable = false, updatable = false)
  private Integer typeId;
}
