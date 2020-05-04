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
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

@Data
@NoArgsConstructor
@Entity
@Table(name = "creature_surrender_applications")
public class CreatureSurrenderApplication {

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

  @ManyToOne
  @NotNull
  @JoinColumn (name="creature_type_id")
  private CreatureType creatureType;

  @NotBlank
  @URL
  @Column(name="creature_image_url")
  private String creatureImgUrl;

  @Column(name="vaccination_status")
  private boolean vaccinationStatus;

  @NotNull
  @Column(name="application_status")
  private String applicationStatus;
}

