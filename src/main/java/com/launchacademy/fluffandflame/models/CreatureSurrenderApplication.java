package com.launchacademy.fluffandflame.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "creature_surrender_applications")
public class CreatureSurrenderApplications {

  @Id
  @SequenceGenerator(name="creature_surrender_applications_generator", sequenceName="creature_surrender_applications_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="creature_surrender_applications_generator")
  @Column(name = "id", nullable=false, unique=true)
  private Integer id;

  @NotNull
  @Column(name = "name")
  private String name;

  @NotNull
  @Column(name = "phone_number")
  private String phoneNumber;

  @NotNull
  @Email
  @Column(name = "email")
  private String email;

  @NotNull
  @Column(name = "creature_name")
  private String creatureName;

  @Column(name="creature_age")
  private Integer creatureAge;

  @NotNull
  @Column(name="creature_type_id")
  private Integer creatureTypeId;

  @NotBlank
  @Column(name="creature_image_url")
  private String creatureImg;

  @Column(name="vaccination_status")
  private boolean vaccinationStatus;

  @NotNull
  @Column(name="application_status")
  private String applicationStatus;
}

